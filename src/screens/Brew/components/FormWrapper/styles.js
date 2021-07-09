import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../../../common/res/colors';

export default StyleSheet.create({
  form: {
    flex: 1,
    minHeight: 350,
    justifyContent: 'flex-end',
  },
  button: {
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: WHITE,
    fontSize: 25,
    textTransform: 'uppercase',
  },
});
