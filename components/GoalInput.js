import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Modal,
  Image
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goal, setGoal] = useState("");
  function goalInputHandler(enteredText) {
    // console.log(e);
    setGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <TextInput
          value={goal}
          placeholder="Your Course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding : 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor : "#e4d0ff",
    color : "#120438",
    width: "100%",
    borderRadius : 6,
    padding: 16,
  },
  buttonContainer : {
    marginTop : 16,
    flexDirection : 'row'
  },
  button : {
    width : '30%',
    marginHorizontal : 8
  },
  image : {
    height : 100,
    width : 100,
    margin : 20
  }
});
