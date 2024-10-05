import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const getFontSizeForTitle = () => {
  if (width < 450) {
    return 24;
  } else if (width < 800) {
    return 28;
  }
  return 32;
};

const getFontSizeForSubtitle = () => {
  if (width < 450) {
    return 14;
  } else if (width < 800) {
    return 16;
  }
  return 18;
};

const getLetterSpacingForSubtitle = () => {
  return width < 450 ? 0.5 : 1;
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    padding: width < 450 ? 10 : 20,
  },
  welcomeTitle: {
    fontSize: getFontSizeForTitle(),
    color: '#ff6347',
    fontWeight: 'bold',
    margin: 0,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  welcomeSubtitle: {
    fontSize: getFontSizeForSubtitle(),
    color: '#333',
    marginTop: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: getLetterSpacingForSubtitle(),
  },
});

export default styles;
