import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_600,
  PRIMARY_COLOR_800,
  PRIMARY_COLOR_900,
} from '../../common/res/colors';

export const iconColor = PRIMARY_COLOR_900;
export default StyleSheet.create({
  home: {
    flex: 1,
    paddingHorizontal: '20%',
  },
  form: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  divider: {
    backgroundColor: PRIMARY_COLOR_600,
    marginHorizontal: 20,
    height: 1,
    marginVertical: 8,
    borderRadius: 1,
  },
  drawerItemText: {
    fontSize: 22,
    marginLeft: 20,
    fontWeight: '700',
    color: PRIMARY_COLOR_800,
  },
});
