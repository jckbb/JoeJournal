import React, {useEffect, useReducer, useState} from 'react';
import {ScrollView, View, Text, StatusBar} from 'react-native';

import NumberField from '../../common/components/NumberField';
import SliderField from '../../common/components/SliderField';
import SubmitForm from '../../common/components/SubmitForm';
import Title from '../../common/components/Title';
import Step from '../../common/components/Step';

import {unitType, grinderData} from '../../common/res/strings';
import reducer, {initialState} from './data/formReducer';
import {updateField} from './data/actions';

import {
  TITLE,
  dialField,
  waterTemperatureField,
  ratioField,
  beanAmountField,
} from './res/strings';
import {convertFormDataToRecord} from './utils';
import styles from './styles';

const PrepForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);
  const [ratio, setRatio] = useState(undefined);

  useEffect(() => {
    if (ratio === undefined || state.coffeeAmount.value === undefined) return;

    const total = ratio * state.coffeeAmount.value;
    dispatch(updateField('totalWaterAmount', total));
  }, [ratio, state.coffeeAmount.value]);

  const handleSubmit = () => {
    let isFormValid = true;

    for (const field in state) {
      if (state[field].hasError) {
        isFormValid = false;
      }
    }

    if (!isFormValid) {
      setFormErrors(true);
    } else {
      // continue
      const record = convertFormDataToRecord(state);
      props.onPrepComplete(record);
      props.onNavigateTo('stage');
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <Step totalSteps={2} currentStep={1} />
      <ScrollView style={{flex: 1}}>
        <View style={{marginLeft: '10%'}}>
          <Title>{TITLE}</Title>
        </View>
        <View style={styles.form}>
          <SliderField
            hasTopRoom
            label={dialField.LABEL}
            value={state.dial.value}
            minDial={1}
            maxDial={grinderData[props.data.setup.grinder].maxDial}
            minLabel={'Coarse'}
            maxLabel={'Fine'}
            step={1}
            onValueChange={(value) => {
              dispatch(updateField('dial', value));
            }}
          />
          <NumberField
            hasTopRoom
            error={showFormErrors && state.waterTemperature.hasError}
            label={waterTemperatureField.LABEL}
            placeholder={waterTemperatureField.PLACEHOLDER}
            unit={unitType.celsius}
            value={state.waterTemperature.value}
            onChangeNumber={(value) => {
              dispatch(updateField('waterTemperature', value));
            }}
          />
          <NumberField
            hasTopRoom
            error={showFormErrors && state.coffeeAmount.hasError}
            label={beanAmountField.LABEL}
            placeholder={beanAmountField.PLACEHOLDER}
            unit={unitType.gram}
            value={state.coffeeAmount.value}
            onChangeNumber={(value) => {
              dispatch(updateField('coffeeAmount', value));
            }}
          />
          <View style={[styles.row, styles.ratio]}>
            <NumberField
              error={showFormErrors && state.totalWaterAmount.hasError}
              label={ratioField.LABEL}
              placeholder={ratioField.PLACEHOLDER}
              value={ratio}
              onChangeNumber={(value) => {
                setRatio(value);
              }}
            />
            <Text style={styles.ratioText}>{'to 1'}</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <SubmitForm nextArrow label={'Continue'} onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrepForm;
