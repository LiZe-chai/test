import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomePage from "./HomePage.tsx";
import OrderPage from "./OrderPage.tsx";
import ProfilePage from "./ProfilePage.tsx";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Order") iconName = "cart-outline";
          else if (route.name === "User") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Order" component={OrderPage} />
      <Tab.Screen name="User" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
