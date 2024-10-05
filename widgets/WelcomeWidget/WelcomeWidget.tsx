import { View, Text } from "@/components/Themed";
import styles from "./styles/welkomeBlockStyles";

const WelcomeTitle = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeTitle}>Matchstick Duel</Text>
      <Text style={styles.welcomeSubtitle}>A Game of Strategy and Precision!</Text>
    </View>
  );
};

export default WelcomeTitle;
