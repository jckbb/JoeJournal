import {Platform, StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../common/res/colors';

export default StyleSheet.create({
  brew: {
    flex: 1,
    marginVertical: Platform.OS === 'ios' ? 80 : 50,
  },
  formRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addText: {
    fontSize: 34,
    fontWeight: '700',
    color: PRIMARY_COLOR,
  },
  splitList: {
    marginTop: 60,
  },
  splitListSpace: {
    height: 20,
  },
});
