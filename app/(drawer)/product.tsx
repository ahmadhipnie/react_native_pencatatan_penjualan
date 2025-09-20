import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomHeader from "../../components/layout/Header";
import Colors from "../../constants/Colors";

export default function Product() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Product" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Ini halaman Product</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
