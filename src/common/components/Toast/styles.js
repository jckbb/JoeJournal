import {StyleSheet} from 'react-native';
import {WHITE, BLACK} from '../../res/colors';

export default StyleSheet.create({
  toast: {
    backgroundColor: WHITE,
    marginHorizontal: 30,
    marginTop: '40%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    borderBottomWidth: 3,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderRightWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  actionButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  actionButtonText: {
    fontSize: 20,
    color: BLACK,
  },
  label: {
    marginBottom: 18,
    color: BLACK,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
