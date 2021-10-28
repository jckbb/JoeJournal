import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const PrimaryButton = ({children, ...props}) => {
  console.log(props.disabled);
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.button, props.disabled && {opacity: 0.8}]}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
