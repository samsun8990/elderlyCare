import { Text, View, SafeAreaView, ScrollView, Image,StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import Welcome from '../Welcome';
// import { headerOptions } from '../../Utils/Common';
import { styles } from '../HomeStyle';
import { AuthContext } from '../../../Config/AuthContext';
import ElderHomeAvailable from './ElderHomeAvailable';
import ElderHomeSuggestions from './ElderHomeSuggestions';
import { logo } from '../../../Utils/ImageCommon';
import { DrawerActions } from '@react-navigation/drawer';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ElderHome = ({ }) => {

  const navigation = useNavigation()

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const headerOptions = {
    headerTitle: '',
    headerLeft: () => (
      <TouchableOpacity>

        <Image source={logo} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <FontAwesome
            name="sign-out"
            color="#1B5B7D"
            size={24}
            style={{ marginRight: 15 }}
            onPress={() => {
              signOut()
              setUser(null)
              navigation.replace("LoginUser")
            }}
          />
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
      elevation: 5,
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
    },
  }


  

  useEffect(() => {
    navigation.setOptions(headerOptions);
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.container]}>

      <ScrollView showsVerticalScrollIndicator={true} >
        <View
          style={{
            flex: 1,
            // padding: SIZES.medium,
          }}
        >
         
         <Welcome  />
          
       
          <ElderHomeSuggestions navigation={navigation} />
          <Text></Text>
          <ElderHomeAvailable navigation={navigation}/>

        </View>
        
      </ScrollView>
      <View style={{ paddingBottom: 70 }} />
    </SafeAreaView>
  )
}

export default ElderHome
