import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VolunteerHome = () => {
    const navigation = useNavigation();

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
            onPress={() => {
              // Handle logout logic here
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
        <HomeSuggestions/>
        <Text></Text>
        <HomeAvailable/>

        <View style={{ paddingBottom: 90 }} />
        
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default VolunteerHome
