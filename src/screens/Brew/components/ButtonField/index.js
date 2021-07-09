import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const ButtonField = (props) => {
  const content = !props.value ? props.placeholder : props.value;
  const textStyling = !props.value ? styles.placeholder : styles.fieldText;

  return (
    <View style={[props.hasTopRoom && styles.topSpacing]}>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableOpacity
        style={[styles.fieldBox, styles.fieldButton]}
        onPress={props.onPress}>
        <Text style={[textStyling, props.error.hasError && styles.error]}>
          {content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonField;
