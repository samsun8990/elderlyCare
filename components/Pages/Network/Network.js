import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';


const Network = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(headerOptions);
  }, [navigation]);

  return (
    <View>
      <Text>Network</Text>
    </View>
  )
}

export default Network

const styles = StyleSheet.create({})