import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
// import { headerOptions } from '../../Utils/Common';
import { Card, Button } from '@rneui/themed';
import { styles } from './VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';
import AvailableVolunteers from './AvailableVolunteers';
import RequestedVolunteers from './RequestedVolunteers';

const Volunteers = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('');
  const [value, setValue] = useState(null)

  const data = [
    { label: "Sort by Gender", value: 'Gender' },
    { label: "Sort by Age", value: 'Age' }
  ]
  const headerOptions = {
    headerTitle: '',
    headerLeft: () => (
      <TouchableOpacity>
        <Image source={require("../../../assets/logo/Elderly-Care.png")} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
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

  const [viewAllChoice,setViewAllChoice] = useState(false)


  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.search}>
          <FontAwesome name="search" size={20} style={{ fontSize: 15, padding: 5, color:"grey", top:5 }}>
            Search volunteers</FontAwesome>
        </View>
        <View style={styles.dropdown}>
          <Dropdown data={data}
            labelField="label"
            valueField="value"
            maxHeight={'70%'}
            // search
            placeholder="Filter"
            selectedTextStyle={{ fontSize: 30 }}
            onChange={item => setValue(item.value)}
            value={value}
            style={{ fontSize: 18, padding: 5,color:"grey", }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 20, margin: 5 }}>
        <Button buttonStyle={styles.viewallbtn} titleStyle={{fontSize:15, fontWeight:"600"}} onPress={()=>{setViewAllChoice(true)}}>View All</Button>
        <Button buttonStyle={styles.viewrequested} titleStyle={{fontSize:15, fontWeight:"600"}} onPress={()=>setViewAllChoice(!viewAllChoice)}>View Requested</Button>
      </View>

      {
        viewAllChoice
        ?
        <AvailableVolunteers/>
        :
        <RequestedVolunteers/>
      }


    </View>
  )
}

export default Volunteers
