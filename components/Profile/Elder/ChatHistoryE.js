import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons, AntDesign,FontAwesome5 } from 'react-native-vector-icons';
import { Card } from '@rneui/base';

const ChatHistoryE = ({ navigation }) => {
    const handleBackPress = () => {
        // Add navigation logic here to go back
        navigation.goBack();
    };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat History</Text>
    </View>
    <View>
    <FontAwesome5 name="search" size={20} color="black" style={styles.icon} />
    <TextInput
          style={styles.textInput}
          placeholder="Search by name"
        />
    </View>
    <Card style={styles.card1}>
        
    </Card>
</SafeAreaView>
  )
}

export default ChatHistoryE

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDEBEF',
        justifyContent: 'space-between'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 140
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#1B5B7D',

    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 650,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        backgroundColor: '#ebebe0'
      },
      icon: {
        marginLeft: 'left',
        marginLeft: 50,
    
      },
      card1:{
        backgroundColor:'#ebebe0',
        width:100,
        height:50,
      }

    
   
})