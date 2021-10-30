import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_700, WHITE} from '../../res/colors';

export default StyleSheet.create({
  step: {
    alignItems: 'center',
    padding: 10,
  },
  stepText: {
    color: WHITE,
    fontSize: 20,
    fontWeight: '700',
  },
  dark: {
    color: PRIMARY_COLOR_700,
  },
});
