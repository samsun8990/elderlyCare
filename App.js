import { StatusBar } from "expo-status-bar";
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
import VolunteerDrawer from "./components/Utils/VolunteerDrawer";
import ElderDrawer from "./components/Utils/ElderDrawer";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ElderNetwork from "./components/Pages/Network/Network";
import DrawerTab from "./components/Utils/DrawerTab";
import ElderProfile from "./components/Pages/Profile/Elder/ElderProfile";


const Drawer = createDrawerNavigator();

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
        setUser(authenticatedUser)
        readUser(authenticatedUser.uid, "elderlyUsers", "volunteerUsers", setElderUser, setVolunteerUser)
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

            {/* <Stack.Screen options={{ headerShown: false }} name="drawer" component={DrawerTab} />   */}

            <Stack.Screen name="ElderHome" component={ElderHome} />

            <Stack.Screen name="VolunteerHome" component={VolunteerHome} />

            <Stack.Screen name="Invitations" component={Invitations} />
            <Stack.Screen name="Suggestions" component={Suggestions} />
            <Stack.Screen name="RequestedVolunteers" component={RequestedVolunteers} />
            <Stack.Screen name="Feedback" component={FeedbackPage} options={{ title: "Give Feedback" }} />
            <Stack.Screen name="RequestPage" component={RequestPage} />
            <Stack.Screen name="Notification" component={Notifications} />


            <Stack.Screen name="ElderProfile" component={ElderProfile} options={{ headerShown: false }}  /> 


            {/* {
  user && elderUser
  ?
  <Drawer.Navigator>
  <Drawer.Screen options={{ headerShown: false }} name="elderTabs" component={ElderBottomTabs}  />
  <Drawer.Screen options={{ headerShown: false }} name="fruits" component={Test} />
</Drawer.Navigator>
:
null


} */}
          </Stack.Navigator>

         
          

        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaView>
  );
}
{/* <Stack.Screen name="ElderDrawer" component={ElderDrawer} />  
            <Stack.Screen name="VolunteerDrawer" component={VolunteerDrawer} />   */}

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
