import { Image, Text, View } from 'react-native';
import matchstick from '../../shared/assets/matchstick.jpg';
import styles from './styles/stickListStyles';

const MatchSticks = ({ count, title }: { count: number; title: string }) => {
  const matchstickIndexes: number[] = Array.from(Array(count).keys());
  return (
    <View style={styles.pileList}>
      <Text style={{ textAlign: 'center' }}>{title}</Text>
      <View style={styles.sticks}>
        {matchstickIndexes.map((stickIndex) => {
          return <Image style={styles.stick} key={stickIndex} source={matchstick} alt="matchstick" resizeMode="contain"  />;
        })}
      </View>
    </View>
  );
};

export default MatchSticks;
