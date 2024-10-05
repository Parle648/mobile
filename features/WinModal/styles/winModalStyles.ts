import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: '#cccccca9',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9,
  },
  modalWindow: {
    width: 400,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsBlock: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    borderRadius: 5,
    cursor: 'pointer',
  },
  link: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  linkHover: {
    backgroundColor: '#0056b3',
  },
  buttonHover: {
    backgroundColor: '#28a745',
    color: '#fff',
  },
  buttonHoverActive: {
    backgroundColor: '#218838',
  },
  modalTitle: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  modalText: {
    marginBottom: 30,
    fontSize: 18,
    color: '#666',
  },
});

export default styles;
