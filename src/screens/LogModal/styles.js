import {StyleSheet} from 'react-native';
import {BLACK, IVORY_WHITE, PRIMARY_COLOR} from '../../common/res/colors';

export default StyleSheet.create({
  log: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  generalContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
    backgroundColor: IVORY_WHITE,
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
  detailText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  section: {
    marginTop: 15,
  },
  brewContainer: {
    flex: 1,
    paddingLeft: 20,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    backgroundColor: IVORY_WHITE,
    marginTop: 20,
    paddingTop: 20,
  },
  detail: {
    marginTop: 5,
  },
  column: {
    flex: 1,
    alignItems: 'flex-start',
  },
  brewSplit: {
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  brewSplitsHeader: {
    marginTop: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  labelText: {
    marginRight: 5,
    color: BLACK,
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
});
