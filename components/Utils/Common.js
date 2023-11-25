import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';


// export const headerOptions = {
//     headerTitle: '',
//     headerLeft: () => (
//       <TouchableOpacity>
//         <Image source={require("../../assets/logo/Elderly-Care.png")} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
//       </TouchableOpacity>
//     ),
//     headerRight: () => (
//       <View style={{flexDirection:"row"}}>
//         <TouchableOpacity>
//           <FontAwesome
//             name="bell"
//             color="#1B5B7D"
//             size={24}
//             style={{ marginRight: 15 }}
//             // onPress={() => navigation.navigate('Notification')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <FontAwesome
//             name="sign-out"
//             color="#1B5B7D"
//             size={24}
//             style={{ marginRight: 15 }}
//             onPress={() => {
//               // Handle logout logic here
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     ),
//     headerStyle: {
//        elevation: 5, 
//       shadowColor:'black',
//       shadowOpacity: 0.3, 
//       shadowRadius: 5, 
//       shadowOffset: { width: 0, height: 2 },
//     },
//   }