import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { AuthContext } from '../../../Config/AuthContext';


const EditProfileE = ({ navigation }) => {
  const handleBackPress = () => {
    // Add navigation logic here to go back
    navigation.goBack();
  };
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileRow}>
          <MaterialCommunityIcons name="account" size={20} color="black" style={styles.icon} />
          <TextInput style={styles.profileText}>{elderUser.fullname}</TextInput>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
          <AntDesign name="contacts" size={20} color="black" style={styles.icon} />
          <TextInput style={styles.profileText}>{elderUser.phone}</TextInput>
        </View>
        <View style={styles.line} />
        <View style={styles.profileRow}>
          <AntDesign name="calendar" size={20} color="black" style={styles.icon} />
          <TextInput style={styles.profileText}>{elderUser.date}</TextInput>
        </View>
        <View style={styles.line} />

      </View>
      <View style={styles.dashboardButtons}>
        <Button size="md" radius={10} type="solid" color="#ffb84d" style={styles.saveButton}
         onPress={()=>navigation.navigate("ElderProfile")}>
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
        <Button size="md" radius={10} type="solid" color="#ffb84d" style={styles.saveButton}
        onPress={()=>navigation.navigate("ElderProfile")}>
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

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 150,
    marginTop: 10,

  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1B5B7D',


  },
  profileSection: {
    marginTop: 10,
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
