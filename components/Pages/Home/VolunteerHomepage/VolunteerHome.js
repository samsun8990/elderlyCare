import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import Welcome from '../Welcome';
// import { headerOptions } from '../../Utils/Common';
import { styles } from '../HomeStyle';
import { AuthContext } from '../../../Config/AuthContext';
import { logo } from '../../../Utils/ImageCommon';
import VolunteerAcceptedRequests from './VolunteerAcceptedRequests';
import VolunteerPendingRequests from './VolunteerPendingRequests';


const VolunteerHome = ({navigation}) => {

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext)
   
  const headerOptions = {
    headerTitle: '',
    headerLeft: () => (
      <TouchableOpacity>
        <Image source={logo} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={{flexDirection:"row"}}>
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
        <VolunteerAcceptedRequests navigation={navigation}/>
        <Text></Text>
        <VolunteerPendingRequests  navigation={navigation}/>

        <View style={{ paddingBottom: 90 }} />
        
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default VolunteerHome
