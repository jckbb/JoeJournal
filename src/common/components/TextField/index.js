import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const TextField = (props) => {
  return (
    <View style={[props.hasTopRoom && styles.topSpacing]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.textbox, props.error && {borderColor: 'red'}]}
        placeholder={props.placeholder}
        value={props.value ? props.value : ''}
        onChangeText={props.onChangeText}
        blurOnSubmit
        multiline={true}
        numberOfLines={props.lineCount ? props.lineCount : 1}
      />
    </View>
  );
};

export default TextField;
