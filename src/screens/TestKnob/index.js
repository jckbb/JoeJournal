import React, {useRef, useState} from 'react';
import {View, Text, PanResponder} from 'react-native';

import styles from './styles';

const TestKnob = () => {
  const [value, setValue] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {},
      onPanResponderMove: (evt, gestureState) => {},
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {},
      onPanResponderTerminate: (evt, gestureState) => {},
      onShouldBlockNativeResponder: (evt, gestureState) => true,
    }),
  ).current;

  return (
    <View style={styles.testContainer}>
      <View>
        <Text style={styles.currentValueText}>{value}</Text>
        <View {...panResponder.panHandlers} style={styles.knob} />
      </View>
    </View>
  );
};

export default TestKnob;
