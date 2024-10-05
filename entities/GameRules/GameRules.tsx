import { Text, View } from 'react-native';
import styles from './styles/gameRulesStyles';

const GameRules = () => {
  return (
    <View style={styles.block}>
      <View style={styles.rules}>
        <Text>
          Two people are playing a game. From the pile of 25 matches, each player takes either
          1, 2 or 3 matches on each turn. The game is over once all matches are taken. Whoever
          has the even amount of matches wins
        </Text>
      </View>
    </View>
  );
};

export default GameRules;
