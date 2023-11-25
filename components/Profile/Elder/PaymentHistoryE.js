import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from 'react-native-vector-icons';
import { Card } from '@rneui/base';

const PaymentHistoryE = ({ navigation }) => {
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
            <Text style={styles.headerText}>Payment History</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Search by name"
              placeholderTextColor="#A9A9A9"
            />
            <FontAwesome5 name="search" size={20} color="black" style={styles.icon} />
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
        backgroundColor: '#ebebe0',
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
