import React from 'react';
import {ScrollView} from 'react-native';

import FormWrapper from './components/FormWrapper';

const Brew = (props) => {
  const handleSubmit = () => {
    props.onRequestClose();
  };

  return (
    <ScrollView>
      <FormWrapper onSubmit={handleSubmit}>
      </FormWrapper>
    </ScrollView>
  );
};

export default Brew;
