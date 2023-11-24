import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome';
// import { headerOptions } from '../../Utils/Common';
import HomeAvailable from './HomeAvailable';
import HomeSuggestions from './HomeSuggestions';
import { styles } from './HomeStyle';
import { AuthContext } from '../../Config/AuthContext';


const ElderHome = ({navigation}) => {
 
  //const navigation = useNavigation();

  const { signOut } = useContext(AuthContext);

  const headerOptions = {
    headerTitle: '',
    headerLeft: () => (
      <TouchableOpacity>
        <Image source={require("../../../assets/logo/Elderly-Care.png")} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity  onPress={() => navigation.navigate('Notification')}>
          <FontAwesome
            name="bell"
            color="#1B5B7D"
            size={24}
            style={{ marginRight: 15 }}
           
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="sign-out"
            color="#1B5B7D"
            size={24}
            style={{ marginRight: 15 }}
            onPress={signOut}
          />
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
       elevation: 5, 
      shadowColor:'black',
      shadowOpacity: 0.3, 
      shadowRadius: 5, 
      shadowOffset: { width: 0, height: 2 },
    },
  }

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

export default ElderHome
