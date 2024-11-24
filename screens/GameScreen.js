import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

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

function GameScreen({ userNum, onGaveOver }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  // console.log(minBound, maxBound);
  useEffect(() => {
    console.log(currentGuess, userNum, currentGuess === userNum);
    if (currentGuess == userNum) {
      onGaveOver(guessRounds.length);
    }
  }, [currentGuess, userNum, onGaveOver]);

  useEffect(() => {
    minBound = 1;
    maxBound = 100;
  }, []);

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
    setGuessRounds((currentGuessRounds) => [newRndNum, ...currentGuessRounds]);
  }

  const guessRoundListLength = guessRounds.length;

  return (
    <View styles={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer style={styles.currentNumContainer}>
        {currentGuess}
      </NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextNumHandler.bind(this, "low")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextNumHandler.bind(this, "high")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View >
        {/* {guessRounds.map((item) => (
          <Text key={item}>{item}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  instructionText: {
    marginBottom: 20,
  },
  currentNumContainer: {
    fontSize: 36,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
