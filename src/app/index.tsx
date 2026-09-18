import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>fernando donado!</Text>

      <Link href="/about" style={styles.button}>
        Go to About Us
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 30,
  },

  button: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#147a49",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
