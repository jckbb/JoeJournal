import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Step = (props) => (
  <View style={styles.step}>
    <Text style={[styles.stepText, props.dark && styles.dark]}>
      {`${props.currentStep} of ${props.totalSteps}`}
    </Text>
  </View>
);

export default Step;
