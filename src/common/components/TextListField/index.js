import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {CheckmarkSvg} from '../../res/svgs';

import styles from './styles';

const TextListField = (props) => {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (props.value.length <= 0) return;

    const regex = /\,\s$/g;
    const regex1 = /\,$/g;

    if (regex1.test(props.value) || regex.test(props.value)) {
      setShowCheck(false);
    }
  }, [props.value]);

  return (
    <View style={[props.hasTopRoom && styles.topSpacing]}>
      <Text style={styles.label}>{props.label}</Text>
      <View>
        <TextInput
          placeholderTextColor={props.error && 'red'}
          style={styles.textbox}
          placeholder={props.placeholder}
          value={props.value ? props.value : ''}
          onChangeText={(text) => {
            props.onChangeText(text);
            if (!showCheck) setShowCheck(true);
          }}
        />
        <TouchableOpacity
          disabled={!showCheck}
          style={[styles.doneButton, !showCheck && {opacity: 0.4}]}
          onPress={() => {
            props.onChangeText(`${props.value}, `);
            setShowCheck(false);
          }}>
          <CheckmarkSvg height={35} width={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextListField;
