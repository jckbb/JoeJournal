import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_500} from '../../common/res/colors';

export default StyleSheet.create({
  brewDetails: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: PRIMARY_COLOR_500,
    borderRadius: 7,
    padding: 20,
    marginHorizontal: '5%',
  },
  detail: {
    justifyContent: 'space-between',
  },
});
