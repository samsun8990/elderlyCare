import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "react-native-vector-icons";
import ElderHome from "../Pages/Home/ElderHomepage/ElderHome";
import ElderNetwork from "../Pages/Network/Network";
import ElderVolunteers from "../Pages/Volunteers/ElderVolunteerPage/ElderVolunteers";
import ElderChats from "../Pages/Chats/ElderChats";
import ElderProfile from "../Pages/Profile/Elder/ElderProfile";

const Tab = createBottomTabNavigator();

const ElderBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
      }}
    >
      <Tab.Screen
        name="ElderHome"
        component={ElderHome}
        screenOptions={{
          headerShown: false
        }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="home" color={colors} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="ElderNetwork"
        component={ElderNetwork}
        options={{
          tabBarLabel: "Network",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="globe" color={colors} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="ElderChats"
        component={ElderChats}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="comments" color={colors} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="ElderVolunteers"
        component={ElderVolunteers}
        options={{
          tabBarLabel: "Volunteers",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="users" color={colors} size={30} />;
          },
          tabBarLabelStyle: {},
        }}
      />
      <Tab.Screen
        name="ElderProfile"
        component={ElderProfile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="user-circle" color={colors} size={30} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ElderBottomTabs;

const styles = StyleSheet.create({});
