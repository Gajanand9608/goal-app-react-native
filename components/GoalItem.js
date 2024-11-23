import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function GoalItem(props) {
  // function deleteGoalhandler() {
  //   props.onDeletePressed(props.id);
  // }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ff0000" }}
        onPress={props.onDeletePressed.bind(this, props.id)}
        style = {({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#343434",
    color: "white",
  },
  goalText: {
    padding: 8,
    fontSize: 22,
    color: "white",
  },
  pressedItem : {
    opacity : 0.5
  }
});
