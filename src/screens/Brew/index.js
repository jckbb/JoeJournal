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
import {unitType} from '../../common/res/strings';
import FormWrapper from './components/FormWrapper';
import TextField from './components/TextField';
import ButtonField from './components/ButtonField';
import OptionList from './components/OptionList';
import SliderField from './components/SliderField';
import NumberField from './components/NumberField';
import FormItem from './components/FormItem';

import formReducer, {actionTypes, initialState} from './reducer';
import styles from './styles';

const initialOptions = {
  type: undefined,
  data: {},
  names: [],
};

const Brew = (props) => {
  const [options, setOptions] = useState(initialOptions);
  const [isBottomDrawerVisible, setBottomDrawerVisible] = useState(false);
  const [{data, error}, dispatch] = useReducer(formReducer, initialState);

  const updateField = (field, payload) => {
    dispatch({type: actionTypes.UPDATE_FIELD, field, payload});
  };

  const updateError = (field, payload) => {
    dispatch({type: actionTypes.UPDATE_ERROR, field, payload});
  };

  const addSplitItem = () => {
    dispatch({type: actionTypes.ADD_SPLIT_ITEM});
  };

  const removeSplitItem = (payload) => {
    dispatch({type: actionTypes.DELETE_SPLIT_ITEM, payload});
  };

  const updateSplitField = (field, payload, key) => {
    dispatch({
      type: actionTypes.UPDATE_SPLIT_FIELD,
      field,
      key,
      payload,
    });
  };

  const validateForm = () => {
    let hasErrors = false;

    for (const key in error) {
      // valid
      if (data[key] && data[key].length > 0) continue;

      // add key and error
      updateError(key, true);

      // some errors exists
      hasErrors = true;
    }

    return hasErrors;
  };

  const handleSubmit = () => {
    // quick valid check for text field fill
    const hasErrors = validateForm();

    if (hasErrors) return;

    // close modal
    props.onRequestClose();
  };

  const handleBottomDrawerClose = () => {
    setBottomDrawerVisible(false);
    setOptions(initialOptions);
  };

  const renderBrewSplits = (splits) => {
    if (splits.length <= 0) return;

    return (
      <View style={styles.splitList}>
        {splits.map((splitIndex, index) => {
          const split = data.splitData[splitIndex];
          const isDisabled =
            index === 0 || index !== data.splitByIndex.length - 1;

          return (
            <FormItem
              hasTopRoom={index > 0}
              disabled={isDisabled}
              key={index}
              onRemoveItem={() => {
                removeSplitItem(splitIndex);
              }}>
              <TextField
                error={error[splitIndex].stageName}
                label={`Stage #${index + 1}`}
                placeholder={'Bloom'}
                value={split.stage}
                onChangeText={(text) => {
                  updateSplitField('stage', text, splitIndex);
                }}
              />
              <View style={styles.formRow}>
                <NumberField
                  error={error[splitIndex].waterAmount}
                  label={'Water Amount'}
                  placeholder={'40g'}
                  unit={unitType.gram}
                  value={split.waterAmount}
                  onChangeNumber={(value) => {
                    updateSplitField('waterAmount', value, splitIndex);
                  }}
                />
                <NumberField
                  error={error[splitIndex].duration}
                  label={'Duration'}
                  placeholder={'45s'}
                  unit={unitType.seconds}
                  value={split.duration}
                  onChangeNumber={(value) => {
                    updateSplitField('duration', value, splitIndex);
                  }}
                />
              </View>
            </FormItem>
          );
        })}
        <View style={styles.splitListSpacer} />
        <IconButton
          onPress={() => {
            addSplitItem();
          }}>
          <Text style={styles.addText}>{'+'}</Text>
        </IconButton>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={styles.brew}>
        <FormWrapper onSubmit={handleSubmit}>
          <TextField
            hasTopRoom
            error={error.roastName}
            label={'Roast Name'}
            placeholder={'Enter roast name'}
            value={data.roastName}
            onChangeText={(text) => {
              updateField('roastName', text);
            }}
          />
          <ButtonField
            hasTopRoom
            error={error.brewMethod}
            label={'Brew Method'}
            value={data.brewMethod}
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
            error={error.grinder}
            label={'Grinder'}
            value={data.grinder}
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
            shouldHideSlider={!data.grinder}
            label={'Dial'}
            value={data.dial}
            minDial={0}
            maxDial={40}
            step={2}
            onValueChange={(value) => {
              updateField('dial', value);
            }}
          />
          <NumberField
            hasTopRoom
            error={error.coffeeAmount}
            label={'Coffee Amount'}
            placeholder={'15g'}
            unit={unitType.gram}
            value={data.coffeeAmount}
            onChangeNumber={(value) => {
              updateField('coffeeAmount', value);
            }}
          />
          <View style={styles.formRow}>
            <NumberField
              hasTopRoom
              error={error.waterAmount}
              label={'Water Amount'}
              placeholder={'350g'}
              unit={unitType.gram}
              value={data.waterAmount}
              onChangeNumber={(value) => {
                updateField('waterAmount', value);
              }}
            />
            <NumberField
              hasTopRoom
              error={error.waterTemperature}
              label={'Water Temperature'}
              placeholder={'90°C'}
              unit={unitType.celsius}
              value={data.waterTemperature}
              onChangeNumber={(value) => {
                updateField('waterTemperature', value);
              }}
            />
          </View>
          {renderBrewSplits(data.splitByIndex)}
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
            updateField(options.type, selectedOption);
            handleBottomDrawerClose();
          }}
        />
      </BottomDrawer>
    </>
  );
};

export default Brew;
