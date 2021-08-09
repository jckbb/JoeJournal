import {StyleSheet} from 'react-native';
import {WHITE} from '../../../../common/res/colors';

export default StyleSheet.create({
  form: {
    flex: 1,
    minHeight: 350,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 40,
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
