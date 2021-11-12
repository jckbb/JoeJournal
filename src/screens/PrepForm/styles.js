import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_700} from '../../common/res/colors';

export default StyleSheet.create({
  prepForm: {
    flex: 1,
  },
  form: {
    flex: 1,
    paddingHorizontal: '20%',
  },
  row: {
    flexDirection: 'row',
  },
  ratio: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  ratioText: {
    color: PRIMARY_COLOR_700,
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 0.2,
    marginLeft: 10,
    marginBottom: 9,
  },
});
