import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import StartPage from './components/Pages/StartPage/StartPage';
import ElderProfile from './components/Profile/Elder/ElderProfile'



const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: "lightblue", color: "white" },
          }}
          initialRouteName="ElderProfile"
        >
          {/* <Stack.Screen
            name="StartPage"
            component={StartPage}
          />  */}
           <Stack.Screen
            name="StartPage"
            component={ElderProfile}
          /> 
        
        </Stack.Navigator>
      </NavigationContainer> 

      {/* <StatusBar style="auto" /> */}
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "space-between",
    width: windowWidth,
    height: windowHeight,
  },
});
