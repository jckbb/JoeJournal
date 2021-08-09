import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  brewContent: {
    paddingVertical: Platform.OS === 'ios' ? 80 : 50,
  },
});
