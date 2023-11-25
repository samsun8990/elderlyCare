import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VolunteerHome from '../Pages/Home/VolunteerHomepage/VolunteerHome';
import ElderHome from '../Pages/Home/ElderHomepage/ElderHome';
import ElderBottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
    const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
    }}
  >
    <Drawer.Screen
        name="elderHome"
        component={ElderBottomTabs}
        options={{ drawerLabel: 'Home' }}
    />
  </Drawer.Navigator>
  )
}

export default DrawerTab
