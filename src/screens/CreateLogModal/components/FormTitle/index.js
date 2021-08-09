import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const FormTitle = (props) => {
  return <Text style={styles.titleText}>{props.label}</Text>;
};

export default FormTitle;
