import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, Platform } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
// import { headerOptions } from '../../Utils/Common';
import { Card, Button,SearchBar} from '@rneui/themed';
import { styles } from '../VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';
import AvailableVolunteers from './AvailableVolunteers.js';
import RequestedVolunteers from './RequestedVolunteers.js';
import { logo } from '../../../Utils/ImageCommon.js';
import { AuthContext } from '../../../Config/AuthContext.js';
import PendigVolunteer from './PendigVolunteer.js';

const ElderVolunteers = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('');
  const [value, setValue] = useState(null)
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  
  const [viewAllChoice,setViewAllChoice] = useState(true)
  const [viewRequestedChoice,setViewRequestedChoice] = useState(false)
  const [viewPendingChoice,setViewPendingChoice] = useState(false)


const updateSearch = (search) => {
  setSearch(search);
}

  const data = [
    { label: "Sort by Gender", value: 'Gender' },
    { label: "Sort by Age", value: 'Age' }
  ]
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
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.search}>
          {/* <TextInput placeholder='Search volunteers' style={{textAlign:"center", top:10}}/> */}
          {
          Platform.OS === "ios"
          ?
          <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          platform='ios'
          containerStyle={{backgroundColor:"#E4EDF2",width:144, height:35}}
          inputContainerStyle={{width:350, height:35}}
          inputStyle={{fontSize:14}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          showCancel={false}
          //onClearText={() => console.log(onClearText())}
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          //onCancel={() => console.log(onCancel())}
        />
        :
        <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        platform='android'
        containerStyle={{backgroundColor:"#E4EDF2",width:144, height:35}}
          inputContainerStyle={{width:350, height:35}}
          inputStyle={{fontSize:14}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          showCancel={false}
          //onClearText={() => console.log(onClearText())}
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          //onCancel={() => console.log(onCancel())}
      />
          }
        </View>
        <View style={styles.dropdown}>
          <Dropdown data={data}
            labelField="label"
            valueField="value"
            maxHeight={'70%'}
            // search
            placeholder="Filter"
            selectedTextStyle={{ fontSize: 13 }}
            onChange={item => setValue(item.value)}
            value={value}
            style={{ fontSize: 18, padding: 5,color:"grey", }}
          />
        </View>
      </View>
   
      <View style={{ flexDirection: "row", gap: 20, margin: 5 }}>
      <ScrollView horizontal >
      <Button buttonStyle={viewAllChoice ? styles.viewallbtn : styles.viewrequested} 
        titleStyle={{fontSize:15, fontWeight:"600"}} onPress={()=>{
          setViewPendingChoice(false),setViewAllChoice(true);setViewRequestedChoice(false)}}>
          View All</Button>
          <Text>  </Text>
        <Button buttonStyle={viewRequestedChoice ? styles.viewallrequestbtn : styles.viewrequested} 
        titleStyle={{fontSize:15, fontWeight:"600"}} onPress={()=>{
          setViewPendingChoice(false),setViewRequestedChoice(true);setViewAllChoice(false)}}>
          View Accepted</Button>
          <Text>  </Text>
          <Button buttonStyle={viewPendingChoice ? styles.viewallrequestbtn : styles.viewrequested} 
        titleStyle={{fontSize:15, fontWeight:"600"}} onPress={()=>{
          setViewPendingChoice(true),setViewRequestedChoice(false);setViewAllChoice(false)}}>
          View Pending</Button>

      </ScrollView>
     
      </View>

      {
        viewRequestedChoice
        ?
        <RequestedVolunteers navigation={navigation}/>
        :
        null
      }
      {
         viewPendingChoice
         ?
         <PendigVolunteer navigation={navigation}/>
         :
         null
      }
      {
        viewAllChoice
        ?
        <AvailableVolunteers navigation={navigation}/>
        :
        null
      }


    </View>
  )
}

export default ElderVolunteers
