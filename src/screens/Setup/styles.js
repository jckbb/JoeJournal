import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_700,
  PRIMARY_COLOR_800,
  PRIMARY_COLOR_900,
} from '../../common/res/colors';

export const iconColor = PRIMARY_COLOR_900;
export default StyleSheet.create({
  home: {
    flex: 1,
    paddingHorizontal: '15%',
  },
  form: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  drawerDivider: {
    backgroundColor: PRIMARY_COLOR_700,
    height: 2,
    borderRadius: 1,
  },
  drawerItemText: {
    fontSize: 22,
    marginLeft: 20,
    fontWeight: '700',
    color: PRIMARY_COLOR_800,
  },
});
