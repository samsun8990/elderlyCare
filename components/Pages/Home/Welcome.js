import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Card } from '@rneui/themed';
import { FontAwesome } from "react-native-vector-icons";

// import styles from "./WelcomeStyle";

const Welcome = () => {
   
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
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
                        titleStyle={{ fontWeight: 'bold' }}>Connect Volunteers</Button>
                    {/* <Button title="Connect Volunteers"/> */}
                </View>
                <View style={{ width: 110 }}>
                    <Image source={require("../../../assets/homeimage.png")} style={{ width: 150, height: 200 }} resizeMode="cover" />
                </View>
            </View>

            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Suggestions</Text>
                    <TouchableOpacity>
                        <FontAwesome name=""/>
                        <Text style={styles.headerBtn}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <Card.Divider />
                <View style={styles.container}>
                </View>
            </View>
        </View>

    )
}

export default Welcome

const styles = StyleSheet.create({
    welcome: {


    },
    container: {
        marginTop:24,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      headerTitle: {
        fontSize:16,
        color: "#1B5B7D",
        fontWeight:"bold"
      },
      headerBtn: {
        fontSize: 16,
        color:"#1B5B7D",
      },
      cardsContainer: {
        marginTop: 16,
      },
      welcomename: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: "#1B5B7D",
        // fontFamily: "Salsa_400Regular",
    },
    welcomedesc: {
        textAlign: "center",
        fontSize: 13,
        padding: 10,
        color: "#1B5B7D"
    
    }
 

})