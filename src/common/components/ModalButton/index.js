import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const ModalButton = ({children, ...props}) => (
  <TouchableOpacity
    disabled={props.disabled}
    style={styles.button}
    onPress={props.onPress}>
    <Text style={[styles.buttonText, props.disabled && {opacity: 0.8}]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default ModalButton;
