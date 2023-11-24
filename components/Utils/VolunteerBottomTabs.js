import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Pages/Home/Home";
import Network from "../Pages/Network/Network";
import Chats from "../Pages/Chats/Chats";
import Volunteers from "../Pages/Volunteers/Volunteers";
import { FontAwesome } from "react-native-vector-icons";
import VolunteerHome from "../Pages/Home/VolunteerHome";


const Tab = createBottomTabNavigator();

const VolunteerBottomTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { position: 'absolute' },
    }}
  >
      <Tab.Screen
        name="VolunteerHome"
        component={VolunteerHome}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="home" color={colors} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Network"
        component={Network}
        options={{
          tabBarLabel: "Network",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="globe" color={colors} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="comments" color={colors} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Volunteers"
        component={Volunteers}
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
        name="Profile"
        component={Volunteers}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            const colors = focused ? "#1B5B7D" : "#323232";
            return <FontAwesome name="user-circle" color={colors} size={30} />;
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default VolunteerBottomTabs

const styles = StyleSheet.create({})