import React, {useReducer, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';

import NumberField from '../../common/components/NumberField';
import SliderField from '../../common/components/SliderField';
import SubmitForm from '../../common/components/SubmitForm';
import Title from '../../common/components/Title';

import {unitType} from '../../common/res/strings';
import reducer, {initialState} from './data/formReducer';
import {updateField} from './data/actions';
import styles from './styles';

const PrepForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);

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
      props.onNavigateTo('stage');
    }
  };

  return (
    <View>
      <StatusBar hidden />
      <View style={styles.step}>
        <Text style={styles.stepText}>{'1 of 2'}</Text>
      </View>
      <View style={styles.form}>
        <Title>{'Prep'}</Title>
        <SliderField
          hasTopRoom
          label={'Dial Grinder'}
          value={state.dial.value}
          minDial={1}
          maxDial={40}
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
          label={'Water Temperature'}
          placeholder={`90${unitType.celsius}`}
          unit={unitType.celsius}
          value={state.waterTemperature.value}
          onChangeNumber={(value) => {
            dispatch(updateField('waterTemperature', value));
          }}
        />
        <NumberField
          hasTopRoom
          error={showFormErrors && state.coffeeAmount.hasError}
          label={'Coffee Amount'}
          placeholder={`15${unitType.gram}`}
          unit={unitType.gram}
          value={state.coffeeAmount.value}
          onChangeNumber={(value) => {
            dispatch(updateField('coffeeAmount', value));
          }}
        />
        <View style={{alignItems: 'center', top: 50}}>
          <SubmitForm nextArrow label={'Continue'} onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default PrepForm;
