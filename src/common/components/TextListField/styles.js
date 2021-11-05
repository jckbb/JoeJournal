import {StyleSheet} from 'react-native';
import {FIELD_BOX, FIELD_BOX_HEIGHT, FIELD_LABEL_TEXT} from '../../res/themes';

export default StyleSheet.create({
  textbox: {
    ...FIELD_BOX,
    height: FIELD_BOX_HEIGHT,
    paddingLeft: 8,
    paddingRight: 40,
    textTransform: 'capitalize',
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
    borderColor: 'rgba(0, 0, 0, 0.6)',
  },
  doneButton: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    right: 5,
  },
});
