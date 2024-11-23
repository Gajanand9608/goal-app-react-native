import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMethod="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImageStyle : {
    opacity : 0.15
  }
});
