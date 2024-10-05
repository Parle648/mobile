import { ScrollView, StyleSheet, View } from 'react-native';
import WelcomeTitle from '@/widgets/WelcomeWidget/WelcomeWidget';
import ModeList from '@/widgets/ModeList/ModeList';
import { useCallback, useEffect } from 'react';
import { resetOponentMatchsticks } from '@/features/slices/oponent-matchsticks';
import { resetUserMatchsticks } from '@/features/slices/player-matchsticks';
import { setPile } from '@/features/slices/pile-slice';
import { unsetIsBotTake } from '@/features/slices/is-bot-take';
import stateStore from '@/redux/store';
import { useFocusEffect } from 'expo-router';

export default function TabOneScreen() {
  useFocusEffect(
    useCallback(() => {
      stateStore.dispatch(resetOponentMatchsticks());
      stateStore.dispatch(resetUserMatchsticks());
      stateStore.dispatch(setPile(25));
      stateStore.dispatch(unsetIsBotTake());
    }, [])
  );

  return (
    <ScrollView>
      <WelcomeTitle />
      <ModeList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'scroll',
  },
});
