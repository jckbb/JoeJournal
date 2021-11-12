import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_500, PRIMARY_COLOR_700, WHITE} from '../../res/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  step: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: PRIMARY_COLOR_500,
    borderRadius: 14,
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
