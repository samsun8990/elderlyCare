import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { createContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from 'react-native-vector-icons'
import { readUser } from "./components/Config/dbcls";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./components/Config/AuthContext";
import { auth, db } from "./components/Config/config";
import { doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc } from "firebase/firestore";
import StartPage from "./components/Pages/StartPage/StartPage";
import LoginUser from "./components/Pages/StartPage/Login/LoginUser";
import ElderlyRegister from "./components/Pages/StartPage/Register/ElderlyRegister";
import VolunteerRegister from "./components/Pages/StartPage/Register/VolunteerRegister";
import ElderBottomTabs from "./components/Utils/BottomTabs";
import VolunteerBottomTabs from "./components/Utils/VolunteerBottomTabs";
import ElderHome from "./components/Pages/Home/ElderHomepage/ElderHome";
import Notifications from "./components/Pages/Notifications/Notifications";
import FeedbackPage from "./components/Pages/Volunteers/ElderVolunteerPage/FeedbackPage";
import RequestedVolunteers from "./components/Pages/Volunteers/ElderVolunteerPage/RequestedVolunteers";
import Invitations from "./components/Pages/Network/Invitations";
import Suggestions from "./components/Pages/Network/Suggestions";
import RequestPage from "./components/Pages/Volunteers/ElderVolunteerPage/RequestPage";
import VolunteerHome from "./components/Pages/Home/VolunteerHomepage/VolunteerHome";
import ElderNetwork from "./components/Pages/Network/Network";
import DrawerTab from "./components/Utils/DrawerTab";
import ElderProfile from "./components/Pages/Profile/Elder/ElderProfile";
import VolunProfile from "./components/Pages/Profile/Volunteer/VolunProfile";
import ElderVolunteers from "./components/Pages/Volunteers/ElderVolunteerPage/ElderVolunteers";
import PendingVolnteerLists from "./components/Pages/Volunteers/VolunteerPage/PendingVolnteerLists";
import AvailableVolunteers from "./components/Pages/Volunteers/ElderVolunteerPage/AvailableVolunteers";
import ElderChats from "./components/Pages/Chats/ElderChats";

import EditProfileE from "./components/Pages/Profile/Elder/EditProfileE";
import PaymentHistoryE from "./components/Pages/Profile/Elder/PaymentHistoryE";
import ChatHistoryE from "./components/Pages/Profile/Elder/ChatHistoryE";
// import ForgetPasswordE from "./components/Pages/Profile/Elder/ForgetPasswordE";
import HealthInfo from "./components/Pages/Profile/Elder/HealthInfo";
import PassChangeE from "./components/Pages/Profile/Elder/PassChangeE";

import ChatHistoryV from "./components/Pages/Profile/Volunteer/ChatHistoryV";
import EditProfileV from "./components/Pages/Profile/Volunteer/EditProfileV";
// import ForgetPasswordV from "./components/Pages/Profile/Volunteer/ForgetPasswordV";
import PassChangeV from "./components/Pages/Profile/Volunteer/PassChangeV";
import PaymentHistoryV from "./components/Pages/Profile/Volunteer/PaymentHistoryV";






const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const CenteredTitle = ({ title, props }) => {
  return (
    <View style={styles.headerTitle}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default function App() {

  const [user, setUser] = useState(null);
  const [elderUser, setElderUser] = useState(null);
  const [volunteerUser, setVolunteerUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((result) => {

          readUser(result.user.uid, "elderlyUsers", "volunteerUsers", setElderUser, setVolunteerUser)
          setUser(result.user)
          console.log("Login Success");
          alert("Login Success!")
        }
        )
        .catch((error) => { console.log(error); alert(error.message) })
    } catch (error) {
      console.error('Error signing in:', error);

    }
  };



  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setElderUser(null)
      setVolunteerUser(null)
      console.log("Signout Success");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    let unsubscribe = () => { }
    // Check if a user is already authenticated
    const authSubscribe = auth.onAuthStateChanged((authenticatedUser) => {

      unsubscribe()
      if (authenticatedUser) {
        // console.log(authenticatedUser);
        //setUser(authenticatedUser)
        //readUser(authenticatedUser.uid, "elderlyUsers", "volunteerUsers", setElderUser, setVolunteerUser)
      }
    })
    return () => {
      unsubscribe()
      authSubscribe()
    }
  }, [user]);




  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{ user, signIn, signOut, elderUser, volunteerUser, setUser }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartPage"
          >

            <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />

            <Stack.Screen name='LoginUser' component={LoginUser}
              options={{ headerTitle: (props) => <CenteredTitle title="Signin to Elderly Care" {...props} /> }} />


            <Stack.Screen name='ElderlyRegister' component={ElderlyRegister}
              options={{
                headerTitle: (props) => <CenteredTitle title="Create User Account" {...props} />
              }} />

            <Stack.Screen name='VolunteerRegister' component={VolunteerRegister}
              options={{
                headerTitle: (props) => <CenteredTitle title="Create Volunteer Account" {...props} />
              }} />

            <Stack.Screen options={{ headerShown: false }} name="elderTabs" component={ElderBottomTabs} />

            <Stack.Screen options={{ headerShown: false }} name="volunteerTabs" component={VolunteerBottomTabs} />

            <Stack.Screen options={{ headerShown: false }} name="drawer" component={DrawerTab} />

            {/* <Stack.Screen name="ElderHome" component={ElderHome} /> */}

            <Stack.Screen name="VolunteerHome" component={VolunteerHome} />

            <Stack.Screen name="Invitations" component={Invitations} />
            <Stack.Screen name="Suggestions" component={Suggestions} />
            <Stack.Screen name="RequestedVolunteers" component={RequestedVolunteers} />
            <Stack.Screen name="Feedback" component={FeedbackPage} options={{ title: "Give Feedback" }} />
            <Stack.Screen name="RequestPage" component={RequestPage}
              options={{ headerTitle: (props) => <CenteredTitle title="Send Request" {...props} /> }} />
            <Stack.Screen name="Notification" component={Notifications} />

            <Stack.Screen name="ElderChats" component={ElderChats} />

            <Stack.Screen name="AvailableVolunteers" component={AvailableVolunteers} />

            <Stack.Screen name="ElderVolunteers" component={ElderVolunteers} />

            <Stack.Screen name="PendingVolnteerLists" component={PendingVolnteerLists} />

            <Stack.Screen options={{ headerShown: false }} name="EditProfileE" component={EditProfileE} />

            <Stack.Screen options={{ headerShown: false }} name="PaymentHistoryE" component={PaymentHistoryE} />

            <Stack.Screen options={{ headerShown: false }} name="ChatHistoryE" component={ChatHistoryE} />

            {/* <Stack.Screen options={{ headerShown: false }} name="ForgetPasswordE" component={ForgetPasswordE} /> */}

            <Stack.Screen options={{ headerShown: false }} name="HealthInfo" component={HealthInfo} />

            <Stack.Screen options={{ headerShown: false }} name="PassChangeE" component={PassChangeE} />
  

            <Stack.Screen options={{ headerShown: false }} name="ChatHistoryV" component={ChatHistoryV} />

            <Stack.Screen options={{ headerShown: false }} name="EditProfileV" component={EditProfileV} />

            {/* <Stack.Screen options={{ headerShown: false }} name="ForgetPasswordV" component={ForgetPasswordV} /> */}

            <Stack.Screen options={{ headerShown: false }} name="PassChangeV" component={PassChangeV} />

            <Stack.Screen options={{ headerShown: false }} name="PaymentHistoryV" component={PaymentHistoryV} />









            <Stack.Screen name="ElderProfile" component={ElderProfile} options={{ headerShown: false }} />

            <Stack.Screen name="VolunProfile" component={VolunProfile} options={{ headerShown: false }} />

          </Stack.Navigator>




        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EDF2",
    justifyContent: "space-between",
    width: windowWidth,
    height: windowHeight,
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: "#1B5B7D",
    textAlign: "center"
  },
})
