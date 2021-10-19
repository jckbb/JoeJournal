import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ArrowRightSvg} from '../../res/svgs';

import styles from './styles';

const SubmitForm = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={[styles.buttonText, props.dark && styles.darkButtonText]}>
        {props.label}
      </Text>
      {props.nextArrow && (
        <View style={{marginLeft: 5}}>
          <ArrowRightSvg height={35} width={35} fill="#ffffff" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SubmitForm;
