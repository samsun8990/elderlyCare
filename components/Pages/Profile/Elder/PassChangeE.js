import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { Button } from '@rneui/themed';
import { auth } from 'firebase/auth'; // Import the updatePassword function from firebase auth


const PassChangeE = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChangePassword = async () => {
    if (newPassword === retypePassword) {
      try {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, '');
        await auth.reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        Alert.alert('Success', 'Password changed successfully');
        navigation.navigate('ElderProfile');
      } catch (error) {
        Alert.alert('Error', 'Failed to change password. Please try again.');
        console.error('Failed to change password', error);
      }
    } else {
      Alert.alert('Error', 'New passwords do not match. Please retype the password correctly.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.passwordItem}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            placeholder='New Password'
            secureTextEntry={true}
            onChangeText={text => setNewPassword(text)}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.passwordItem}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            placeholder='Retype Password'
            secureTextEntry={true}
            onChangeText={text => setRetypePassword(text)}
          />
        </View>
        <View style={styles.line} />
        <Button
          size="md"
          radius={10}
          type="solid"
          color="#ffb84d"
          style={styles.saveButton}
          onPress={handleChangePassword}
        >
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default PassChangeE;

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
