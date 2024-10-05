import { useSelector } from 'react-redux';
import { handleUserMove } from '../../features/state-helpers/handlePlayerMove';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/userActionsStyles';

const UserActions = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const takeUpTo = useSelector((store: any) => store.takeUpTo.value);
  const userBtnIndexes: number[] = Array.from(Array(takeUpTo).keys());
  const isBotTake = useSelector((store: any) => store.isBotTake.value);

  const getMatchsticks = (matchsticks: number) => {
    if (!isBotTake) {
      handleUserMove(matchsticks, pile);
    }
  };

  return (
    <View style={styles.buttonList}>
      {userBtnIndexes.map((index) => {
        return (
          <View key={`userActionBtn${index}`}>
            {pile >= index + 1 && (
              <TouchableOpacity
                key={index}
                style={styles.btn}
                onPress={() => getMatchsticks(index + 1)}
              >
                <Text>+{index + 1} Matchstick</Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default UserActions;
