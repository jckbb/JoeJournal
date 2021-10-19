import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const TextListField = (props) => {
  return (
    <View style={[props.hasTopRoom && styles.topSpacing]}>
      <Text style={[styles.label, props.dark && styles.darkText]}>
        {props.label}
      </Text>
      <TextInput
        placeholderTextColor={props.error && 'red'}
        style={[styles.textbox, props.border && styles.border]}
        placeholder={props.placeholder}
        value={props.value ? props.value : ''}
        onChangeText={(text) => {
          const regex = /\,\s$/g;
          const regex1 = /\s$/g;
          let value = text;

          if (regex1.test(text) && !regex.test(text)) {
            value = value.replace(/\s$/g, ', ');
          }

          props.onChangeText(value);
        }}
      />
    </View>
  );
};

export default TextListField;
