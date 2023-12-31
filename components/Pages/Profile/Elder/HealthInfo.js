import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from 'react-native-vector-icons';
import { Button } from '@rneui/themed';
import { db } from "../../../Config/config"; // Update the path
import { AuthContext } from '../../../Config/AuthContext';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';

const HealthInfo = ({ navigation }) => {
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const [disease, setDisease] = useState('');
  const [description, setDescription] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = async () => {
    try {

      const followCurrentUserRef = doc(db, 'elderlyUsers', elderUser.id);

      setDoc(followCurrentUserRef, {
        healthInfo: arrayUnion({ id: elderUser.id, disease: disease, description: description })
      }, { merge: true }).then(() => {
        console.log("Data updated")
        alert("Updated")
    
    setDisease()
  setDescription()})
      // Assuming you have a 'healthInfo' collection in Firestore
    }
    catch (error) {
      console.log(error);
    }
  }


  return (

    <KeyboardAvoidingView style={styles.container}>
      <Text></Text>
      <Text></Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackPress}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Health Information</Text>
        </View>
        <Text></Text>
        <Text></Text>
        <View style={styles.contentContainer}>
          <View style={styles.passwordItem}>
            <FontAwesome5 name="first-aid" size={24} color="black" />
            <TextInput
              placeholder='Disease'
              value={disease}
              onChangeText={(text) => setDisease(text)}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.passwordItem}>
            <FontAwesome5 name="notes-medical" size={24} color="black" />
            <TextInput
              placeholder='Description'
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={styles.line} />
          <Button
            size="md"
            radius={10}
            type="solid"
            color="#ffb84d"
            style={styles.saveButton}
            onPress={handleSave}
          >
            Save
          </Button>
        </View>

      </ScrollView>


    </KeyboardAvoidingView>

    // <SafeAreaView style={styles.container}>
    //  <Text></Text>
    //  <Text></Text>

    // </SafeAreaView>
  );
};

export default HealthInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDEBEF',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 110,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#1B5B7D',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 400,
  },
  passwordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50,
    gap: 10,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft: 50,
    marginRight: 80,
  },
  saveButton: {
    alignSelf: 'center',
    marginTop: 20,
    width: 200,
  },
});
