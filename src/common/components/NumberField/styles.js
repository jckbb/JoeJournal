import {StyleSheet} from 'react-native';
import {WHITE} from '../../res/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  leftSpacing: {
    marginLeft: 20,
  },
  textbox: {
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 7,
    height: 50,
    paddingLeft: 8,
    backgroundColor: WHITE,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.2,
    color: WHITE,
    marginBottom: 3,
  },
  topSpacing: {
    marginTop: 20,
  },
});
