import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_700,
  SECONDARY_COLOR_300,
  SECONDARY_COLOR_600,
  WHITE,
} from '../../common/res/colors';

export const darkRed = SECONDARY_COLOR_600;
export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  stageContainer: {},
  removeButton: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
  tabButton: {
    height: 52,
    width: 52,
    borderRadius: 7,
    backgroundColor: SECONDARY_COLOR_300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    height: 50,
    width: 50,
    backgroundColor: SECONDARY_COLOR_600,
  },
  tabText: {
    color: WHITE,
    fontWeight: '700',
    fontSize: 20,
  },
  stageTabs: {
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
  },
  tabSidePadding: {
    marginRight: 5,
    marginBottom: 5,
  },
  stageForm: {
    flex: 1,
    marginHorizontal: '10%',
  },
  totalText: {
    fontSize: 22,
    fontWeight: '700',
    color: PRIMARY_COLOR_700,
    letterSpacing: 0.5,
  },
});
