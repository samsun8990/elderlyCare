import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button } from '@rneui/themed';
import { styles } from './VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';

const Volunteers = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('');
  const [value, setValue] = useState(null)

  const data = [
    { label: "Sort by Gender", value: 'Gender' },
    { label: "Sort by Age", value: 'Age' }
  ]


  useEffect(() => {
    navigation.setOptions(headerOptions);
  }, [navigation]);


  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.search}>
          <FontAwesome name="search" size={20} color="black" style={{ fontSize: 18, padding: 5 }}>
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
            style={{ fontSize: 18, padding: 5 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 20, margin: 5 }}>
        <Button buttonStyle={styles.viewallbtn}>View All</Button>
        <Button buttonStyle={styles.viewrequested}>View Requested</Button>
      </View>
      <Card style={{}}>
        <Card.Title>View Available Volunteers</Card.Title>
        <Card.Divider />
        <ScrollView>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image source={require("../../../assets/images/defaultuser-img.png")}
                style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
              <View>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
                <Text style={{ color: "#847F7F" }}>Country</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
              <Button buttonStyle={{
                backgroundColor: '#BF3A3A',
                borderWidth: 2,
                borderColor: '#BF3A3A',
                borderRadius: 30,

              }}
                size="md"
                containerStyle={{
                  width: 120,
                  height: 35,
                }}
                titleStyle={{
                  fontSize: 16,
                  padding: 10
                }}
              >Request</Button>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image source={require("../../../assets/images/defaultuser-img.png")}
                style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
              <View>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
                <Text style={{ color: "#847F7F" }}>Country</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
              <Button buttonStyle={{
                backgroundColor: '#BF3A3A',
                borderWidth: 2,
                borderColor: '#BF3A3A',
                borderRadius: 30,

              }}
                size="md"
                containerStyle={{
                  width: 120,
                  height: 35,
                }}
                titleStyle={{
                  fontSize: 16,
                  padding: 10
                }}
              >Reuest</Button>
            </View>
          </View>

        </ScrollView>

      </Card>

    </View>
  )
}

export default Volunteers
