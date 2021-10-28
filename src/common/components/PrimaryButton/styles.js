import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_500, SECONDARY_COLOR_400} from '../../res/colors';

export default StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR_400,
    borderRadius: 7,
    padding: 10,
  },
  buttonText: {
    fontSize: 35,
    marginRight: 5,
    color: PRIMARY_COLOR_500,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
