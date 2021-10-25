import React from 'react';
import {Text, View, TextInput} from 'react-native';

import styles from './styles';

const NumberField = ({label, ...props}) => {
  const handleChangeText = (value) => {
    const text = value.replace(/[^0-9]/g, '');

    props.onChangeNumber(text.length > 0 ? parseInt(text) : undefined);
  };

  return (
    <View
      style={[
        styles.container,
        props.hasTopRoom && styles.topSpacing,
        props.hasLeftRoom && styles.leftSpacing,
      ]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={props.error && 'red'}
        style={styles.textbox}
        placeholder={props.placeholder}
        value={props.value !== undefined ? props.value.toString() : ''}
        onChangeText={handleChangeText}
        keyboardType={'number-pad'}
      />
    </View>
  );
};

export default NumberField;
