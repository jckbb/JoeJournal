import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_800, SECONDARY_COLOR_200} from '../../common/res/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  logItem: {
    alignItems: 'center',
  },
  previousText: {
    color: 'red',
    marginLeft: 6,
    fontSize: 18,
  },
  timeText: {
    fontSize: 22,
  },
  fieldText: {
    color: PRIMARY_COLOR_800,
    fontSize: 20,
    fontWeight: '700',
  },
  currentText: {
    color: 'green',
    fontWeight: '700',
    marginLeft: 6,
    fontSize: 20,
  },
  divider: {
    alignSelf: 'center',
    height: 30,
    width: 2,
    marginVertical: 8,
    backgroundColor: SECONDARY_COLOR_200,
  },
});
