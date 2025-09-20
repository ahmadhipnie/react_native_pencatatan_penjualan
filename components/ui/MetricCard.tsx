import { MetricItem } from "@/data/DummyDashboard";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MetricCardProps {
  metric: MetricItem;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <View style={styles.card}>
      {/* Badge */}
      {metric.change !== undefined && (
        <View style={styles.changeBadge}>
          <Ionicons
            name={metric.change >= 0 ? "trending-up" : "trending-down"}
            size={12}
            color={metric.change >= 0 ? "#4CAF50" : "#F44336"}
          />
          <Text
            style={[
              styles.changeText,
              { color: metric.change >= 0 ? "#4CAF50" : "#F44336" },
            ]}
          >
            {metric.change >= 0 ? "+" : ""}
            {metric.change}%
          </Text>
        </View>
      )}

      {/* Konten utama */}
      <View style={styles.mainContent}>
        <View style={[styles.iconContainer, { backgroundColor: metric.color }]}>
          <Ionicons name={metric.icon as any} size={24} color="#FFFFFF" />
        </View>
        
        <View style={styles.content}>
          <Text style={styles.value}>{metric.value}</Text>
          <Text style={styles.title}>{metric.title}</Text>
          <Text style={styles.description}>{metric.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: "relative",
  },
  changeBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  changeText: {
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
  },
  // Konten utama
  mainContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "#999999",
  },
});

export default MetricCard;
