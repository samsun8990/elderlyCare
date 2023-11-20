import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button } from '@rneui/themed';
import { styles } from './VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';
import { Rating } from 'react-native-ratings';


const FeedbackPage = () => {
  return (

    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ backgroundColor: "#fff" }} wrapperStyle={{ backgroundColor: "#fff" }}>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, padding: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 60, height: 60, borderRadius: 20 }} resizeMode="cover" />
            <Text style={{ fontWeight: "bold" }}>Lorem Lipsum</Text>
          </View>
          <Card.Divider />

          <View style={{ justifyContent: "center", alignItems: "center", gap: 10, padding: 10 }}>
            <Text>Your Rating Matters</Text>
            <Rating
              type='star'
              // ratingColor='#3498db'
              ratingBackgroundColor='#F5F5F5'
              ratingCount={5}
              imageSize={30}
              // onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <TextInput
              style={{
                borderWidth: 1, borderColor: "grey", height: 60, width: 170, borderRadius: 8, backgroundColor: "#EAEAEA",
                margin: 12,
                borderWidth: 1,
                padding: 10,
                color:"gray"
              }}
              placeholder='Feedback Here'
            />
            <Button buttonStyle={{
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
