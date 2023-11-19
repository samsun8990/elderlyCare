import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button } from '@rneui/themed';
import { styles } from './NetworkStyle.js';

const Suggestions = () => {
  const navigation = useNavigation();
  return (
    <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
      <Card.Title>People You May Know</Card.Title>
      <Card.Divider />
      <ScrollView>
        <View style={{ flexWrap: "wrap", flexDirection: "row", gap: 20, justifyContent: "center" }}>
          <View style={styles.suggestions}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
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
              titleStyle={{
                fontSize: 12,
                padding: 10
              }}
            >Connect</Button>
          </View>

          <View style={styles.suggestions}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
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
              titleStyle={{
                fontSize: 12,
                padding: 10
              }}
            >Connect</Button>
          </View>
          <View style={styles.suggestions}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
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
              titleStyle={{
                fontSize: 12,
                padding: 10
              }}
            >Connect</Button>
          </View>
          <View style={styles.suggestions}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
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
              titleStyle={{
                fontSize: 12,
                padding: 10
              }}
            >Connect</Button>
          </View>

          <View style={styles.suggestions}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
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
              titleStyle={{
                fontSize: 12,
                padding: 10
              }}
            >Connect</Button>
          </View>
          <View style={styles.suggestions}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
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
              titleStyle={{
                fontSize: 12,
                padding: 10
              }}
            >Connect</Button>
          </View>


        </View>
      </ScrollView>
    </Card>
  )
}

export default Suggestions
