import {
  StyleSheet, TextInput, View, Image, TouchableOpacity, Text, KeyboardAvoidingView, TouchableWithoutFeedback,
  StatusBar, ScrollView, Keyboard, SafeAreaView, Pressable, Platform
} from 'react-native'
import React, { useEffect, useState } from 'react';
//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Fontisto, FontAwesome5, Foundation } from 'react-native-vector-icons'
import { doc, setDoc, getDocs, collection, deleteDoc, addDoc } from "firebase/firestore";
import DateTimePicker from '@react-native-community/datetimepicker';
import { auth, db } from '../../../Config/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from "../StartPageStyle";


const VolunteerRegister = ({ navigation }) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();
  const [phone, setPhone] = useState();
  const [experience, setExperience] = useState();
  const [dob, setDob] = useState("");
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [gender, setGender] = useState(null)
  const [showPicker, setShowPicker] = useState(false)
  const [date, setDate] = useState(new Date())

  const clear = () => {
    setEmail()
    setPassword()
    setFullname()
    setPhone()
    setExperience()
    setGender(null)
    setDob("")
    setDate(new Date())
    setShowPicker(false)
  }

  const handleVolunteerRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential) {
        const docRef = doc(db, "volunteerUsers", userCredential.user.uid)

        await setDoc(docRef,
          {
            email: email, fullname: fullname, password: password, phone: phone, gender: gender, avatar: "https://static.thenounproject.com/png/5034901-200.png", role: "volunteer", status: "available",
            experience: experience, dob: dob,joinDate:new Date()
          },
          { merge: true })
          .then(() => {
            console.log("User registered successfully!");
            alert("Registered successfully!")
            navigation.navigate("LoginUser")
            clear()
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    } catch (error) {

      console.log(error.message);
      if (email.length === 0 && password.length === 0
        && fullname.length === 0) {
        setUserError("*All fields is required");
      }

      else if (!email.includes("@")) {
        setUserError("*Missing @ in email");
      }
      else if (!email.includes(".com")) {
        setUserError("*Missing .com in email");
      }
      else if (email.includes("@") && password.length < 6) {
        setUserError("");
        setPasswordError("*Password should be more than 6 character");
      }

      else {
        setPasswordError("");
        setUserError("Something went wrong!");
      }
    }
  };

  const handleShowDatePicker = () => setShowPicker(!showPicker)

  const handleDateChange = ({ type }, selectedDate) => {

    setDate(new Date(selectedDate))
    setDob(selectedDate.toDateString())
    setShowPicker(false)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ gap: 60, alignContent: 'center', flexDirection: 'row', justifyContent: "center", marginTop: 30, marginBottom: 20 }}>

            <TouchableOpacity onPress={() => setGender("Female")}>
              <FontAwesome5 name="female" size={50} color={gender === "Female" ? 'green' : 'black'}></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGender("Male")}>
              <FontAwesome5 name="male" size={50} color={gender === "Male" ? 'green' : 'black'}></FontAwesome5>
            </TouchableOpacity>
          </View>
          <View style={{ alignContent: 'center', justifyContent: "center" }}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginLeft: 40, paddingBottom: 4, width: '80%', marginBottom: 20 }}>
              <Foundation name="torsos-male-female" size={40}></Foundation>
              <TextInput
                placeholder="Full name"
                value={fullname}
                onChangeText={(text) => setFullname(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginLeft: 40, paddingBottom: 4, width: '80%', marginBottom: 20 }}>
              <Fontisto name="email" size={40}></Fontisto>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginLeft: 40, paddingBottom: 4, width: '80%', marginBottom: 20 }}>
              <Fontisto name="locked" size={40}></Fontisto>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                autoCorrect={false}
                secureTextEntry
              />
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginLeft: 40, paddingBottom: 4, width: '80%', marginBottom: 20 }}>
              <FontAwesome5 name="phone-square-alt" size={40}></FontAwesome5>
              <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginLeft: 40, paddingBottom: 4, width: '80%', marginBottom: 20 }}>
              <FontAwesome5 name="briefcase" size={40}></FontAwesome5>
              <TextInput
                placeholder="Years of Experience"
                value={experience}
                onChangeText={(text) => setExperience(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>

            <TouchableOpacity onPress={() => setShowPicker(true)} style={{ flexDirection: 'row', borderBottomWidth: 1, marginLeft: 40, paddingBottom: 4, width: '80%' }}>
              <Fontisto name="date" size={40}></Fontisto>
              <TextInput
                placeholder="Date Of Birth"
                style={styles.input}
                value={dob}
                editable={false}
              />
            </TouchableOpacity>


            {
              showPicker &&
              <DateTimePicker mode="date" value={date} display="default" maximumDate={new Date()} onChange={handleDateChange} />

            }
          </View>


          <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={styles.error}>{userError}</Text>
            <Text style={styles.error}>{passwordError}</Text>
            <Text></Text>
            <TouchableOpacity style={styles.button}
              onPress={handleVolunteerRegister}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
           
          </View>
        </View>
        <View>
          <View style={{ marginBottom: 100, alignContent: 'center' }}>
            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18, fontWeight: "600" }}>
              Already have an account?
            </Text>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }}
              onPress={() => navigation.navigate('LoginUser')}
            >
              <Text style={{ fontSize: 18, color: '#1B5B7D', fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>


    </KeyboardAvoidingView>
  )
}

export default VolunteerRegister
