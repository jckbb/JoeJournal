import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_500, SECONDARY_COLOR_400} from '../../res/colors';

export default StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  button: {
    flex: 1,
    minHeight: 70,
    height: 70,
    backgroundColor: SECONDARY_COLOR_400,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 25,
    lineHeight: 30,
    marginRight: 5,
    color: PRIMARY_COLOR_500,
    letterSpacing: 0.5,
  },
});
