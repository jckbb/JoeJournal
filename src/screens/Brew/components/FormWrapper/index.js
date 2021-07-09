import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const SUBMIT_TEXT = 'submit';

const FormWrapper = ({onSubmit, children, ...props}) => {
  return (
    <View style={styles.form}>
      {children}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>{SUBMIT_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormWrapper;
