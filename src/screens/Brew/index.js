import React, {useEffect, useReducer, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';

import {
  grinderModelData,
  grinderModelByName,
  brewModelByName,
  brewModelData,
} from '../../common/data';
import IconButton from '../../common/components/IconButton';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';
import ModalCloseButton from '../../common/components/ModalCloseButton';
import {unitType} from '../../common/res/strings';
import FormWrapper from './components/FormWrapper';
import TextField from './components/TextField';
import ButtonField from './components/ButtonField';
import OptionList from './components/OptionList';
import SliderField from './components/SliderField';
import NumberField from './components/NumberField';
import FormItem from './components/FormItem';
import {getPreviousBrewForm, setLog} from '../../storage/utils';

import {createBrewRecord, fromSecondsToMinutes, validateForm} from './utils';
import formReducer, {initialState} from './data/reducer';
import {
  removeSplitItem,
  updateSplitField,
  addSplitItem,
  updateField,
  updateState,
} from './data/actions';
import styles from './styles';

const initialOptions = {
  type: undefined,
  data: {},
  names: [],
};

const initialBrewTotals = {totalDuration: 0, totalWaterAmount: 0};

const Brew = (props) => {
  const [brewTotals, setBrewTotals] = useState(initialBrewTotals);
  const [showFormErrors, setShowFormErrors] = useState(false);
  const [options, setOptions] = useState(initialOptions);
  const [isBottomDrawerVisible, setBottomDrawerVisible] = useState(false);
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    // read storage for last log
    // populate reducer state with last log if exists
    fetchLastLog();

    return () => {
      setBottomDrawerVisible(false);
    };
  }, []);

  useEffect(() => {
    let totalWaterAmount = 0;
    let totalTime = 0;

    for (const brewSplit of state.brewSplits) {
      totalWaterAmount += brewSplit.waterAmount.value;
      totalTime += brewSplit.duration.value;
    }

    setBrewTotals({
      totalDuration: totalTime,
      totalWaterAmount: totalWaterAmount,
    });
  }, [state.brewSplits]);

  const fetchLastLog = async () => {
    const brewFormState = await getPreviousBrewForm();

    if (!brewFormState) return;

    dispatch(updateState(brewFormState));
  };

  const renderBrewTotals = () => {
    return (
      <View style={styles.brewTotals}>
        <View style={styles.formRow}>
          <Text style={styles.label}>{'Total Water'}</Text>
          <Text
            style={[
              styles.label,
              styles.labelResponse,
            ]}>{`${brewTotals.totalWaterAmount}${unitType.gram}`}</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>{'Total Time'}</Text>
          <Text style={[styles.label, styles.labelResponse]}>
            {fromSecondsToMinutes(brewTotals.totalDuration)}
          </Text>
        </View>
      </View>
    );
  };

  const handleSubmit = async () => {
    if (!validateForm(state)) {
      setShowFormErrors(true);
      return;
    }

    const record = createBrewRecord(state, brewTotals);

    await setLog(state, record);

    // close modal
    props.onRequestClose(record);
  };

  const handleBottomDrawerClose = () => {
    setBottomDrawerVisible(false);
    setOptions(initialOptions);
  };

  const renderBrewSplits = (brewSplits) => {
    if (brewSplits.length <= 0) return;

    return (
      <View style={styles.splitList}>
        {renderBrewTotals()}
        {brewSplits.map((brewSplit, index) => {
          const isDisabled = index === 0 || index < brewSplits.length - 1;

          return (
            <FormItem
              hasTopRoom={index > 0}
              disabled={isDisabled}
              key={index}
              onRemoveItem={() => {
                dispatch(removeSplitItem(index));
              }}>
              <TextField
                error={showFormErrors && brewSplit.stage.hasError}
                label={`Stage #${index + 1}`}
                placeholder={'Bloom'}
                value={brewSplit.stage.value}
                onChangeText={(text) => {
                  dispatch(updateSplitField('stage', text, index));
                }}
              />
              <View style={styles.formRow}>
                <NumberField
                  error={showFormErrors && brewSplit.waterAmount.hasError}
                  label={'Water Amount'}
                  placeholder={'40g'}
                  unit={unitType.gram}
                  value={brewSplit.waterAmount.value}
                  onChangeNumber={(value) => {
                    dispatch(updateSplitField('waterAmount', value, index));
                  }}
                />
                <NumberField
                  error={showFormErrors && brewSplit.duration.hasError}
                  label={'Duration'}
                  placeholder={'45s'}
                  unit={unitType.seconds}
                  value={brewSplit.duration.value}
                  onChangeNumber={(value) => {
                    dispatch(updateSplitField('duration', value, index));
                  }}
                />
              </View>
            </FormItem>
          );
        })}
        <View style={styles.splitListSpacer} />
        <IconButton
          onPress={() => {
            dispatch(addSplitItem());
          }}>
          <Text style={styles.addText}>{'+'}</Text>
        </IconButton>
      </View>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <ModalCloseButton
          onPress={() => {
            props.onRequestClose(null);
          }}
        />
      </View>
      <ScrollView
        style={styles.brew}
        contentContainerStyle={styles.brewContent}>
        <FormWrapper onSubmit={handleSubmit}>
          <TextField
            hasTopRoom
            error={showFormErrors && state.roaster.hasError}
            label={'Roaster Name'}
            placeholder={'Enter roaster'}
            value={state.roaster.value}
            onChangeText={(text) => {
              dispatch(updateField('roaster', text));
            }}
          />
          <TextField
            hasTopRoom
            error={showFormErrors && state.region.hasError}
            label={'Region Name'}
            placeholder={'Enter region'}
            value={state.region.value}
            onChangeText={(text) => {
              dispatch(updateField('region', text));
            }}
          />
          <ButtonField
            hasTopRoom
            error={showFormErrors && state.brewMethod.hasError}
            label={'Brew Method'}
            value={state.brewMethod.value}
            placeholder={'Select brew method'}
            onPress={() => {
              setOptions({
                type: 'brewMethod',
                data: brewModelData,
                names: brewModelByName,
              });
              setBottomDrawerVisible(true);
            }}
          />
          <ButtonField
            hasTopRoom
            error={showFormErrors && state.grinder.hasError}
            label={'Grinder'}
            value={state.grinder.value}
            placeholder={'Select grinder'}
            onPress={() => {
              setOptions({
                type: 'grinder',
                data: grinderModelData,
                names: grinderModelByName,
              });
              setBottomDrawerVisible(true);
            }}
          />
          <SliderField
            hasTopRoom
            shouldHideSlider={!state.grinder.value}
            label={'Dial'}
            value={state.dial.value}
            minDial={0}
            maxDial={40}
            step={2}
            onValueChange={(value) => {
              dispatch(updateField('dial', value));
            }}
          />
          <View style={styles.formRow}>
            <NumberField
              hasTopRoom
              error={showFormErrors && state.coffeeAmount.hasError}
              label={'Coffee Amount'}
              placeholder={'15g'}
              unit={unitType.gram}
              value={state.coffeeAmount.value}
              onChangeNumber={(value) => {
                dispatch(updateField('coffeeAmount', value));
              }}
            />
            <NumberField
              hasTopRoom
              error={showFormErrors && state.waterTemperature.hasError}
              label={'Water Temperature'}
              placeholder={'90°C'}
              unit={unitType.celsius}
              value={state.waterTemperature.value}
              onChangeNumber={(value) => {
                dispatch(updateField('waterTemperature', value));
              }}
            />
          </View>
          {renderBrewSplits(state.brewSplits)}
        </FormWrapper>
      </ScrollView>
      <BottomDrawer
        isVisible={isBottomDrawerVisible}
        onDrawerStateChange={(changedState) => {
          if (drawerState.Closed === changedState) {
            handleBottomDrawerClose();
          }
        }}>
        <OptionList
          optionData={options.data}
          options={options.names}
          onOptionChange={selectedOption => {
            dispatch(updateField(options.type, selectedOption));
            handleBottomDrawerClose();
          }}
        />
      </BottomDrawer>
    </>
  );
};

export default Brew;
