import { useSelector } from 'react-redux';
import { resetOponentMatchsticks } from '../slices/oponent-matchsticks';
import { setPile } from '../slices/pile-slice';
import { resetUserMatchsticks } from '../slices/player-matchsticks';
import { useRef } from 'react';
import { setIsBotTake } from '../slices/is-bot-take';
import { resetTakeUpTo } from '../slices/take-up-to';
import stateStore from '@/redux/store';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles/winModalStyles';

const WinModal = () => {
  const pile = useSelector((store: any) => store.pile.value);
  const userMatchsticks = useSelector((store: any) => store.userMatchsticks.value);
  let currentPile = useRef(pile);

  const resetGame = (isGohome?: string) => {
    stateStore.dispatch(setPile(+currentPile.current));
    stateStore.dispatch(resetUserMatchsticks());
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(resetTakeUpTo())

    if (isGohome) {
      stateStore.dispatch(setPile(25));
    }
  };

  return (
    <>
      {pile === 0 && (
        <View style={styles.modalBlock}>
          <View style={styles.modalWindow}>
            {userMatchsticks % 2 === 0 ? 'You win' : 'Oponent win'}
            <View style={styles.btnsBlock}>
              {/* <TouchableOpacity onPress={() => resetGame('/')}>Go home</TouchableOpacity> */}
              <TouchableOpacity onPress={() => resetGame()}>Again</TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default WinModal;
