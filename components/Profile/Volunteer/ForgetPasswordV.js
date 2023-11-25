import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';


const EditProfileV = ({ navigation }) => {
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
        <Text style={styles.headerText}>Forget Password</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileRow}>
          <MaterialCommunityIcons name="account" size={20} color="black" style={styles.icon} />
          <Text style={styles.profileText}>Name</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
          <AntDesign name="mail" size={20} color="black" style={styles.icon} />
          <Text style={styles.profileText}>Email</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
          <AntDesign name="lock" size={24} color="black" style={styles.icon} />
          <Text style={styles.profileText}>Old Password</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
          <AntDesign name="lock" size={24} color="black" style={styles.icon} />
          <Text style={styles.profileText}>New Password</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
          <AntDesign name="lock" size={24} color="black" style={styles.icon} />
          <Text style={styles.profileText}>Retype Password</Text>
        </View>
        <View style={styles.line} />

      </View>
      <View style={styles.dashboardButtons}>
        <Button size="md" radius={10} type="solid" color="#ffb84d" style={styles.saveButton}>
          Submit
        </Button>
     </View>
     </SafeAreaView>
  )
}

export default EditProfileV;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DDEBEF",
    justifyContent: 'space-between',

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 120,
    marginTop: 20,
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1B5B7D',

  },
  profileSection: {
    marginTop: 100,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  profileText: {
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    marginLeft: 'left',
    marginLeft: 50,

  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.4,
    marginVertical: 10,
    marginLeft: 60,
    marginRight: 60
  },
  line1: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginVertical: 5,
    marginLeft: 60,
    marginRight: 60
  },
  saveButton: {
    alignSelf: 'center',
    marginTop: 20,
    width: 80,

  },
  addSection: {
    marginTop: 10,
  },
  addHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5B7D',
    marginLeft: 60

  },
  textInput: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    backgroundColor: '#ebebe0'
  },
  dashboardButtons: {
    flexDirection: 'row',
    justifyContent: 'center',

  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
