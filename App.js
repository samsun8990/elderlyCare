import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import StartPage from './components/Pages/StartPage/StartPage';
import ElderProfile from './components/Profile/Elder/ElderProfile'
import { FontAwesome,AntDesign,Ionicons} from 'react-native-vector-icons';



const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: "#DDEBEF", color: "white" },
          }}
          initialRouteName="ElderProfile"
        >
          {/* <Stack.Screen
            name="StartPage"
            component={StartPage}
          />  */}
           <Stack.Screen
            name="Elder Profile"
            component={ElderProfile}
            options={({ navigation }) => ({  // Pass the navigation prop to options
              headerLeft: () => (
                <FontAwesome
                  name="chevron-left"
                  size={24}
                  onPress={() => navigation.navigate('Home')}  // Use navigation.navigate to go to Login
                />
              ),
            })} />
        
        </Stack.Navigator>
      </NavigationContainer> 

      {/* <StatusBar style="auto" /> */}
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
