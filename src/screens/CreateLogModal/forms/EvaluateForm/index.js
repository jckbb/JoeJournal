import React, {useReducer} from 'react';
import {ScrollView} from 'react-native';

import FormWrapper from '../../components/FormWrapper';
import SliderField from '../../components/SliderField';
import FormTitle from '../../components/FormTitle';

import {updateField} from './data/actions';
import formReducer, {initialState} from './data/reducer';
import styles from './styles';

const EvaluateForm = (props) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleFormComplete = () => {
    props.onSubmit(state);
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.brewContent}>
      <FormWrapper submitLabel={'Submit'} onSubmit={handleFormComplete}>
        <FormTitle label={'Evaluate Brew'} />
        <SliderField
          hasTopRoom
          hideValueTracker
          label={'Aroma'}
          value={state.aroma.value}
          minDial={0}
          maxDial={4}
          minLabel={'Low'}
          maxLabel={'High'}
          step={1}
          onValueChange={(value) => {
            dispatch(updateField('aroma', value));
          }}
        />
        <SliderField
          hasTopRoom
          hideValueTracker
          label={'Acidity'}
          value={state.acidity.value}
          minDial={0}
          maxDial={4}
          minLabel={'Low'}
          maxLabel={'High'}
          step={1}
          onValueChange={(value) => {
            dispatch(updateField('acidity', value));
          }}
        />
        <SliderField
          hasTopRoom
          hideValueTracker
          label={'Sweetness'}
          value={state.sweetness.value}
          minDial={0}
          maxDial={4}
          minLabel={'Low'}
          maxLabel={'High'}
          step={1}
          onValueChange={(value) => {
            dispatch(updateField('sweetness', value));
          }}
        />
        <SliderField
          hasTopRoom
          hideValueTracker
          label={'Body'}
          value={state.body.value}
          minDial={0}
          maxDial={4}
          minLabel={'Light'}
          maxLabel={'Heavy'}
          step={1}
          onValueChange={(value) => {
            dispatch(updateField('body', value));
          }}
        />
        <SliderField
          hasTopRoom
          hideValueTracker
          label={'Finish'}
          value={state.finish.value}
          minDial={0}
          maxDial={4}
          minLabel={'Short'}
          maxLabel={'Long'}
          step={1}
          onValueChange={(value) => {
            dispatch(updateField('finish', value));
          }}
        />
        <SliderField
          hasTopRoom
          label={'Overall'}
          value={state.overall.value}
          minDial={0}
          maxDial={10}
          step={1}
          onValueChange={(value) => {
            dispatch(updateField('overall', value));
          }}
        />
      </FormWrapper>
    </ScrollView>
  );
};

export default EvaluateForm;
