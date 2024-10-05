import GameModeCard from '../../entities/GameModeCard/GameModeCard';
import startFirstBackground from '../../shared/assets/start.jpg';
import startSecondBackground from '../../shared/assets/oponent-start.jpg';
import sanboxBackground from '../../shared/assets/sandbox.jpg';
import { View } from '@/components/Themed';
import styles from './styles/modeListStyles';

const ModeList = () => {
  return (
    <View style={styles.list}>
      <GameModeCard path={'/game'} background={startFirstBackground}>
        Start first
      </GameModeCard>
      <GameModeCard path={'/two'} background={startSecondBackground}>
        Start second
      </GameModeCard>
      <GameModeCard path={'/sandbox'} background={sanboxBackground}>
        Sandbox
      </GameModeCard>
    </View>
  );
};

export default ModeList;
