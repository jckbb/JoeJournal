import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR_900} from '../../../../common/res/colors';

export default StyleSheet.create({
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    fontSize: 20,
    color: PRIMARY_COLOR_900,
    fontWeight: '700',
  },
  fieldText: {
    fontSize: 20,
    color: PRIMARY_COLOR_900,
  },
});
