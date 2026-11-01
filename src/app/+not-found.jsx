import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CustomNotFound() {
  return (
    <View style={styles.container}>
      <Text>CustomNotFound</Text>
      <Link href="/" style={styles.link}>
        Go to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
