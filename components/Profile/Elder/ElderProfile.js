import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button, Icon } from '@rneui/themed';

const pickImage = async () => {
    const [image, setImage] = useState(null)
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    if (!result.canceled) {
        console.log(result)
        setImage(result.assets[0].uri);
    }
};

const ElderProfile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles = { justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Image source={require('../../../assets/profile.png')} style={{ alignItems: 'center', width: 100, height: 100, borderRadius: 50 }} />
                <Text></Text>
                <Text>Joined Date: 12 Aug 2022</Text>
                <Text></Text>
                <Text>Name</Text>
                <Text></Text>
                <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"} >
                    <Icon name="edit" color="white" />
                    Edit
                </Button>
            </View>
            <View style={styles = { flex:1, alignItems: 'left', padding: 20 }}>
                <Text></Text>
                <Text style={styles={fontSize:20}}>Personal Details</Text>
            </View>


        </SafeAreaView>
    )
}

export default ElderProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDEBEF",
        justifyContent: 'space-between'

    },
});


//   DDEBEF
// 1B5B7D
