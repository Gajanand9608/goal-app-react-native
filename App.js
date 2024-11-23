import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function setGameOverHandler(){
    console.log("game ended")
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNum={userNumber} onGaveOver={setGameOverHandler} />
    );
  }

  if(gameIsOver && userNumber){ 
    console.log("open detail scereen")
    screen = (<GameOverScreen/>);
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.secondary500]}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMethod="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
});
