import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonList: {
    maxWidth: 900,
    marginHorizontal: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#4caf50',
    borderWidth: 0,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 4,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  btnHover: {
    backgroundColor: '#45a049',
  },
  smallBtn: {
    fontSize: 14,
    padding: 10,
  },
});

export default styles;