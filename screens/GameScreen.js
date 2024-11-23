import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState , useEffect} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumberBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

function GameScreen({  userNum, onGaveOver }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
// console.log(minBound, maxBound);
  useEffect(() => {
    console.log(currentGuess, userNum, currentGuess === userNum);
    if (currentGuess == userNum) {
      onGaveOver(); 
    }
  },[currentGuess, userNum, onGaveOver]);

  function nextNumHandler(direction) {
    // 'low', 'high'
    if (
      (direction === "low" && currentGuess < userNum) ||
      (direction === "high" && currentGuess > userNum)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong..", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "low") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    const newRndNum = generateRandomNumberBetween(
      minBound,
      maxBound,
      currentGuess
    );
    setCurrentGuess(newRndNum);
  }

  return (
    <View style={style.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View style={style.increDecrButton}>
          <PrimaryButton onPress={nextNumHandler.bind(this, "low")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextNumHandler.bind(this, "high")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  increDecrButton: {
    flexDirection: "row",
  },
});
