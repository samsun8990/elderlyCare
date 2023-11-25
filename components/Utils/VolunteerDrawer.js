import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VolunteerHome from '../Pages/Home/VolunteerHomepage/VolunteerHome';

const Drawer = createDrawerNavigator();

const VolunteerDrawer = () => {
    const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
    }}
  >
    <Drawer.Screen
        name="VolunteerHome"
        component={VolunteerHome}
        options={{ drawerLabel: 'Home' }}
    />
  </Drawer.Navigator>
  )
}

export default VolunteerDrawer
