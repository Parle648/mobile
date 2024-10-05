import { Text, View } from '@/components/Themed';
import styles from './styles/loaderStyles';

const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.loader}></Text>
    </View>
  );
};

export default Loader;
