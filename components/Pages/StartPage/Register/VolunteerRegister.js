import { StyleSheet, TextInput, View, TouchableOpacity, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react';
//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Fontisto, FontAwesome5, Foundation } from 'react-native-vector-icons'
import { doc, setDoc, getDocs, collection, deleteDoc, addDoc } from "firebase/firestore";
import DateTimePicker from '@react-native-community/datetimepicker';
import { auth, db } from '../../../Config/config';


const VolunteerRegister = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();
  const [phone, setPhone] = useState();
  const [experience, setExperience] = useState();
  const [DOB, setDOB] = useState(new Date());
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const set = async () => {
    // const docRef = doc(db, "volunteer", email);
    // await setDoc(docRef, { email: email , fullname:fullname, phone:phone, experience:experience, DOB:DOB});
    // addDoc().then(() => {
    //   console.log("data submitted");
    // });
  };

  const handleVolunteerRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("registered");
        setUserError("");
        setPasswordError("");
        set();
        navigation.navigate("LoginUser");
      })
      .catch((error) => {
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
          setUserError("Email Already Exist");
        }

      });
  };

  const handleDateChange = (date) => {
    setDOB(date);
  };

  const handleSave = async () => {
    try {
      // Store data in Firebase Firestore
      const docRef = await addDoc(collection(db(), 'dates'), {
        date: DOB
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>

        <View>
          <View style={{ gap: 60, alignContent: 'center', flexDirection: 'row', justifyContent: "center", marginTop: '8%', marginBottom: 20 }}>

            <TouchableOpacity>
              <FontAwesome5 name="female" size={50}></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="male" size={50}></FontAwesome5>
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
                placeholder="Experience"
                value={experience}
                onChangeText={(text) => setExperience(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginLeft: 40, paddingBottom: 4, width: '80%' }}>
              <Fontisto name="date" size={40}></Fontisto>
              <TextInput
                placeholder="Date Of Birth"
                value={DOB}
                onChangeText={(text) => setDOB(text)}
                style={styles.input}
                autoCorrect={false}
              />
              {/* <DateTimePicker style={styles.DateTimePicker}
              value={DOB}
              mode="date"
              placeholder="Select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={handleDateChange} onPress={handleSave}
            /> */}
            </View>
          </View>


          <View style={{ marginTop: 30, alignItems: 'center' }}>
            <TouchableOpacity style={styles.button}
              onPress={handleVolunteerRegister}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.error}>{userError}</Text>
            <Text style={styles.error}>{passwordError}</Text>
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


        {/* <View>
          <View style={{ marginBottom: 100, alignContent: 'center' }}>
            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>
              Already have an account?
            </Text>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontSize: 18, color: 'dodgerblue' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View> */}


      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default VolunteerRegister

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E4EDF2'
  },
  input: {
    flex: 1,
    fontSize: 20,

    paddingHorizontal: 10,
    paddingVertical: 15,


  },
  inputContainer: {
    width: '80%'
  },
  button: {
    width: 240,
    alignItems: 'center',
    backgroundColor: '#FAB545',
    borderRadius: 20,
    padding: 15

  },
  buttonContainer: {

    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30

  },
  buttonOutLine: {
    width: 250,
    alignItems: 'center',
    backgroundColor: '#FAB545',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,

  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18
  },
  buttonOutLineText: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18
  },
  error: {
    color: "red",
    fontSize: 15,
    width: 340,
  },

})