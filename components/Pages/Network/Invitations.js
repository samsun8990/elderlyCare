import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button, Avatar } from '@rneui/themed';
import { styles } from './NetworkStyle.js';
import { defaultImg } from '../../Utils/ImageCommon.js';
import { AuthContext } from '../../Config/AuthContext.js';
import { acceptUserInvitation, getInvitations, removeRequestById } from '../../Config/dbcls.js';


const Invitations = () => {
  const navigation = useNavigation();

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const [invitationList, setInvitationList] = useState()

  useEffect(() => {
    if (elderUser) {
      getInvitations(elderUser, setInvitationList)

    }
  }, []);

  const handleAcceptRequest = async (invite) => {
    await acceptUserInvitation(elderUser, invite)

  }

  const handleDeclineRequest = async (elderuser, inviteuser) => {
    await removeRequestById(elderuser, inviteuser)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
        <Card.Title>All({invitationList && invitationList.length})</Card.Title>
        <Card.Divider />
        <ScrollView>
          {
            invitationList && invitationList.length > 0 && invitationList.map((invite, index) =>
              <View key={index}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Avatar size={35} rounded source={{ uri: invite.avatar }} />
                    <View>
                      <TouchableOpacity onPress={() => navigation.navigate("UserProfile", { userid: invite.id })}>
                        <Text style={{ fontWeight: "600", fontSize: 16 }}>{invite.fullname}</Text>
                      </TouchableOpacity>

                      <Text style={{ color: "#847F7F" }}>1 day ago</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
                    <FontAwesome name="check" size={30} color="#265F17" onPress={() => handleAcceptRequest(invite)} />
                    <FontAwesome name="times" size={30} color="#7B7979" onPress={() => handleDeclineRequest(elderUser, invite)} />
                  </View>
                </View>
                <Card.Divider />
              </View>
            )
          }
          <View style={{ paddingBottom: 60 }} />
        </ScrollView>
      </Card>
      </ScrollView>
      <View style={{ padding: 50 }} />
    </View>

  )
}

export default Invitations
