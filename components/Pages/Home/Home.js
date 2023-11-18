import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome';
import { headerOptions } from '../../Utils/Common';
import HomeAvailable from './HomeAvailable';
import HomeSuggestions from './HomeSuggestions';
import { styles } from './HomeStyle';


const Home = () => {
 
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(headerOptions);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            // padding: SIZES.medium,
          }}
        >
          <Welcome/>
          <HomeSuggestions/>
          <Text></Text>
          <HomeAvailable/>

          <View style={{ paddingBottom: 90 }} />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
