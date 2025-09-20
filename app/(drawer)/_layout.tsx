import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Colors from "../../constants/Colors";
import CustomDrawerContent from "./CustomDrawerContent";
import Dashboard from "./dashboard";
import Product from "./product";
import Profile from "./profile";
import Report from "./report";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: "front",
          headerShown: true,
          headerStatusBarHeight: 0,
          drawerActiveTintColor: Colors.primary,
          drawerInactiveTintColor: Colors.textSecondary,
          drawerLabelStyle: { fontSize: 15 },
          drawerStyle: { width: "55%" },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerLabel: "Dashboard",
            title: "Dashboard",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Product"
          component={Product}
          options={{
            drawerLabel: "Product",
            title: "Product",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cube-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Report"
          component={Report}
          options={{
            drawerLabel: "Report",
            title: "Report",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
