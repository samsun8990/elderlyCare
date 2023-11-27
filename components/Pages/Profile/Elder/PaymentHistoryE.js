import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Platform } from 'react-native';
import { Button, Icon, SearchBar } from '@rneui/themed';
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from 'react-native-vector-icons';
import { Card } from '@rneui/base';

const PaymentHistoryE = ({ navigation }) => {
    const handleBackPress = () => {
        // Add navigation logic here to go back
        navigation.goBack();
    };

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    }
    
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleBackPress}>
              <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Payment History</Text>
          </View>
          <View style={styles.searchContainer}>

          {
          Platform.OS === "ios"
          ?
          <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          platform='ios'
          containerStyle={{backgroundColor:"#E4EDF2",width:340, height:30}}
          inputContainerStyle={{width:350, height:30, borderRadius:10,padding:10}}
          inputStyle={{fontSize:16}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          showCancel={false}
          //onClearText={() => console.log(onClearText())}
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          //onCancel={() => console.log(onCancel())}
        />
        :
        <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        platform='android'
        containerStyle={{backgroundColor:"#E4EDF2",width:140, height:20}}
          inputContainerStyle={{width:350, height:20}}
          inputStyle={{fontSize:14}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          showCancel={false}
          //onClearText={() => console.log(onClearText())}
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          //onCancel={() => console.log(onCancel())}
      />
          }
            {/* <TextInput
              style={styles.textInput}
              placeholder="Search by name"
              placeholderTextColor="#A9A9A9"
            /> */}
            {/* <FontAwesome5 name="search" size={20} color="black" style={styles.icon} /> */}
          </View>
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>User</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>Price</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>PaymentDate</Text>
              </View>
            </View>
            <Card.Divider />
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text>John Doe</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>50.00$</Text>
              </View>
              <View style={styles.textContainer}>
                <Text>2023-11-22</Text>
              </View> 
            </View>
          </Card>
        </SafeAreaView>
      );
    };
    
export default PaymentHistoryE;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDEBEF',
        justifyContent: 'space-between',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 140,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#1B5B7D',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#E4EDF2',
        paddingLeft: 10,
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: '#ebebe0',
        paddingLeft: 30, // Adjusted to accommodate the icon
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    card1: {
        backgroundColor: '#ebebe0',
        width: 100,
        height: 50,
    },
    card: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        elevation: 3, // for Android shadow
    },
    textContainer: {
        flex: 1,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateText: {
        color: '#A9A9A9',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom:20,
      },
      titleText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 20,
        flexDirection: 'row',
      },
});
