import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../res/colors';

export default StyleSheet.create({
  textbox: {
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 7,
    minHeight: 50,
    paddingLeft: 8,
    backgroundColor: WHITE,
    textAlignVertical: 'top',
    flexWrap: 'wrap',
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
  border: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.6)',
  },
  darkText: {
    color: BLACK,
  },
});
