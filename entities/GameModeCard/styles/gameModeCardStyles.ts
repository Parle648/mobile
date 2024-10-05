import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 250,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 15,
  },
  title: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#ffffffab',
    color: '#000000',
    zIndex: 2,
    opacity: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardSmallScreen: {
    width: 220,
    marginBottom: 15,
  },
});

export default styles;