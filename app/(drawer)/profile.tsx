import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* User Card */}
      <View style={styles.userCard}>
        <View style={styles.avatarContainer}>
          <Ionicons
            name="person"
            size={48}
            color="#bbb"
            style={styles.avatarIcon}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Budi sakti</Text>
          <Text style={styles.userEmail}>budi@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Menu List */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconBox}>
            <Ionicons name="person-outline" size={22} color={Colors.primary} />
          </View>
          <View style={styles.menuTextBox}>
            <Text style={styles.menuTitle}>My Account</Text>
            <Text style={styles.menuDesc}>Make changes to your account</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem]}>
          <View style={styles.menuIconBox}>
            <Ionicons name="log-out-outline" size={22} color="#F44336" />
          </View>
          <View style={styles.menuTextBox}>
            <Text style={[styles.menuTitle, { color: "#F44336" }]}>
              Log out
            </Text>
            <Text style={styles.menuDesc}>
              Further secure your account for safety
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconBox}>
            <Ionicons
              name="help-circle-outline"
              size={22}
              color={Colors.primary}
            />
          </View>
          <View style={styles.menuTextBox}>
            <Text style={styles.menuTitle}>Help & Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconBox}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={Colors.primary}
            />
          </View>
          <View style={styles.menuTextBox}>
            <Text style={styles.menuTitle}>About App</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEFF1",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
    color: Colors.text,
  },
  userCard: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarIcon: {
    // nothing
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    color: "#e0e0e0",
    fontSize: 14,
    marginTop: 2,
  },
  editButton: {
    backgroundColor: "#1976D2",
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
  },
  menuSection: {
    backgroundColor: "#F8EAF6",
    borderRadius: 16,
    marginBottom: 18,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderRadius: 12,
  },
  menuIconBox: {
    width: 36,
    alignItems: "center",
  },
  menuTextBox: {
    flex: 1,
    marginLeft: 8,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
  },
  menuDesc: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },
});
