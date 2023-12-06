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
import { useContext } from 'react';
import { AuthContext } from '../Config/AuthContext';
import VolunteerBottomTabs from './VolunteerBottomTabs';
import ElderProfile from '../Pages/Profile/Elder/ElderProfile';
import VolunProfile from '../Pages/Profile/Volunteer/VolunProfile';
import VolunteerPage from '../Pages/Volunteers/VolunteerPage/VolunteerPage';

const Drawer = createDrawerNavigator();



const DrawerTab = () => {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation()

  const { user, signIn, signOut, elderUser, volunteerUser } = useContext(AuthContext);




  return (
    <Drawer.Navigator
      id="drawerId"
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      drawerStyle={{ width: "70%" }}
    >
      {
        elderUser
        ?
        (
          <>
          <Drawer.Screen
                  name="elderTabs"
                  component={ElderBottomTabs}
                  options={{ drawerLabel: 'Home' }}
              />
                
                <Drawer.Screen
                  name="ElderlyNetwork"
                  component={ElderNetwork}
                  options={{ drawerLabel: 'Network' }}
                />
                 <Drawer.Screen
                  name="ElderlyProfile"
                  component={ElderProfile}
                  options={{ drawerLabel: 'My Profile' }}
                />
                {/* <Drawer.Screen
                  name="Logout"
                  component={signout}
                  options={{ drawerLabel: 'Logout' }}
                /> */}
          </>
        )
        :
        (
          <>
          <Drawer.Screen
                  name="volunteerTabs"
                  component={VolunteerBottomTabs}
                  options={{ drawerLabel: 'Home' }}
              />
        
                <Drawer.Screen
                  name="Views requests"
                  component={VolunteerPage}
                  optio
                  ns={{ drawerLabel: 'Network' }}
                />
                <Drawer.Screen
                  name="VoluntrProfile"
                  component={VolunProfile}
                  options={{ drawerLabel: 'My Profile' }}
                />
                {/* <Drawer.Screen
                  name="Logout"
                  component={signout}
                  options={{ drawerLabel: 'Logout' }}
                /> */}
          </>
        )
      }
     


    </Drawer.Navigator>
  )
}

export default DrawerTab
