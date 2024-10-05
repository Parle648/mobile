import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  openBtn: {
    position: 'absolute',
    top: width * 0.03,
    right: width * 0.02,
    fontSize: 24,
  },
  block: {
    width: width,
    height: height,
    backgroundColor: '#ccccccc0',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9,
  },
  rules: {
    width: 350,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtn: {
    fontSize: 20,
    backgroundColor: 'transparent',
    borderWidth: 0,
    position: 'absolute',
    top: 25,
    right: 25,
  },
});

export default styles;