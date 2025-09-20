import BarChart from "@/components/charts/BarChart";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import MetricCard from "@/components/ui/MetricCard";
import { todayMetrics } from "@/data/DummyDashboard";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Dashboard: React.FC = () => {
  // data untuk bar chart
  const chartData = [
    { label: "Sen", value: 1200000 },
    { label: "Sel", value: 1900000 },
    { label: "Rab", value: 1500000 },
    { label: "Kam", value: 2100000 },
    { label: "Jum", value: 1800000 },
    { label: "Sab", value: 3250000 },
    { label: "Min", value: 1000000 },
  ];

  // tanggal hari ini dalam format lokal
  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Laporan Hari Ini</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>

        {/* Metric Cards */}
        <View>
          {todayMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </View>

        {/* Bar Chart dan Ringkasan Performa */}
        <Card>
          <BarChart data={chartData} title="Pendapatan Minggu Ini" />
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Ringkasan Performa</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Transaksi Tertinggi</Text>
            <Text style={styles.summaryValue}>Rp 325.000</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Produk Terlaris</Text>
            <Text style={styles.summaryValue}>Kopi Arabika (42x)</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Pelanggan Baru</Text>
            <Text style={styles.summaryValue}>8 Pelanggan</Text>
          </View>
        </Card>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 16,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#666666",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666666",
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },
});

export default Dashboard;
