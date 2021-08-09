import {Platform, StyleSheet} from 'react-native';
import {WHITE, PRIMARY_COLOR} from '../../common/res/colors';

export default StyleSheet.create({
  brewContent: {
    paddingVertical: Platform.OS === 'ios' ? 80 : 50,
  },
  formRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  labelResponse: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0,
    color: WHITE,
    marginLeft: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.2,
    color: WHITE,
    marginBottom: 3,
  },
  brewTotals: {
    justifyContent: 'flex-start',
    marginBottom: 8,
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
  header: {
    marginRight: 20,
    marginTop: 30,
    alignItems: 'flex-end',
  },
});
