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
import { defaultImg } from './components/Utils/ImageCommon.js';
import StartPage from "./components/Pages/StartPage/StartPage";
import LoginUser from "./components/Pages/StartPage/Login/LoginUser";
import ElderlyRegister from "./components/Pages/StartPage/Register/ElderlyRegister";
import VolunteerRegister from "./components/Pages/StartPage/Register/VolunteerRegister";
import ElderBottomTabs from "./components/Utils/BottomTabs";
import VolunteerBottomTabs from "./components/Utils/VolunteerBottomTabs";
import ElderHome from "./components/Pages/Home/ElderHomepage/ElderHome";
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
import VolunteerChats from "./components/Pages/Chats/VolunteerChats";
import EditProfileE from "./components/Pages/Profile/Elder/EditProfileE";
import PaymentHistoryE from "./components/Pages/Profile/Elder/PaymentHistoryE";
import ChatHistoryE from "./components/Pages/Profile/Elder/ChatHistoryE";
// import ForgetPasswordE from "./components/Pages/Profile/Elder/ForgetPasswordE";
import HealthInfo from "./components/Pages/Profile/Elder/HealthInfo";
import PassChangeE from "./components/Pages/Profile/Elder/PassChangeE";
import ChatUser from "./components/Pages/Chats/ChatUser";
import ChatHistoryV from "./components/Pages/Profile/Volunteer/ChatHistoryV";
import EditProfileV from "./components/Pages/Profile/Volunteer/EditProfileV";
// import ForgetPasswordV from "./components/Pages/Profile/Volunteer/ForgetPasswordV";
import PassChangeV from "./components/Pages/Profile/Volunteer/PassChangeV";
import PaymentHistoryV from "./components/Pages/Profile/Volunteer/PaymentHistoryV";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ViewRequestPage from "./components/Pages/Volunteers/ElderVolunteerPage/ViewRequestPage.js";
import ViewAcceptPage from "./components/Pages/Volunteers/ElderVolunteerPage/ViewAcceptPage.js";
import AcceptedVolnteerLists from "./components/Pages/Volunteers/VolunteerPage/AcceptedVolnteerLists.js";
import VolunteerPendingRequests from "./components/Pages/Home/VolunteerHomepage/VolunteerPendingRequests.js";
import VolunteerAcceptedRequests from "./components/Pages/Home/VolunteerHomepage/VolunteerAcceptedRequests.js";
import UserProfile from "./components/Pages/Profile/UserProfile.js";
import UserFeedbackPage from "./components/Pages/Volunteers/VolunteerPage/UserFeedbackPage.js";
import ForgotPassword from "./components/Pages/StartPage/ForgotPassword.js";
import ViewVolnAcceptPage from "./components/Pages/Volunteers/VolunteerPage/ViewVolnAcceptPage.js";
import ViewVolRequestPage from "./components/Pages/Volunteers/VolunteerPage/ViewVolRequestPage.js";
import VolunteerRequestAccept from "./components/Pages/Volunteers/VolunteerPage/VolunteerRequestAccept.js";


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

  const updateElderUser = async (updatedUser) => {
    // Implement logic to update the user in your context
    // For example:
    setElderUser({ ...elderUser, ...updatedUser });
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
    <SafeAreaProvider style={styles.container}>
      <AuthContext.Provider value={{ user, signIn, signOut, elderUser, volunteerUser, setUser, updateElderUser }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginUser"
          >

            <Stack.Screen name="StartPage" component={StartPage} options={{
              headerShown: false, headerStyle: {
                backgroundColor: '#E4EDF2'
              }
            }} />

            <Stack.Screen name='LoginUser' component={LoginUser}
              options={{
                headerLeft: () => false,
                headerBackTitle: false,
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#E4EDF2'
                }, headerTitle: (props) => <CenteredTitle title="Signin to Elderly Care" {...props} />, headerBackTitleVisible: false
              }} />

            <Stack.Screen name='ElderlyRegister' component={ElderlyRegister}
              options={{
                headerStyle: {
                  backgroundColor: '#E4EDF2'
                },
                headerTitle: (props) => <CenteredTitle title="Create User Account" {...props} />, headerBackTitleVisible: false
              }} />

            <Stack.Screen name='VolunteerRegister' component={VolunteerRegister}
              options={{
                headerStyle: { backgroundColor: '#E4EDF2' },
                headerTitle: (props) => <CenteredTitle title="Create Volunteer Account" {...props} />, headerBackTitleVisible: false
              }} />

            <Stack.Screen options={{ headerShown: false, headerBackTitleVisible: false }} name="elderTabs" component={ElderBottomTabs} />

            <Stack.Screen options={{ headerShown: false, headerBackTitleVisible: false }} name="volunteerTabs" component={VolunteerBottomTabs} />

            <Stack.Screen options={{ headerShown: false, headerBackTitleVisible: false }} name="drawer" component={DrawerTab} />

            {/* <Stack.Screen name="ElderHome" component={ElderHome} /> */}

            {/* <Stack.Screen name="VolunteerHome" component={VolunteerHome} /> */}

            <Stack.Screen name="Invitations" component={Invitations} />
            <Stack.Screen name="AvailableVolnteers" component={AvailableVolunteers} />
            <Stack.Screen name="Suggestions" component={Suggestions} />
            <Stack.Screen name="RequestedVolunteers" component={RequestedVolunteers} />
            <Stack.Screen name="Feedback" component={FeedbackPage} options={{ title: "Give Feedback" }} />
            <Stack.Screen name="UserFeedback" component={UserFeedbackPage} options={{ title: "Feedbacks" }} />
            <Stack.Screen name="RequestPage" component={RequestPage}
              options={{ headerTitle: (props) => <CenteredTitle title="Send Request" {...props} /> }} />

            <Stack.Screen name="ViewRequestPage" options={{ headerTitle: (props) => <CenteredTitle title="View Request" {...props} /> }}
              component={ViewRequestPage} />
            <Stack.Screen name="ViewAcceptPage" component={ViewAcceptPage} />

            <Stack.Screen name="ViewVolnAcceptPage" component={VolunteerRequestAccept}
              options={{ headerTitle: (props) => <CenteredTitle title="View Accepted Requests" {...props} /> }} />

            <Stack.Screen name="ElderChats" component={ElderChats} />

            <Stack.Screen name="VolunteerChats" component={VolunteerChats} />

            <Stack.Screen name="VolunteerHomeAcceptedRequests" component={VolunteerAcceptedRequests} />
            <Stack.Screen name="VolunteerHomePendingRequests" component={VolunteerPendingRequests} />
            <Stack.Screen name="AcceptedVolnteerLists"
              options={{ headerTitle: (props) => <CenteredTitle title="Accepted Requests" {...props} /> }}
              component={AcceptedVolnteerLists} />
            <Stack.Screen name="PendingVolnteerLists"
              options={{ headerTitle: (props) => <CenteredTitle title="Pending Requests" {...props} /> }}
              component={PendingVolnteerLists} />

            <Stack.Screen name="ChatUser" component={ChatUser}
              options={({ route }) => ({
                title: route.params.network.fullname
              })}
            />

            <Stack.Screen name="AvailableVolunteers" component={AvailableVolunteers} />

            <Stack.Screen name="ElderVolunteers" component={ElderVolunteers} />


            <Stack.Screen options={{ headerShown: false }} name="EditProfileE" component={EditProfileE} />

            <Stack.Screen options={{ headerShown: false }} name="PaymentHistoryE" component={PaymentHistoryE} />

            <Stack.Screen options={{ headerShown: false }} name="ChatHistoryE" component={ChatHistoryE} />

            {/* <Stack.Screen options={{ headerShown: false }} name="ForgetPasswordE" component={ForgetPasswordE} /> */}

            <Stack.Screen options={{ headerShown: false }} name="HealthInfo" component={HealthInfo} />

            <Stack.Screen options={{ headerShown: false }} name="PassChangeE" component={PassChangeE} />

            <Stack.Screen name="ForgotPassword" component={ForgotPassword}
              options={{
                headerStyle: {
                  backgroundColor: '#E4EDF2'
                }, headerTitle: (props) => <CenteredTitle title="Forgot Password" {...props} />, headerBackTitleVisible: false
              }} />


            <Stack.Screen options={{ headerShown: false }} name="ChatHistoryV" component={ChatHistoryV} />

            <Stack.Screen options={{ headerShown: false }} name="EditProfileV" component={EditProfileV} />

            {/* <Stack.Screen options={{ headerShown: false }} name="ForgetPasswordV" component={ForgetPasswordV} /> */}

            <Stack.Screen options={{ headerShown: false }} name="PassChangeV" component={PassChangeV} />

            <Stack.Screen options={{ headerShown: false }} name="PaymentHistoryV" component={PaymentHistoryV} />

            <Stack.Screen name="ElderProfile" component={ElderProfile} options={{ headerShown: false }} />

            <Stack.Screen name="VolunProfile" component={VolunProfile} options={{ headerShown: false }} />

            <Stack.Screen name="UserProfile" component={UserProfile}
              options={{ title: "Profile" }}
            />


            <Stack.Screen name="ViewVolRequestPage" component={ViewVolRequestPage}
              options={{ headerTitle: (props) => <CenteredTitle title="View Request" {...props} /> }} />



          </Stack.Navigator>




        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EDF2",
    //justifyContent: "space-between",
    // width: windowWidth,
    // height: windowHeight,
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
