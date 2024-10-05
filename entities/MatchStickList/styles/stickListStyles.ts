import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pileList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sticks: {
    display: 'flex',
    flexDirection: 'row',
  },
  stick: {
    height: 40,
    width: 10,
    objectFit: 'cover'
  },
});

export default styles;
