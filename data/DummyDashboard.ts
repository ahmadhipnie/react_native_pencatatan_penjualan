export interface MetricItem {
  id: number;
  title: string;
  value: string | number;
  change?: number;
  icon: string;
  color: string;
  description: string;
}

export const todayMetrics: MetricItem[] = [
  {
    id: 1,
    title: "Jumlah Transaksi",
    value: 42,
    change: 12,
    icon: "trending-up",
    color: "#4CAF50",
    description: "Hari ini"
  },
  {
    id: 2,
    title: "Pendapatan",
    value: "Rp 3.250.000",
    change: 8,
    icon: "cash",
    color: "#2196F3",
    description: "Hari ini"
  },
  {
    id: 3,
    title: "Keuntungan",
    value: "Rp 1.120.000",
    change: 5,
    icon: "bar-chart",
    color: "#FF9800",
    description: "Hari ini"
  },
  {
    id: 4,
    title: "Rata-rata Belanja",
    value: "Rp 77.380",
    change: -2,
    icon: "cart",
    color: "#9C27B0",
    description: "Per transaksi"
  }
];