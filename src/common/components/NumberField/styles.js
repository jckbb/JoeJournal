import {StyleSheet} from 'react-native';
import {WHITE} from '../../res/colors';
import {FIELD_BOX_HEIGHT, FIELD_BOX, FIELD_LABEL_TEXT} from '../../res/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  leftSpacing: {
    marginLeft: 20,
  },
  textbox: {
    height: FIELD_BOX_HEIGHT,
    ...FIELD_BOX,
    paddingLeft: 8,
  },
  label: {
    ...FIELD_LABEL_TEXT,
    marginBottom: 3,
  },
  topSpacing: {
    marginTop: 20,
  },
});
