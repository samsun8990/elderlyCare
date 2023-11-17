import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome';


const Stack = createStackNavigator();

const Home = () => {
 
  const navigation = useNavigation();

  useEffect(() => {
    // Set custom header options
    navigation.setOptions({
      headerTitle: '', // You can set a custom title if needed
      headerLeft: () => (
        <TouchableOpacity>
          <Image source={require("../../../assets/logo/Elderly-Care.png")} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity>
            <FontAwesome
              name="bell"
              color="#1B5B7D"
              size={24}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Notifications')} // Navigate to notification screen
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              name="sign-out"
              color="#1B5B7D"
              size={24}
              style={{ marginRight: 15 }}
              onPress={() => {
                // Handle logout logic here
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
         elevation: 5, // Add elevation for the bottom shadow (Android-specific)
        shadowColor:'black',
        shadowOpacity: 0.3, // Add shadow opacity (iOS-specific)
        shadowRadius: 5, // Add shadow radius (iOS-specific)
        shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS-specific)
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E4EDF2' }}>
      <Stack.Screen
        options={{
          // headerTitle: '',
          title: '',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
      
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            // padding: SIZES.medium,
          }}
        >
          <Welcome/>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})