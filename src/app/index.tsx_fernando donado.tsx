import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>fernando donado!</Text>
      <link href="/about" style={styles.button}>
        go to about Us
      </link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#1ba460",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1ba460",
  },
  text: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },
});

