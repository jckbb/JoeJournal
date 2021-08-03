import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const ModalCloseButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttonText}>{'close'}</Text>
    </TouchableOpacity>
  );
};

export default ModalCloseButton;
