import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const ButtonField = (props) => {
  const content = !props.value ? props.placeholder : props.value;
  const textStyling = !props.value ? styles.placeholder : styles.fieldText;

  return (
    <View style={[styles.container, props.hasTopRoom && styles.topSpacing]}>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableOpacity style={styles.fieldBox} onPress={props.onPress}>
        <Text
          numberOfLines={1}
          style={[textStyling, props.error && styles.error]}>
          {content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonField;
