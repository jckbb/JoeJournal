import {StyleSheet} from 'react-native';
import {BLACK, PRIMARY_COLOR_700} from '../../res/colors';
import {FIELD_BOX, FIELD_BOX_HEIGHT, FIELD_LABEL_TEXT} from '../../res/themes';

export default StyleSheet.create({
  textbox: {
    ...FIELD_BOX,
    minHeight: FIELD_BOX_HEIGHT,
    paddingLeft: 8,
    textAlignVertical: 'top',
  },
  label: {
    ...FIELD_LABEL_TEXT,
    marginBottom: 3,
  },
  topSpacing: {
    marginTop: 20,
  },
  border: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_700,
  },
  darkText: {
    color: BLACK,
  },
});
