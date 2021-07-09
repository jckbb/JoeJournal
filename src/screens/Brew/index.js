import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import FormWrapper from './components/FormWrapper';
import TextField from './components/TextField';

const Brew = (props) => {
  const [roastName, setRoastName] = useState('');

  const handleSubmit = () => {
    // quick valid check for text field fill
    if (roastName.length <= 0) return;

    // close modal
    props.onRequestClose();
  };

  return (
    <ScrollView>
      <FormWrapper onSubmit={handleSubmit}>
        <TextField
          hasTopRoom
          label={'Roast Name'}
          placeholder={'Enter roast name'}
          value={roastName}
          onChangeText={(text) => {
            setRoastName(text);
          }}
        />
      </FormWrapper>
    </ScrollView>
  );
};

export default Brew;
