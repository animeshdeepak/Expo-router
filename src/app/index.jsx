import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/profile" style={styles.link}>
        Go to Profile
      </Link>

      <Link href="/profile/unknown" style={styles.link}>
        Go to Profile Unknown Page
      </Link>

      <Link href="/about" style={styles.link}>
        Go to About
      </Link>

      <Link href="/products" style={styles.link}>
        Go to Products
      </Link>

      <Link href="/unknown-path" style={styles.link}>
        Go to No Path
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
  link: {
    marginTop: 20,
  },
});
