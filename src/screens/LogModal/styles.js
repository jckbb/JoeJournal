import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../common/res/colors';

export default StyleSheet.create({
  log: {
    marginTop: 80,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 14,
    backgroundColor: WHITE,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  labelText: {
    color: BLACK,
    marginRight: 5,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  section: {
    marginTop: 15,
  },
  detail: {
    marginTop: 5,
  },
  detailText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
});
