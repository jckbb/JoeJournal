import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_300, PRIMARY_COLOR_600} from '../../res/colors';

export default StyleSheet.create({
  chin: {
    marginVertical: 20,
    height: 5,
    width: '15%',
    backgroundColor: 'black',
    opacity: 0.2,
    borderRadius: 2.5,
    alignSelf: 'center',
  },
  bottomDrawer: {
    backgroundColor: PRIMARY_COLOR_300,
    borderColor: PRIMARY_COLOR_600,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 25,
    position: 'absolute',
  },
});
