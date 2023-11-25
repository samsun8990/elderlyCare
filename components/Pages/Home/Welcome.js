import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { Button } from '@rneui/themed'
import { Card } from '@rneui/themed';
import { FontAwesome } from "react-native-vector-icons";
import { styles } from './HomeStyle';
import { AuthContext } from '../../Config/AuthContext';
import { useNavigation } from '@react-navigation/native';

const Welcome = ({name}) => {
    const navigation = useNavigation()

    const { user, elderUser, volunteerUser } = useContext(AuthContext);


    return (

        <SafeAreaView style={{ flexDirection: "row" }}>
            <View style={{ width: 170, margin: 10, paddingTop: 10 }} >
                <Text style={styles.welcomename}>Welcome {elderUser ? elderUser.fullname : volunteerUser ? volunteerUser.fullname : ""}!</Text>
                <Text style={styles.welcomedesc}>Inspiring Connections, Enriching Lives - {'\n'}
                    Join The Journey of {'\n'} Compassion
                </Text>
                {
                    elderUser
                    ?
                    <Button onPress={()=>navigation.navigate("ElderVolunteers")} buttonStyle={styles.connectBtn}
                    containerStyle={{width: 170}}
                    titleStyle={{ fontWeight: 'bold', fontSize:15 }}>Connect Volunteers</Button>
                    :
                    volunteerUser
                    ?
                    <Button onPress={()=>navigation.navigate("PendingVolnteerLists")} buttonStyle={styles.connectBtn}
                    containerStyle={{width: 170}}
                    titleStyle={{ fontWeight: 'bold', fontSize:15 }}>Connect Elders</Button>
                    :
                    null
                }
               
               
            </View>
            <View style={{ width: 110 }}>
                <Image source={require("../../../assets/homeimage.png")} style={{ width: 150, height: 200 }} resizeMode="cover" />
            </View>
        </SafeAreaView>


    )
}

export default Welcome
