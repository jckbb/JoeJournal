import React, {useReducer} from 'react';
import {ScrollView} from 'react-native';

import FormWrapper from './components/FormWrapper';
import TextField from './components/TextField';
import ButtonField from './components/ButtonField';

import formReducer, {actionTypes, initialState} from './reducer';

const Brew = (props) => {
  const [{data, error}, dispatch] = useReducer(formReducer, initialState);

  const updateField = (field, payload) => {
    dispatch({type: actionTypes.UPDATE_FIELD, field, payload});
  };

  const updateError = (field, payload) => {
    dispatch({type: actionTypes.UPDATE_ERROR, field, payload});
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

  return (
    <ScrollView>
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
          placeholder={'Enter brew method'}
          onPress={() => {}}
        />
      </FormWrapper>
    </ScrollView>
  );
};

export default Brew;
