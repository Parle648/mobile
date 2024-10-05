import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useSelector } from 'react-redux';
import oponentAlgorithm from '@/features/oponentAlgorithm/oponentAlgorithm';
import { useEffect } from 'react';
import WinModal from '@/features/WinModal/WinModal';
import MatchSticks from '@/entities/MatchStickList/MatchStickList';
import UserActions from '@/widgets/UserActionsWidget/UserActionsWidget';

export default function TabTwoScreen() {
    const pile = useSelector((store: any) => store.pile.value);
    const isBotTake = useSelector((store: any) => store.isBotTake.value);
    const userMatchsticks = useSelector((store: any) => store.userMatchsticks.value);
    const oponentMatchsticks = useSelector((store: any) => store.oponentMatchsticks.value);
    const takeUpTo = useSelector((store: any) => store.takeUpTo.value);
    
    useEffect(() => {
      oponentAlgorithm(isBotTake, 'second', pile, takeUpTo);
    }, [isBotTake]);

    return (
      <>
        <WinModal />
        <MatchSticks
            count={oponentMatchsticks}
            title={`Oponent have ${oponentMatchsticks} matchsticks`}
        />
        <MatchSticks count={pile} title={`Pile contains ${pile} matchsticks`} />
        <UserActions />
        <MatchSticks count={userMatchsticks} title={`Your have ${userMatchsticks} matchsticks`} />
      </>
    );
}