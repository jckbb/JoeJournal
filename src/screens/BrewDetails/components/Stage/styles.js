import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_900,
  PRIMARY_COLOR_600,
  WHITE,
} from '../../../../common/res/colors';

export const ICON_COLOR = PRIMARY_COLOR_900;

export default StyleSheet.create({
  detailText: {
    fontSize: 22,
    color: PRIMARY_COLOR_900,
    fontWeight: '700',
  },
  subHeaderText: {
    fontSize: 22,
    fontWeight: '700',
    color: PRIMARY_COLOR_900,
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    // paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  squareCard: {
    // flex: 1,
    marginTop: 10,
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_600,
    borderRadius: 7,
    padding: 10,
  },
  cardHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 22,
    color: PRIMARY_COLOR_900,
  },
});
