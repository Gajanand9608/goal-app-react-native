import { Text, StyleSheet } from "react-native";
 

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

export default Title;

const style = StyleSheet.create({
  title: {
    fontFamily : 'open-sans-bold',
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
