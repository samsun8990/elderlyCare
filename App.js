import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import StartPage from './components/Pages/StartPage/StartPage';
import { FontAwesome,AntDesign,Ionicons} from 'react-native-vector-icons';

import ElderProfile from './components/Profile/Elder/ElderProfile'
import EditProfileE from './components/Profile/Elder/EditProfileE';
import VolunProfile from './components/Profile/Volunteer/VolunProfile';
import EditProfileV from './components/Profile/Volunteer/EditProfileV';
import PassChangeE from './components/Profile/Elder/PassChangeE';
import PassChangeV from './components/Profile/Volunteer/PassChangeV';
import HealthInfo from './components/Profile/Elder/HealthInfo';
import ChatHistoryE from './components/Profile/Elder/ChatHistoryE';
import ChatHistoryV from './components/Profile/Volunteer/ChatHistoryV';
import PaymentHistoryE from './components/Profile/Elder/PaymentHistoryE';
import PaymentHistoryV from './components/Profile/Volunteer/PaymentHistoryV';
import ForgetPasswordE from './components/Profile/Elder/ForgetPasswordE';
import ForgetPasswordV from './components/Profile/Volunteer/ForgetPasswordV';



const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function App() {
  return (
    
   <SafeAreaView style={styles.container}>
   
   {/* <ElderProfile/> */}
   {/* <EditProfileE/> */}
   {/* <VolunProfile/> */}
   {/* <EditProfileV/> */}
   {/* <PassChangeE/> */}
   {/* <PassChangeV/> */}
   {/* <HealthInfo/> */}
   {/* <ChatHistoryE/> */}
   {/* <ChatHistoryV/> */}
   {/* <PaymentHistoryE/> */}
   {/* <ForgetPasswordE/> */}
   <ForgetPasswordV/>

    
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEBEF",
    justifyContent: "space-between",
    width: windowWidth,
    height: windowHeight,
  },
});
