import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';

import styles from './styles';

const NumberField = ({label, ...props}) => {
  const [selection, setSelection] = useState({
    start: 0,
    end: 0,
  });

  useEffect(() => {
    if (!props.value) return;

    const charCount = props.value.toString().length;

    setSelection({
      start: charCount,
      end: charCount,
    });
  }, [props.value]);

  const handleChangeText = (text) => {
    props.onChangeNumber(parseInt(text));
  };

  return (
    <View style={[props.hasTopRoom && styles.topSpacing]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={props.error.hasError && 'red'}
        style={styles.textbox}
        placeholder={props.placeholder}
        value={props.value ? props.value.toString() : ''}
        onChangeText={handleChangeText}
        selection={selection}
        keyboardType={'number-pad'}>
        {props.value ? <Text>{props.unit}</Text> : ''}
      </TextInput>
    </View>
  );
};

export default NumberField;
