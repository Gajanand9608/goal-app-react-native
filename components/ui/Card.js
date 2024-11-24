import { View, StyleSheet } from "react-native";
import Colors from "../../constants/color";


function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card; 

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 32,
    marginHorizontal: 24,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
