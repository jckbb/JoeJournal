import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const FormWrapper = ({onSubmit, children, ...props}) => {
  return (
    <View style={styles.form}>
      {children}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>{props.submitLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormWrapper;
