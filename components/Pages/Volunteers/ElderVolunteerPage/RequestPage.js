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
import React, { useState, useEffect, useContext } from "react";
import { FontAwesome, Fontisto } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { headerOptions } from '../../Utils/Common';
import { Card, Button, CheckBox, Avatar } from "@rneui/themed";
import { styles } from "../VolunteerStyles.js";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import AvailableVolunteers from "./AvailableVolunteers.js";
import RequestedVolunteers from "./RequestedVolunteers.js";
import DateTimePicker from '@react-native-community/datetimepicker'
import { defaultImg } from "../../../Utils/ImageCommon.js";
import { AuthContext } from "../../../Config/AuthContext.js";
import {
  doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc, query, where, limit, updateDoc,
  not, arrayContains, onSnapshot, arrayUnion, FieldValue, serverTimestamp, Timestamp
} from "firebase/firestore";
import { db } from "../../../Config/config.js";

const RequestPage = ({ route, navigation }) => {
  const { volUser } = route.params
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const [description, setDescription] = useState('')
  const [payment, setPayment] = useState(0)
  const [showStartdatePicker, setshowStartdatePicker] = useState(false)
  const [showEnddatePicker, setshowEnddatePicker] = useState(false)
  const [checkedItems, setCheckedItems] = useState([]);


  const [startDate, setStartDate] = useState(new Date());
  const [startDateValue, setStartDateVaue] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date())
  const [endDateValue, setEndDateValue] = useState(new Date());

  const handleCheckBox = (value, checkboxValue) => {
    let updatedItems = [...checkedItems];
    if (value) {
      updatedItems.push(checkboxValue);
    } else {
      updatedItems = updatedItems.filter((item) => item !== checkboxValue);
    }
    setCheckedItems(updatedItems);
  };

  const handleStartDateChange = ({ type }, selectedDate) => {
    setStartDate(new Date(selectedDate))
    setStartDateVaue(selectedDate.toDateString())
    setshowStartdatePicker(false)
  }
  const handleEndDateChange = ({ type }, selectedDate) => {
    setEndDate(new Date(selectedDate))
    setEndDateValue(selectedDate.toDateString())
    setshowEnddatePicker(false)
  }
  const clear = () => {
    setDescription()
    setPayment(0)
    setStartDate(new Date())
    setEndDate(new Date())
    setCheckedItems([])

  }

  const handleAddRequest = async () => {

    const docRef = doc(db, "volunteerUsers", volUser.id);
    //doc(db, "Requests");
    await setDoc(
      docRef,
      {
        requests: arrayUnion({
          volunteerId: volUser.id,
          description: description,
          startDate: startDate,
          endDate: endDate,
          requestDate: new Date(),
          activities: checkedItems,
          requestedBy: elderUser.id,
          amount: payment,
          status: "pending"
        })
      },

      { merge: true }
    )
      .then(() => {
        console.log("Requested successfully!");
        clear();
        alert("Requested successfully!")
      })
      .catch((error) => {
        console.log(error.message);
      })


    const elderusrRef = doc(db, "elderlyUsers", elderUser.id);
    await setDoc(
      elderusrRef,
      {
        volunteers: arrayUnion({ id: volUser.id, status: "pending", requestedAt: new Date() })
      },
      { merge: true }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
              <Avatar size={60} rounded source={{ uri: volUser.avatar }} />
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 18, }}>{volUser.fullname}</Text>
                {/* <Text style={{ fontSize: 13 }}>{volUser.email}</Text> */}
                <Text style={{ fontSize: 15 }}>{volUser.gender}</Text>
              </View>
            </View>
            <Card.Divider />
            <View>
              <Text style={styles.requestTitle}>Description</Text>
              <TextInput
                style={{
                  borderWidth: 1, borderColor: "grey", height: 60, width: 300,
                  borderRadius: 4, backgroundColor: "#E7E7E7",
                  //margin: 12,
                  borderWidth: 1,
                  padding: 5, color: "gray", borderColor: "#E7E7E7"
                }}
                placeholder="What are you looking for?"
                value={description}
                onChangeText={(text) => setDescription(text)}
              />
            </View>
            <Card.Divider />
            <View>
              <Text></Text>
              <Text style={styles.requestTitle}>Preferences</Text>
              <View style={{ flexDirection: "row" }}>
                <CheckBox
                  center
                  title="Walking"
                  checked={checkedItems.includes('Walking')}
                  onPress={(value) => handleCheckBox(value, 'Walking')}
                />
                <CheckBox
                  center
                  title="Talking"
                  checked={checkedItems.includes("Talking")}
                  onPress={(value) => handleCheckBox(value, "Talking")}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <CheckBox
                  center
                  title="Playing Games"
                  checked={checkedItems.includes("Playing Games")}
                  onPress={(value) => handleCheckBox(value, "Playing Games")}
                />
                <CheckBox
                  center
                  title="Read/Write"
                  checked={checkedItems.includes("Read/Write")}
                  onPress={(value) => handleCheckBox(value, "Read/Write")}
                />
              </View>
            </View>
            <Card.Divider />
            <View>
              <Text style={styles.requestTitle}>Set Date Preferences</Text>
              <Text></Text>

              <TouchableOpacity onPress={() => setshowStartdatePicker(true)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, borderBottomWidth: 1, paddingBottom: 4, width: '35%' }}>
                <Fontisto name="date" size={40}></Fontisto>
                <TextInput
                  placeholder="Start Date"
                  style={styles.input}
                  value={startDateValue}
                  editable={false}
                />
              </TouchableOpacity>


              {
                showStartdatePicker &&
                <DateTimePicker mode="date" value={startDate} display="default" onChange={handleStartDateChange} />

              }
              <Text></Text>
              <TouchableOpacity onPress={() => setshowEnddatePicker(true)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, borderBottomWidth: 1, paddingBottom: 4, width: '35%' }}>
                <Fontisto name="date" size={40}></Fontisto>
                <TextInput
                  placeholder="End Date"
                  style={styles.input}
                  value={endDateValue}
                  editable={false}
                />
              </TouchableOpacity>


              {
                showEnddatePicker &&
                <DateTimePicker mode="date" value={endDate} display="default" onChange={handleEndDateChange} />

              }
            </View>
            <Text></Text>
            <Card.Divider />
            <View>

              <Text style={styles.requestTitle}>Payment Amount</Text>
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
                value={payment.toString()}
                onChangeText={(text) => setPayment(text)}
              />
            </View>
            <Text></Text>
            <Button title="Request" color="#1B5B7D" onPress={handleAddRequest} />
          </View>
        </Card>
      </ScrollView>

      <View style={{ paddingBottom: 90 }} />


    </SafeAreaView>
  );
};

export default RequestPage;
