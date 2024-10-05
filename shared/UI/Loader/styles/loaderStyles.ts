import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  loader: {
    fontSize: 10,
    width: 16,
    height: 16,
    borderRadius: 50,
    position: 'relative',
    zIndex: 9,
    color: '#213547',
  },
});

export default styles;
