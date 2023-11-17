import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';

const EditProfileE = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileRow}>
        <MaterialCommunityIcons name="account" size={20} color="black" style={styles.icon} />
          <Text style={styles.profileText}>Name</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
        <AntDesign name="contacts" size={20} color="black" style={styles.icon} />
          <Text style={styles.profileText}>Phone</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
        <AntDesign name="calendar" size={20} color="black" style={styles.icon} />
          <Text style={styles.profileText}>Date of Birth</Text>
        </View>
        <View style={styles.line} />

      </View>
      <View style={styles.dashboardButtons}>
      <Button size={"md"} radius={20} type="solid" color={"#FFD699"}>
        Save
      </Button>
      </View>
      <View style={styles.addSection}>
        <View style={styles.addHeader}>
          <Text style={styles.addHeaderText}>Add About/Bio</Text>
        </View>
        <View style={styles.line1} />
        <TextInput
          style={styles.textInput}
          placeholder="Type here"
        />
      </View>
      <View style={styles.addSection}>
        <View style={styles.addHeader}>
          <Text style={styles.addHeaderText}>Add Hobbies/Interests</Text>
        </View>
        <View style={styles.line1} />
        <TextInput
          style={styles.textInput}
          placeholder="Type here"
        />
      </View>
      <View style={styles.dashboardButtons}>
      <Button size={"md"} radius={20} type="solid" color={"#FFD699"}>
        Save
      </Button>
      </View>
    </SafeAreaView>
  )
}

export default EditProfileE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEBEF",
    justifyContent: 'space-between',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1B5B7D'
  },
  profileSection: {
    marginTop: 5,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  profileText: {
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    marginLeft: 'left',
    
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  line1: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  saveButton: {
    marginTop: 20,
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
    color:'#1B5B7D'
  },
  textInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor:'#f5f5f0'
  },
  dashboardButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
},
});

