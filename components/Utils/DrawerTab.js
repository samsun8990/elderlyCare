import { View, useWindowDimensions } from 'react-native';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import VolunteerHome from '../Pages/Home/VolunteerHomepage/VolunteerHome';
import ElderHome from '../Pages/Home/ElderHomepage/ElderHome';
import ElderBottomTabs from './BottomTabs';
import { useNavigation } from '@react-navigation/native';

import { DrawerActions } from '@react-navigation/native';
import ElderNetwork from '../Pages/Network/Network';
import { Button } from 'react-native';

const Drawer = createDrawerNavigator();


function GoElderHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('ElderHome')}
        title="Home"
      />
    </View>
  );
}



const DrawerTab = () => {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation()





  return (
    <Drawer.Navigator
      id="drawerId"
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      drawerStyle={{ width: "70%" }}
    >
      {/* <Drawer.Screen
        name="elderTabs"
        component={ElderBottomTabs}
        // options={{ drawerLabel: 'Home' }}
    /> */}
      <Drawer.Screen
        name="elderlyHome"
        component={ElderHome}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="ElderlyNetwork"
        component={ElderNetwork}
        options={{ drawerLabel: 'Network' }}
      />


    </Drawer.Navigator>
  )
}

export default DrawerTab
