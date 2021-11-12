import {StyleSheet} from 'react-native';
import {SECONDARY_COLOR_500} from '../../common/res/colors';

const DIMENSION = 175;

export default StyleSheet.create({
  testContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentValueText: {
    fontSize: 35,
    fontWeight: '700',
    alignSelf: 'center',
  },
  knob: {
    margin: 20,
    backgroundColor: SECONDARY_COLOR_500,
    borderRadius: DIMENSION / 2,
    height: DIMENSION,
    width: DIMENSION,
  },
});
