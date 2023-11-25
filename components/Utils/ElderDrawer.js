import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ElderHome from '../Pages/Home/ElderHomepage/ElderHome';

const Drawer = createDrawerNavigator();

const ElderDrawer = () => {
    const dimensions = useWindowDimensions();

  return (
    <DrawerContentContainer>
    {/* Here, you can use your MainStackNavigator */}
  
  </DrawerContentContainer>
  )
}

export default ElderDrawer
