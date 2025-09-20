import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

interface BarChartProps {
  data: { label: string; value: number }[];
  title: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const values = data.map((item) => item.value);
  const maxValue = Math.max(...values);
  const avgValue = values.reduce((sum, val) => sum + val, 0) / values.length;
  const hasExtremeValues = maxValue > avgValue * 3;

  const getBarHeight = (value: number) => {
    if (value === 0) return 5; 

    if (hasExtremeValues) {
      // Jika ada nilai ekstrem, gunakan skala yang dikompresi
      const compressionThreshold = avgValue * 2;

      if (value <= compressionThreshold) {
        // Skala normal untuk nilai di bawah threshold
        return (value / compressionThreshold) * 120;
      } else {
        // Skala kompresi untuk nilai di atas threshold
        const compressedValue =
          120 +
          ((value - compressionThreshold) / (maxValue - compressionThreshold)) *
            30;
        return compressedValue;
      }
    } else {
      // Jika tidak ada nilai ekstrem, gunakan skala linear normal
      return (value / maxValue) * 150;
    }
  };

  return (
    <View style={styles.container}>
      {/* judul chart */}
      <Text style={styles.title}>{title}</Text>

      {/* area chart */}
      <View style={styles.chart}>
        {data.map((item, index) => {
          const barHeight = getBarHeight(item.value);
          const isSelected = selectedIndex === index;

          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => setSelectedIndex(isSelected ? null : index)}
            >
              <View style={styles.barContainer}>
                <View style={styles.barWrapper}>
                  {/* value bar jika ditekan */}
                  {isSelected && item.value > 0 && (
                    <View style={styles.valueBubble}>
                      <Text style={styles.valueText}>
                        Rp {item.value.toLocaleString("id-ID")}
                      </Text>
                    </View>
                  )}
                  {/* chart bar */}
                  <View
                    style={[
                      styles.bar,
                      {
                        height: barHeight,
                        backgroundColor: isSelected ? "#1565C0" : "#2196F3",
                      },
                    ]}
                  />
                </View>
                {/* label bawah chart */}
                <Text style={styles.label}>{item.label}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>

      <Text style={styles.hint}>Tap pada bar untuk melihat nilai</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333333",
  },
  chart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 180,
    paddingHorizontal: 8,
  },
  barContainer: {
    alignItems: "center",
    flex: 1,
  },
  barWrapper: {
    height: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 4,
  },
  bar: {
    width: 20,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  label: {
    marginTop: 8,
    fontSize: 10,
    color: "#666666",
    textAlign: "center",
  },
  valueBubble: {
    position: "absolute",
    top: -30,
    width: 70,
    backgroundColor: "#2196F3",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
    zIndex: 1,
  },
  valueText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  hint: {
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    marginTop: 8,
    fontStyle: "italic",
  },
});

export default BarChart;
