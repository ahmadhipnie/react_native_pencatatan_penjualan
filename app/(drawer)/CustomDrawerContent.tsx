import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>APP</Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="close" size={24} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* Main Menu */}
      <View style={styles.menuSection}>
        <DrawerItemList
          {...props}
          itemStyle={styles.drawerItem}
          labelStyle={styles.drawerLabel}
        />
      </View>

      {/* Bottom Menu */}
      <View style={styles.bottomSection}>
        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )}
          onPress={() => {}}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          )}
          onPress={() => {}}
          labelStyle={styles.drawerLabel}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    letterSpacing: 1,
  },
  menuSection: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  drawerItem: {
    borderRadius: 8,
    marginVertical: 2,
    marginHorizontal: 8,
    minHeight: 44,
  },
  drawerLabel: {
    fontSize: 15,
    color: Colors.text,
    marginLeft: -8,
  },
  bottomSection: {
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingTop: 8,
  },
});
