import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  //   let product789 = {
  //     pathName: "/products",
  //     params: {
  //       id: 789,
  //       title: "Product 789",
  //     },
  //   };

  return (
    <View style={styles.container}>
      <Text>Products</Text>

      <Link href="/products/123" style={styles.link}>
        Go to Product 123
      </Link>
      <Link href="/products/456" style={styles.link}>
        Go to Product 456
      </Link>
      <Link href="/products/789" style={styles.link}>
        Go to Product 789
      </Link>

      <Link href="/products/best-seller/ps-5" style={styles.link}>
        PS5 (Best Seller)
      </Link>
      <Link href="/products/deals/black-friday/ps-5" style={styles.link}>
        PS5 (Deals)
      </Link>
      <Link href="/products/search/ps-5" style={styles.link}>
        PS5 (Search)
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
