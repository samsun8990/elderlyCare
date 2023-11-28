import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome, Fontisto } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { headerOptions } from '../../Utils/Common';
import { Card, Button, CheckBox } from "@rneui/themed";
import { styles } from "../VolunteerStyles.js";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import AvailableVolunteers from "./AvailableVolunteers.js";
import RequestedVolunteers from "./RequestedVolunteers.js";
import DateTimePicker from '@react-native-community/datetimepicker'
import { defaultImg } from "../../../Utils/ImageCommon.js";

const RequestPage = () => {
  const [check1, setCheck1] = useState(false);
  const [showPicker, setShowPicker] = useState(false)

  const [startDate, setStartDate] = useState(new Date());
  const [startDateValue, setStartDateVaue] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date())
  const [endDateValue, setEndDateValue] = useState(new Date());

  const handleStartDateChange = ({ type }, selectedDate) => {
    setStartDate(new Date(selectedDate))
    setStartDateVaue(selectedDate.toDateString())
    setShowPicker(false)
  }
  const handleEndDateChange = ({ type }, selectedDate) => {
    setEndDate(new Date(selectedDate))
    setEndDateValue(selectedDate.toDateString())
    setShowPicker(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card
        containerStyle={{ backgroundColor: "#fff" }}
        wrapperStyle={{ backgroundColor: "#fff" }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              padding: 10,
            }}
          >
            <Image
              source={defaultImg}
              style={{ width: 60, height: 60, borderRadius: 20 }}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, }}>Lorem Lipsum</Text>
              <Text style={{ fontSize: 13 }}>lorem@lorem.com</Text>
            </View>
            <Card.Divider />
          </View>

          <View>
            <Text style={styles.requestTitle}>Description</Text>
            <Card.Divider />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "grey",
                height: 60,
                width: 300,
                borderRadius: 2,
                backgroundColor: "#E7E7E7",
                //margin: 12,
                borderWidth: 1,
                padding: 5,
                color: "gray",
                borderColor: "#E7E7E7"
              }}
              placeholder="What are you looking for?"
            />
          </View>
          <Text></Text>
          <View>
            <Text style={styles.requestTitle}>Preferences</Text>
            <Card.Divider />
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                center
                title="Walking"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <CheckBox
                center
                title="Talking"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                center
                title="Playing Games"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <CheckBox
                center
                title="Read/Write"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
            </View>
          </View>

          <View>
            <Text style={styles.requestTitle}>Set Date Preferences</Text>
            <Card.Divider />
       
            <TouchableOpacity onPress={() => setShowPicker(true)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, borderBottomWidth: 1, paddingBottom: 4, width: '35%' }}>
              <Fontisto name="date" size={40}></Fontisto>
              <TextInput
                placeholder="Start Date"
                style={styles.input}
                value={startDateValue}
                editable={false}
              />
            </TouchableOpacity>


            {
              showPicker &&
              <DateTimePicker mode="date" value={startDate} display="default" maximumDate={new Date()} onChange={handleStartDateChange}  />

            }
            <Text></Text>
            <TouchableOpacity onPress={() => setShowPicker(true)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, borderBottomWidth: 1, paddingBottom: 4, width: '35%' }}>
              <Fontisto name="date" size={40}></Fontisto>
              <TextInput
                  placeholder="End Date"
                  style={styles.input}
                  value={endDateValue}
                  editable={false}
                />
            </TouchableOpacity>


            {
              showPicker &&
              <DateTimePicker mode="date" value={endDate} display="default" maximumDate={new Date()} onChange={handleEndDateChange}  />

            }
          </View>
          <View>
            <Text></Text>
            <Text style={styles.requestTitle}>Payment Amount</Text>
            <Card.Divider />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "grey",
                height: 40,
                width: 200,
                borderRadius: 3,
                backgroundColor: "#EAEAEA",
                margin: 12,
                borderWidth: 1,
                padding: 10,
                color: "gray",
                borderColor: "#E7E7E7"
              }}
              placeholder="Amount"
            />
          </View>
          <Text></Text>
          <Button title="Request" color="#1B5B7D" />


        </View>

      </Card>
      <View style={{ paddingBottom: 90 }} />


    </SafeAreaView>
  );
};

export default RequestPage;
