import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  console.log(typeof id); // always returns string

  return (
    <View style={styles.container}>
      <Text>Product Detail with id: {id}</Text>
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
