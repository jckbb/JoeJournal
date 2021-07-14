import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../../../common/res/colors';

const BUTTON_DIMENSION = 45;

export default StyleSheet.create({
  formItem: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginRight: 18,
  },
  removeButton: {
    alignSelf: 'center',
    height: BUTTON_DIMENSION,
    width: BUTTON_DIMENSION,
    backgroundColor: WHITE,
    borderRadius: BUTTON_DIMENSION / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    fontSize: 34,
    fontWeight: '700',
    color: PRIMARY_COLOR,
  },
  buttonPlaceholder: {
    width: BUTTON_DIMENSION,
  },
  topSpacing: {
    marginTop: 20,
  },
});
