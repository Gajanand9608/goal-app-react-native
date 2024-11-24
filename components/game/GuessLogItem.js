import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/color";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary700,
    borderWidth: 2,
    borderRadius: 40,
    marginVertical: 8,
    padding: 12,
    backgroundColor: Colors.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
