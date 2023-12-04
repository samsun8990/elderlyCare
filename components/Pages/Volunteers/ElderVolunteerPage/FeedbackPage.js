import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../../Utils/Common.js';
import { Card, Button, Avatar } from '@rneui/themed';
import { styles } from '../VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';
import { Rating } from 'react-native-ratings';
import { defaultImg } from '../../../Utils/ImageCommon.js';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { db } from '../../../Config/config.js';
import { AuthContext } from '../../../Config/AuthContext.js';


const FeedbackPage = ({ navigation, route }) => {
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const { accepted } = route.params

  const [rating, setRating] = useState()
  const [feedback, setFeedback] = useState()

  const handleFeedback = async () => {
  
    await addDoc(collection(db, "feedbacks"), {
      feedBackFor:accepted.id,
      acceptName: accepted.fullname,
      acceptEmail: accepted.email,
      feedBackBy:elderUser.id,
      avatar:elderUser.avatar,
      rating: rating,
      feedback: feedback
    }).then(()=>{
      alert("Feedback submitted!")
      setRating()
      setFeedback()
    })

  }



  return (

    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ backgroundColor: "#fff" }} wrapperStyle={{ backgroundColor: "#fff" }}>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, padding: 10 }}>
            <Avatar size={60} source={{ uri: accepted.avatar }} />
            <Text style={{ fontWeight: "bold" }}>{accepted.fullname}</Text>
          </View>
          <Card.Divider />

          <View style={{ justifyContent: "center", alignItems: "center", gap: 10, padding: 10 }}>
            <Text>Your Rating Matters</Text>
            <Rating
              type='star'
              defaultRating={0}
              // ratingColor='#3498db'
              ratingBackgroundColor='#F5F5F5'
              ratingCount={5}
              imageSize={30}
              onFinishRating={(value) => setRating(value)}
              style={{ paddingVertical: 10 }}
            />
            <TextInput
              style={{
                borderWidth: 1, borderColor: "grey", height: 60, width: 170, borderRadius: 8, backgroundColor: "#EAEAEA",
                margin: 12,
                borderWidth: 1,
                padding: 10,
                color: "gray"
              }}
              onChangeText={(text) => setFeedback(text)}
              value={feedback}
              placeholder='Feedback Here'
            />
            <Button
            disabled={rating && feedback ? false : true}
            onPress={handleFeedback}
              buttonStyle={{
                backgroundColor: '#1B5B7D',
                borderWidth: 2,
                borderColor: '#1B5B7D',
                borderRadius: 8,
              }}
              size="md"
              containerStyle={{
                width: 140,
                height: 55,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 15, padding: 5 }}
            >Submit</Button>

          </View>

        </View>

      </Card>
    </SafeAreaView>




  )
}

export default FeedbackPage
