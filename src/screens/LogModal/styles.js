import {StyleSheet} from 'react-native';
import {BLACK, IVORY_WHITE, WHITE} from '../../common/res/colors';

export default StyleSheet.create({
  log: {
    flex: 1,
    backgroundColor: IVORY_WHITE,
    marginTop: 40,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingLeft: 25,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 20,
    color: WHITE,
  },
  detailText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  section: {
    marginBottom: 24,
  },
  detail: {
    marginTop: 5,
  },
  column: {
    flex: 1,
  },
  brewSplit: {
    marginTop: 15,
    flexDirection: 'row',
  },
  brewSplitsHeader: {
    marginTop: 24,
    flexDirection: 'row',
  },
  labelText: {
    marginRight: 5,
    color: BLACK,
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
