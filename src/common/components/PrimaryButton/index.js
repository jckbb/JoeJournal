import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import { PRIMARY_COLOR_500 } from '../../res/colors';

import {ArrowRightSvg} from '../../res/svgs';

import styles from './styles';

const PrimaryButton = ({children, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.center && styles.center]}
      onPress={props.onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.buttonText}>{children}</Text>
        <ArrowRightSvg height={35} width={35} fill={PRIMARY_COLOR_500} />
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
