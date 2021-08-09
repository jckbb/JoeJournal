import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const TextField = (props) => {
  return (
    <View style={[props.hasTopRoom && styles.topSpacing]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholderTextColor={props.error && 'red'}
        style={styles.textbox}
        placeholder={props.placeholder}
        value={props.value ? props.value : ''}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default TextField;
