import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomHeader from "../../components/layout/Header"; // Adjust the path as needed
import Colors from "../../constants/Colors";


export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Daftar Penjualan" />
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Hari Ini</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>Rp 2.500.000</Text>
            <Text style={styles.statLabel}>Penjualan</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statLabel}>Transaksi</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>Rp 1.200.000</Text>
            <Text style={styles.statLabel}>Pembelian</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    alignContent: "center",
    textAlign: "center",
    paddingLeft: 16,
    paddingBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statsContainer: {
    backgroundColor: Colors.surface,
    padding: 16,
    margin: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
