import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_700,
  PRIMARY_COLOR_900,
  SECONDARY_COLOR_200,
} from '../../common/res/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  logItem: {
    // alignItems: 'center',
  },
  previousText: {
    color: 'red',
    marginLeft: 6,
    fontSize: 18,
  },
  timeText: {
    fontSize: 22,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    marginTop: '20%',
  },
  logChange: {
    marginTop: 8,
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
    paddingHorizontal: 60,
    paddingTop: 10,
    paddingBottom: 30,
  },
  emptyText: {
    fontSize: 35,
    fontWeight: '700',
    color: PRIMARY_COLOR_700,
  },
  fieldText: {
    color: PRIMARY_COLOR_900,
    fontSize: 20,
  },
  currentText: {
    color: 'green',
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
