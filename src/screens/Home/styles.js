import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../common/res/colors';

export default StyleSheet.create({
  home: {
    flex: 1,
    marginTop: 35,
  },
  logButton: {
    height: 50,
    justifyContent: 'center',
  },
  logText: {
    fontSize: 20,
    fontWeight: '500',
  },
  logList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: PRIMARY_COLOR,
  },
});
