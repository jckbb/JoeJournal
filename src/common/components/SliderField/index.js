import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {WHITE} from '../../res/colors';
import styles, {minTrackerTint, maxTrackerTint} from './styles';

const SliderField = ({label, ...props}) => {
  const animatedValue = useRef(new Animated.Value(props.value)).current;
  const [sliderValue, setSliderValue] = useState(props.value);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    animateSlider(sliderValue);

    if (sliderValue === props.value) return;

    props.onValueChange(sliderValue);
  }, [sliderValue]);

  const animateSlider = (value) => {
    animatedValue.setValue(value / props.maxDial);
  };

  return (
    <View style={[props.hasTopRoom && styles.topSpacing]}>
      <Text style={styles.label}>{label}</Text>
      {props.shouldHideSlider ? <View style={styles.sliderSpace}/> : (
        <>
          {!props.hideValueTracker && (
            <Animated.View
              style={[
                styles.floatTracker,
                {
                  transform: [
                    {
                      translateX: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [8, sliderWidth - 20],
                      }),
                    },
                  ],
                },
              ]}>
              <Text style={styles.trackerText}>{props.value}</Text>
            </Animated.View>
          )}
          <Slider
            onLayout={(event) => {
              setSliderWidth(event.nativeEvent.layout.width);
            }}
            style={[styles.slider, !props.hideValueTracker && {marginTop: 15}]}
            minimumValue={props.minDial}
            maximumValue={props.maxDial}
            step={props.step}
            minimumTrackTintColor={minTrackerTint}
            maximumTrackTintColor={maxTrackerTint}
            thumbTintColor={WHITE}
            value={props.value}
            onValueChange={(value) => {
              setSliderValue(value);
            }}
          />
          <View style={styles.bounds}>
            <Text style={styles.boundsText}>
              {props.minLabel ? props.minLabel : props.minDial}
            </Text>
            <Text style={styles.boundsText}>
              {props.maxLabel ? props.maxLabel : props.maxDial}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default SliderField;
