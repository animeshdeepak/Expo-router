import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams();
  console.log(rest);
  console.log(typeof rest);

  return (
    <View style={styles.container}>
      <Text>Catch all Product details</Text>
      <Text>Details about product at {rest.join("/")}</Text>
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
