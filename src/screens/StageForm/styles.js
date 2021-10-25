import {StyleSheet} from 'react-native';
import {
  SECONDARY_COLOR_500,
  SECONDARY_COLOR_600,
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
    borderColor: SECONDARY_COLOR_600,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    borderColor: SECONDARY_COLOR_500,
    backgroundColor: SECONDARY_COLOR_600,
  },
  tabText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  stageTabs: {
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 30,
  },
  tabSidePadding: {
    marginRight: 5,
    marginBottom: 5,
  },
  stageForm: {
    flex: 1,
    marginHorizontal: '10%',
  },
});
