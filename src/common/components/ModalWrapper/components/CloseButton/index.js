import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const CloseButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{'close'}</Text>
    </TouchableOpacity>
  );
};

export default CloseButton;
