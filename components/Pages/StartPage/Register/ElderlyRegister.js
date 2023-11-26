import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
  Keyboard,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Fontisto, FontAwesome5, Foundation } from "react-native-vector-icons";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../../../Config/config";
import DateTimePicker from "@react-native-community/datetimepicker";

const ElderlyRegister = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState();
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleShowDatePicker = () => setShowPicker(!showPicker);

  const handleDateChange = ({ type }, selectedDate) => {
    setDate(new Date(selectedDate));
    setDob(selectedDate.toDateString());
    setShowPicker(false);
  };

  const clear = () => {
    setEmail();
    setPassword();
    setFullname();
    setPhone();
    setUserError();
    setPasswordError();
    setGender(null);
    setDob("");
    setShowPicker(false);
    setDate(new Date());
  };

  const handleElderlyRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        const docRef = doc(db, "elderlyUsers", userCredential.user.uid);

        await setDoc(
          docRef,
          {
            email: email,
            fullname: fullname,
            password: password,
            phone: phone,
            gender: gender,
            avatar: "https://static.thenounproject.com/png/5034901-200.png",
            role: "elder",
            followers:[],
            followedBy:[]
          },
          { merge: true }
        )
          .then(() => {
            console.log("User registered successfully!");
            alert("User registered successfully!");
            navigation.navigate("LoginUser");
            clear();
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    } catch (error) {
      console.log(error.message);
      if (
        email.length === 0 &&
        password.length === 0 &&
        fullname.length === 0
      ) {
        setUserError("*All fields is required");
      } else if (!email.includes("@")) {
        setUserError("*Missing @ in email");
      } else if (!email.includes(".com")) {
        setUserError("*Missing .com in email");
      } else if (email.includes("@") && password.length < 6) {
        setUserError("");
        setPasswordError("*Password should be more than 6 character");
      } else {
        setPasswordError("");
        setUserError("Something went wrong!");
      }
      // Handle the error (e.g., display an error message to the user)
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              gap: 60,
              alignContent: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity onPress={() => setGender("Female")}>
              <FontAwesome5
                name="female"
                size={50}
                color={gender === "Female" ? "green" : "black"}
              ></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGender("Male")}>
              <FontAwesome5
                name="male"
                size={50}
                color={gender === "Male" ? "green" : "black"}
              ></FontAwesome5>
            </TouchableOpacity>
          </View>
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                borderBottomWidth: 1,
                paddingBottom: 4,
                width: "90%",
                marginBottom: 20,
              }}
            >
              <Foundation name="torsos-male-female" size={40}></Foundation>
              <TextInput
                placeholder="Full name"
                value={fullname}
                onChangeText={(text) => setFullname(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                borderBottomWidth: 1,
                paddingBottom: 4,
                width: "90%",
                marginBottom: 20,
              }}
            >
              <Fontisto name="email" size={40}></Fontisto>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                borderBottomWidth: 1,
                paddingBottom: 4,
                width: "90%",
                marginBottom: 20,
              }}
            >
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                borderBottomWidth: 1,
                paddingBottom: 4,
                width: "90%",
              }}
            >
              <FontAwesome5 name="phone-square-alt" size={40}></FontAwesome5>
              <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={styles.input}
                autoCorrect={false}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                borderBottomWidth: 1,
                paddingBottom: 4,
                width: "90%",
              }}
            >
              <Fontisto name="date" size={40}></Fontisto>
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <TextInput
                  placeholder="Date Of Birth"
                  style={styles.input}
                  value={dob}
                  editable={false}
                />
              </TouchableOpacity>
              {showPicker && (
                <View>
                  <DateTimePicker
                    mode="date"
                    value={date}
                    display={Platform.OS === "ios" ? "inline" : "default"}
                    maximumDate={new Date()}
                    onChange={handleDateChange}
                  />
                </View>
              )}
              {Platform.OS === "ios" || Platform.OS === "android"  (
                <Modal
                  visible={visible}
                  onDismiss={() => setState({ visible: false })}
                >
                  <DateTimePicker
                    style={{ width: "100%", backgroundColor: "white" }}
                    value={this.state.value}
                    onChange={async (e, value) => {
                      this.setState({ value });
                    }}
                  />
                </Modal>
              )}
            </View>

            {userError || passwordError ? (
              <View style={{ alignItems: "center", marginLeft: 40 }}>
                {userError && <Text style={styles.error}>{userError}</Text>}
                {passwordError && (
                  <Text style={styles.error}>{passwordError}</Text>
                )}
              </View>
            ) : null}
          </View>
          <View style={{ marginTop: 30, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleElderlyRegister}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={{ marginBottom: 100, alignContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 20 }}
              onPress={() => navigation.navigate("LoginUser")}
            >
              <Text
                style={{ fontSize: 18, color: "#1B5B7D", fontWeight: "bold" }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ElderlyRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4EDF2",
    // paddingTop: StatusBar.currentHeight,
  },
  input: {
    flex: 1,
    fontSize: 20,

    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  inputContainer: {
    width: "90%",
  },
  button: {
    width: 240,
    alignItems: "center",
    backgroundColor: "#FAB545",
    borderRadius: 20,
    padding: 15,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonOutLine: {
    width: 250,
    alignItems: "center",
    backgroundColor: "#FAB545",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  buttonText: {
    fontWeight: "700",
    color: "white",
    fontSize: 18,
  },
  buttonOutLineText: {
    fontWeight: "700",
    color: "white",
    fontSize: 18,
  },
  error: {
    color: "red",
    fontSize: 15,
    width: 340,
  },
});
