import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {CloseIcon} from '../../res/svgs';

import styles from './styles';

const ModalCloseButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <CloseIcon />
    </TouchableOpacity>
  );
};

export default ModalCloseButton;
