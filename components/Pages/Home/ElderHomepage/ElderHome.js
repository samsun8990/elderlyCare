import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
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
//import { DrawerActions, createDrawerNavigator } from '@react-navigation/native';


const ElderHome = ({}) => {

  const navigation = useNavigation()

  const { signOut,setUser } = useContext(AuthContext);

  const handleDrawer =()=>{
    //navigation.dispatch(DrawerActions.openDrawer());
    // navigation.navigate("ElderDrawer")

  }

  const headerOptions = {
    headerTitle: '',
    headerLeft: () => (
      <TouchableOpacity onPress={handleDrawer}>
        <Image source={logo} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
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
            onPress={()=>{
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
          <ElderHomeSuggestions/>
          <Text></Text>
          <ElderHomeAvailable/>
          {/* <ElderDrawer/> */}

          <View style={{ paddingBottom: 90 }} />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ElderHome
