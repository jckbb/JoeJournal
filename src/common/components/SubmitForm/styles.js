import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_900, WHITE} from '../../res/colors';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: WHITE,
    fontSize: 35,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
  darkButtonText: {
    color: PRIMARY_COLOR_900,
  },
});
