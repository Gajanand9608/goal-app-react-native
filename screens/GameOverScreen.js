import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onRestartGame}) {
  return (
    <View style={styles.rootContiner}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highLight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContiner: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom : 24,
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
  },
});
