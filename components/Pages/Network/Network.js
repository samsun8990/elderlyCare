import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button } from '@rneui/themed';
import { styles } from './NetworkStyle.js';
import { defaultImg, logo } from '../../Utils/ImageCommon.js';
import { AuthContext } from '../../Config/AuthContext.js';
import {getUsersInvitation, readTwoElderUsers } from '../../Config/dbcls';

const ElderNetwork = () => {
    const navigation = useNavigation();
    const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    //const [suggestionList,setSuggestionList] = useState()
    const [invitationList,setInvitationList] = useState()

    const headerOptions = {
        headerTitle: '',
        headerLeft: () => (
            <TouchableOpacity>
                <Image source={logo} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <FontAwesome
                        name="bell"
                        color="#1B5B7D"
                        size={24}
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome
                        name="sign-out"
                        color="#1B5B7D"
                        size={24}
                        style={{ marginRight: 15 }}
                        onPress={() => {
                            signOut()
                            setUser(null)
                            navigation.replace("LoginUser")
                          }}
                    />
                </TouchableOpacity>
            </View>
        ),
        headerStyle: {
            elevation: 5,
            shadowColor: 'black',
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 2 },
        },
    }

    useEffect(() => {
        navigation.setOptions(headerOptions);
        if (elderUser) {
            //readTwoElderUsers(elderUser.fullname,setSuggestionList)
            getUsersInvitation(elderUser,setInvitationList)
            
          }
    }, [navigation]);

//     const originalArray = [invitationList];
// const fourElements = originalArray.slice(0, 4); // Retrieves the first four elements
// console.log(fourElements);
    console.log(invitationList,"invtn");


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={true}>
                <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitles}>Invitations</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Invitations")}>
                            <FontAwesome name="arrow-right" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Card.Divider />
                    <ScrollView>
                        {
                          invitationList && invitationList.length> 0 && invitationList.slice(0, 4).map((invit,index)=>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }} key={index}>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <Image source={defaultImg}
                                    style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
                                <View>
                                    <Text style={{ fontWeight: "600", fontSize: 16 }}>{invit.fullname}</Text>
                                    <Text style={{ color: "#847F7F" }}>1 day ago</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
                                <FontAwesome name="check" size={30} color="#265F17" />
                                <FontAwesome name="times" size={30} color="#7B7979" />
                            </View>
                        </View>
                            
                            )
                        }
                    
                       

                    </ScrollView>
                </Card>

                <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitles}>Connections</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("ElderChats")}>
                            <FontAwesome name="arrow-right" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Card.Divider />
                    <ScrollView>
                        <View style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}>
                            
                            <View style={styles.suggestions}>
                                <Image source={defaultImg}
                                    style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover" />
                                <Text style={{ fontWeight: "bold" }}>Lorem Lipsum</Text>
                                <Text>Country</Text>
                                <Text></Text>
                                <Button buttonStyle={{
                                    backgroundColor: '#1B5B7D',
                                    borderWidth: 2,
                                    borderColor: '#1B5B7D',
                                    borderRadius: 30,
                                }}
                                    size="md"
                                    containerStyle={{
                                        width: 120,
                                        height: 35,
                                    }}
                                    titleStyle={{ fontWeight: 'bold', fontSize: 12, padding: 5 }}

                                >View</Button>
                            </View>

                            <View style={styles.suggestions}>
                                <Image source={defaultImg}
                                    style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover" />
                                <Text style={{ fontWeight: "bold" }}>Lorem Lipsum</Text>
                                <Text>Country</Text>
                                <Text></Text>
                                <Button buttonStyle={{
                                    backgroundColor: '#1B5B7D',
                                    borderWidth: 2,
                                    borderColor: '#1B5B7D',
                                    borderRadius: 30,
                                }}
                                    size="md"
                                    containerStyle={{
                                        width: 120,
                                        height: 35,
                                    }}
                                    titleStyle={{ fontWeight: 'bold', fontSize: 12, padding: 5 }}
                                >View</Button>
                            </View>

                        </View>
                    </ScrollView>
                </Card>



                <View style={{ paddingBottom: 90 }} />

            </ScrollView>

        </SafeAreaView>
    )
}

export default ElderNetwork
