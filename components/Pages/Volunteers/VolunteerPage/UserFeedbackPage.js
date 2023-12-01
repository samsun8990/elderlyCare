import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const UserFeedbackPage = ({ navigation, route }) => {

    const { feedback } = route.params
    console.log(feedback,"fd");

    return (
        <View>
            <ScrollView>
                <Text>UserFeedbackPage</Text>
            </ScrollView>
        </View>
    )
}

export default UserFeedbackPage

const styles = StyleSheet.create({})