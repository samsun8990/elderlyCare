import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button, Avatar } from '@rneui/themed';
import { styles } from './NetworkStyle.js';
import { defaultImg, logo } from '../../Utils/ImageCommon.js';
import { AuthContext } from '../../Config/AuthContext.js';
import { acceptUserInvitation, findCreatedAt, getAcceptedUsersForCurrentUsers, getInvitations, readTwoElderUsers, removeRequestById } from '../../Config/dbcls';

const ElderNetwork = () => {
    const navigation = useNavigation();
    const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    const [invitationList, setInvitationList] = useState()

    const [acceptedList, setAcceptedList] = useState()

    const headerOptions = {
        headerTitle: '',
        headerLeft: () => (
            <TouchableOpacity>
                <Image source={logo} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <View style={{ flexDirection: "row" }}>

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
            getInvitations(elderUser, setInvitationList)

            getAcceptedUsersForCurrentUsers(elderUser, setAcceptedList)
        }
    }, []);

    const handleAcceptRequest = async (invite) => {
        await alert(`You accepted request from ${invite.fullname}`)
        await acceptUserInvitation(elderUser, invite)
    }

    const handleDeclineRequest = async(elderuser,inviteuser)=>{

        await removeRequestById(elderuser,inviteuser)

    }
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
                            invitationList && invitationList.length > 0 && invitationList.slice(0, 4).map((invite, index) =>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }} key={index}>
                                    <View style={{ flexDirection: "row", gap: 10 }}>
                                        <Avatar size={50} rounded source={{ uri: invite.avatar }} />
                                        <View>
                                            <Text style={{ fontWeight: "600", fontSize: 16 }}>{invite.fullname}</Text>
                                            <Text style={{ color: "#847F7F" }}>
                                                {/* {invite.followers.map((follower) => follower.createdAt)} */}
                                                {/* {findCreatedAt_diffDays(invite.following)}  */}
                                                2 day ago
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
                                        <FontAwesome name="check" size={30} color="#265F17" onPress={() => handleAcceptRequest(invite)} />
                                        <FontAwesome name="times" size={30} color="#7B7979" onPress={() => handleDeclineRequest(elderUser,invite)} />
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
                            {acceptedList && acceptedList.length > 0 && acceptedList.slice(0, 2).map((accept, index) =>
                                <View style={styles.suggestions} key={index}>
                                    <Avatar size={60} rounded source={{ uri: accept.avatar }} />
                                    <Text style={{ fontWeight: "bold" }}>{accept.fullname}</Text>
                                    <Text>{accept.gender}</Text>
                                    <Text></Text>
                                    <Button onPress={() => navigation.navigate("ChatUser", { network: accept })}
                                        buttonStyle={{
                                            backgroundColor: '#1B5B7D',
                                            borderWidth: 2,
                                            borderColor: '#1B5B7D',
                                            borderRadius: 30,
                                        }}
                                        size="md"
                                        containerStyle={{
                                            width: 120,
                                            height: 38,
                                        }}
                                        titleStyle={{ fontWeight: 'bold', fontSize: 12, padding: 5 }}

                                    >Message</Button>
                                </View>
                            )}
                        </View>
                    </ScrollView>
                </Card>



                <View style={{ paddingBottom: 90 }} />

            </ScrollView>

        </SafeAreaView>
    )
}

export default ElderNetwork
