import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import StartPage from './components/Pages/StartPage/StartPage';
import { FontAwesome,AntDesign,Ionicons} from 'react-native-vector-icons';

import ElderProfile from './components/Profile/Elder/ElderProfile'
import EditProfileE from './components/Profile/Elder/EditProfileE';

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    
   <SafeAreaView style={styles.container}>
   
   {/* <ElderProfile/> */}
   <EditProfileE/>

    
    
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
