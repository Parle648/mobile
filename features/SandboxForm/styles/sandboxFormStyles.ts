import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  formTitle: {
    width: '80%',
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: [{ translateX: -width * 0.4 }],
    fontSize: 20,
    color: '#333',
    marginTop: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '90%',
    maxWidth: 500,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -width * 0.45 }, { translateY: -150 }],
  },
  h3: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  formSelect: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 14,
  },
  formInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 14,
  },
  submitBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#ff6347',
    color: 'white',
    borderWidth: 0,
    borderRadius: 5,
    fontSize: 16,
  },
  submitBtnHover: {
    backgroundColor: '#e55341',
  },
});

export default styles;
