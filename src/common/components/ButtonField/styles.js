import {StyleSheet} from 'react-native';
import {BLACK, PRIMARY_COLOR_800} from '../../res/colors';
import {FIELD_BOX, FIELD_BOX_HEIGHT, FIELD_LABEL_TEXT} from '../../res/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  error: {
    color: 'red',
    opacity: 1.0,
  },
  topSpacing: {
    marginTop: 20,
  },
  fieldBox: {
    ...FIELD_BOX,
    height: FIELD_BOX_HEIGHT,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  label: {
    ...FIELD_LABEL_TEXT,
    marginBottom: 3,
  },
  placeholder: {
    fontSize: 20,
    fontWeight: '600',
    color: BLACK,
    opacity: 0.3,
    letterSpacing: 0.2,
  },
  fieldText: {
    fontSize: 20,
    fontWeight: '500',
    color: BLACK,
  },
});
