import {StyleSheet} from 'react-native';
import {BLACK, IVORY_WHITE, PRIMARY_COLOR} from '../../common/res/colors';

export default StyleSheet.create({
  home: {
    marginTop: 0,
    flex: 1,
    paddingTop: 35,
    backgroundColor: IVORY_WHITE,
  },
  date: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  dateText: {
    color: IVORY_WHITE,
    fontWeight: '700',
    fontSize: 20,
  },
  logButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  dateTimeText: {
    color: BLACK,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.1,
    opacity: 0.6,
  },
  divider: {
    height: 1,
    borderRadius: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  logItemHeaderText: {
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: '700',
    color: BLACK,
  },
  logItemSubtitleText: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: '600',
    color: BLACK,
  },
  logList: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
