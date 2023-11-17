import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
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

            <Card>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Suggestions</Text>
                    <TouchableOpacity>
                        <FontAwesome name="arrow-right" size={20} />
                    </TouchableOpacity>
                </View>
                <Card.Divider />
                <ScrollView horizontal>
                    <View style={styles.scrollContainer}>
                        <View>
                            <Image source={require("../../../assets/images/defaultuser-img.png")}
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
                            <Text style={styles.item}>Lorem Lipsum</Text>
                            <Button buttonStyle={{
                                backgroundColor: '#1B5B7D',
                                borderWidth: 2,
                                borderColor: '#1B5B7D',
                                borderRadius: 30,
                            }}
                                containerStyle={{
                                    width: 90
                                }}
                                >Connect</Button>
                        </View>
                        <View>
                            <Image source={require("../../../assets/images/defaultuser-img.png")}
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
                            <Text style={styles.item}>Lorem Lipsum</Text>
                            <Button buttonStyle={{
                                backgroundColor: '#1B5B7D',
                                borderWidth: 2,
                                borderColor: '#1B5B7D',
                                borderRadius: 30,
                            }}
                                containerStyle={{
                                    width: 90
                                }}
                                >Connect</Button>
                        </View>
                        <View>
                            <Image source={require("../../../assets/images/defaultuser-img.png")}
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
                            <Text style={styles.item}>Lorem Lipsum</Text>
                            <Button buttonStyle={{
                                backgroundColor: '#1B5B7D',
                                borderWidth: 2,
                                borderColor: '#1B5B7D',
                                borderRadius: 30,
                            }}
                                containerStyle={{
                                    width: 90
                                }}
                                >Connect</Button>
                        </View>



                    </View>
                </ScrollView>
            </Card>
            <Text></Text>

            <Card>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Available Volunteers</Text>
                    <TouchableOpacity>
                        <FontAwesome name="arrow-right" size={20} />
                    </TouchableOpacity>
                </View>
                <Card.Divider />
                <ScrollView horizontal>
                    <View style={styles.scrollContainer}>
                        <View>
                            <Image source={require("../../../assets/images/defaultuser-img.png")}
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
                            <Text style={styles.item}>Lorem Lipsum</Text>
                            <Button buttonStyle={{
                                backgroundColor: '#BF3A3A',
                                borderWidth: 2,
                                borderColor: '#BF3A3A',
                                borderRadius: 30,
                            }}
                                containerStyle={{
                                    width: 90
                                }}
                                >Request</Button>
                        </View>
                        <View>
                            <Image source={require("../../../assets/images/defaultuser-img.png")}
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
                            <Text style={styles.item}>Lorem Lipsum</Text>
                            <Button buttonStyle={{
                                backgroundColor: '#BF3A3A',
                                borderWidth: 2,
                                borderColor: '#BF3A3A',
                                borderRadius: 30,
                            }}
                                containerStyle={{
                                    width: 90
                                }}
                                >Request</Button>
                        </View>
                        <View>
                            <Image source={require("../../../assets/images/defaultuser-img.png")}
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
                            <Text style={styles.item}>Lorem Lipsum</Text>
                            <Button buttonStyle={{
                                backgroundColor: '#BF3A3A',
                                borderWidth: 2,
                                borderColor: '#BF3A3A',
                                borderRadius: 30,
                            }}
                                containerStyle={{
                                    width: 90
                                }}
                                >Request</Button>
                        </View>



                    </View>
                </ScrollView>
            </Card>

            <View style={{paddingBottom:90}} />
        </View>

    )
}

export default Welcome

const styles = StyleSheet.create({
    welcome: {


    },
    container: {
        marginTop: 24,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 16,
        color: "#1B5B7D",
        fontWeight: "bold",
        margin: 3
    },
    headerBtn: {
        fontSize: 16,
        color: "#1B5B7D",
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
    },
    scrollContainer: {
        flexDirection: 'row',
        padding: 10,
        gap:15
    },
    item:{
        textAlign:"center",
        margin: 5,
        fontWeight:"600"
    },
    bottomSpace: {
        height: 20,
      },


})