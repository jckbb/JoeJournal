import React, {useEffect, useRef} from 'react';
import {View, PanResponder, Dimensions, Animated} from 'react-native';

import styles from './styles';

const {width, height} = Dimensions.get('window');

export const drawerState = {
  Peek: 230,
  Closed: 0,
};

const BottomDrawer = ({children, onDrawerStateChange, ...props}) => {
  const y = useRef(new Animated.Value(drawerState.Closed)).current;
  const state = useRef(new Animated.Value(drawerState.Closed)).current;
  const margin = 0.05 * height;

  useEffect(() => {
    if (props.isVisible) {
      animateMove(y, drawerState.Peek, onDrawerStateChange);
    } else if (!props.isVisible) {
      animateMove(y, drawerState.Closed, onDrawerStateChange);
    }
  }, [props.isVisible]);

  const movementValue = (moveY) => height - moveY;

  const onPanResponderMove = (_, {moveY}) => {
    const val = movementValue(moveY);
    animateMove(y, val);
  };

  const onPanResponderRelease = (_, {moveY}) => {
    const valueToMove = movementValue(moveY);
    const nextState = getNextState(state._value, valueToMove, margin);
    state.setValue(nextState);
    animateMove(y, nextState, onDrawerStateChange(nextState));
  };

  const onMoveShouldSetPanResponder = (_, {dy}) => Math.abs(dy) >= 10;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder,
      onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
      onPanResponderMove,
      onPanResponderRelease,
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderEnd: (e, gestureState) => true,
    }),
  ).current;

  const animateMove = (y, toValue, callback) => {
    Animated.spring(y, {
      toValue: -toValue,
      tension: 20,
      useNativeDriver: true,
    }).start((finished) => {
      /* Optional: But the purpose is to call this after the the animation has finished. Eg. Fire an event that will be listened to by the parent component */
      finished && callback && callback();
    });
  };

  const getNextState = (currentState, val, margin) => {
    switch (currentState) {
      case drawerState.Peek:
        return val <= drawerState.Peek - margin
          ? drawerState.Closed
          : drawerState.Peek;
      case drawerState.Closed:
        return val >= currentState + margin
          ? val <= drawerState.Peek + margin
            ? drawerState.Peek
            : drawerState.Peek
          : drawerState.Closed;
      default:
        return currentState;
    }
  };

  return (
    <Animated.View
      style={[
        styles.bottomDrawer,
        {
          width: width,
          height: height,
          bottom: -height,
          transform: [{translateY: y}],
        },
      ]}
      {...panResponder.panHandlers}>
      <View style={styles.chin} />
      {children}
    </Animated.View>
  );
};

export default BottomDrawer;
