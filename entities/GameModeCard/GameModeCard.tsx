import React, { FC } from 'react';
// import { Link } from 'react-router-dom';
import { Image } from 'react-native';
import styles from './styles/gameModeCardStyles';
// import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

interface IGameModeCard {
  children: React.ReactNode;
  path: any;
  background?: any;
}

const GameModeCard: FC<IGameModeCard> = ({ children, path, background }) => {
  return (
    <Link style={styles.card} href={path}>
      <Image style={styles.backgroundImage} source={background} alt="game-mode" />
    </Link>
  );
};

export default GameModeCard;
