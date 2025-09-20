import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../constants/Colors";

export default function Product() {
  const products = [
    { id: "1", name: "Burger Bistro", place: "Rose Garden", price: 4000 },
    {
      id: "2",
      name: "Smokin' Burger",
      place: "Cafenio Restaurant",
      price: 6000,
    },
    {
      id: "3",
      name: "Buffalo Burgers",
      place: "Kaji Firm Kitchen",
      price: 7500,
    },
    {
      id: "4",
      name: "Bullseye Burgers",
      place: "Kabab Restaurant",
      price: 9400,
    },
    {
      id: "5",
      name: "Bullseye Burgers",
      place: "Kabab Restaurant",
      price: 9400,
    },
    {
      id: "6",
      name: "Bullseye Burgers",
      place: "Kabab Restaurant",
      price: 9400,
    },
    {
      id: "7",
      name: "Bullseye Burgers",
      place: "Kabab Restaurant",
      price: 9400,
    },
    {
      id: "8",
      name: "Bullseye Burgers",
      place: "Kabab Restaurant",
      price: 9400,
    },
    {
      id: "9",
      name: "Bullseye Burgers",
      place: "Kabab Restaurant",
      price: 9400,
    },
  ];

  const renderProduct = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPlace}>{item.place}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.productPrice}>Rp{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Filter & Search */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>SEMUA</Text>
          <Ionicons name="chevron-down" size={16} color={Colors.primary} />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.circleBtn}>
          <Ionicons name="search" size={20} color={Colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleBtn}>
          <MaterialCommunityIcons
            name="tune-variant"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Semua</Text>
        <TouchableOpacity style={styles.addProductBtn}>
          <Ionicons name="cart" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 4 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  circleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 14,
    height: 36,
    marginRight: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  filterText: {
    color: Colors.primary,
    fontWeight: "bold",
    marginRight: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    marginLeft: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
  },
  addProductBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  addProductText: {
    color: Colors.primary,
    fontWeight: "bold",
    marginLeft: 4,
    fontSize: 14,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 18,
    marginTop: 34,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imagePlaceholder: {
    width: "auto",
    height: 90,
    borderRadius: 12,
    backgroundColor: "#B0BEC5",
    marginBottom: 22,
    marginTop: -34,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 15,
    color: Colors.text,
    marginBottom: 2,
  },
  productPlace: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    fontWeight: "bold",
    color: Colors.text,
    fontSize: 15,
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
});
