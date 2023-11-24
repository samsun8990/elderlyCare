import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Card } from '@rneui/themed';
import { FontAwesome } from "react-native-vector-icons";
import { styles } from './ElderHomepage/HomeStyle';

const Welcome = ({navigation}) => {

    return (

        <SafeAreaView style={{ flexDirection: "row" }}>
            <View style={{ width: 170, margin: 10, paddingTop: 10 }} >
                <Text style={styles.welcomename}>Welcome Name!</Text>
                <Text style={styles.welcomedesc}>Inspiring Connections, Enriching Lives - {'\n'}
                    Join The Journey of {'\n'} Compassion
                </Text>
                <Button buttonStyle={{
                    backgroundColor: '#FAB545',
                    borderWidth: 2,
                    borderColor: '#FAB545',
                    borderRadius: 30,
                }}
                    containerStyle={{
                        width: 170
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize:15 }}>Connect Volunteers</Button>
            </View>
            <View style={{ width: 110 }}>
                <Image source={require("../../../assets/homeimage.png")} style={{ width: 150, height: 200 }} resizeMode="cover" />
            </View>
        </SafeAreaView>


    )
}

export default Welcome
