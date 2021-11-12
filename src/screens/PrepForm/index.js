import React, {useEffect, useReducer, useState} from 'react';
import {ScrollView, View, Text, StatusBar} from 'react-native';

import NumberField from '../../common/components/NumberField';
import SliderField from '../../common/components/SliderField';
import PrimaryButton from '../../common/components/PrimaryButton';
import Title from '../../common/components/Title';
import Step from '../../common/components/Step';

import {unitType, grinderData} from '../../common/res/strings';
import reducer, {initialState} from './data/formReducer';
import {updateField, updateForm} from './data/actions';

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
  const grinderName = props.data.setup ? props.data.setup.grinder : undefined;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);

  useEffect(() => {
    if (props.data.prep) {
      dispatch(updateForm(props.data.prep));
    }
  }, [props.data]);

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
      props.onComplete('stage', record);
    }
  };

  return (
    <View style={styles.prepForm}>
      <StatusBar hidden />
      <Step dark totalSteps={2} currentStep={1} />
      <ScrollView style={{flex: 1, paddingTop: 35}}>
        <View style={styles.form}>
          <Title dark>{TITLE}</Title>
          <SliderField
            hasTopRoom
            label={dialField.LABEL}
            value={state.dial.value}
            minDial={1}
            maxDial={
              grinderName !== undefined ? grinderData[grinderName].maxDial : 0
            }
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
          <View style={{marginTop: 30}}>
            <PrimaryButton onPress={handleSubmit}>{'Continue'}</PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrepForm;
