import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { getFeedbackByUserId } from '../../../Config/volunteer_dbcls';
import { AuthContext } from '../../../Config/AuthContext';
import { Card, Button, Avatar } from '@rneui/themed';
import { Rating } from 'react-native-ratings';

const UserFeedbackPage = ({ navigation, route }) => {
    
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    const { accepted } = route.params
    const [feedbackList,setFeedbackList] = useState()

    useEffect(()=>{
        getFeedbackByUserId(accepted,setFeedbackList,volunteerUser)
    },[])

    console.log(feedbackList);

    return (
        <View>
            <ScrollView>
                {
                   feedbackList && feedbackList.length > 0
                   ?
                   feedbackList.map((feedback,index)=>
                   <Card key={index}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Avatar size={50} source={{uri:feedback.avatar}}/>
                        <Text>{feedback.acceptName}</Text>
                    </View>
                    <Card.Divider/>
                    <View>
                        
                        <Text>Rating: {feedback.rating}</Text>
                        <Text>{feedback.feedback}</Text>
                    </View>
                   </Card>
                   )
                   :
                   <Text>No feeedbacks found</Text>
                }
            </ScrollView>
        </View>
    )
}

export default UserFeedbackPage

const styles = StyleSheet.create({})