import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { Button } from '@rneui/themed';

const PassChangeV = ({ navigation }) => {
  const handleBackPress = () => {
    // Add navigation logic here to go back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{marginTop:20}}></Text>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.passwordItem}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput style={{fontSize:18}}
          placeholder='New Password'></TextInput>
        </View>
        <View style={styles.line} />
        <View style={styles.passwordItem}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput style={{fontSize:18}}
          placeholder='Retype Password'></TextInput>
        </View>
        <View style={styles.line} />
        <Button size="md" radius={10} type="solid" color="#ffb84d" style={styles.saveButton}
         onPress={()=>navigation.navigate("VolunProfile")}>
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default PassChangeV;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDEBEF',
    justifyContent: 'space-between'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
    marginLeft:20,
    marginRight:110
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
    marginBottom:400
  },
  passwordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:50,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft:50,
    marginRight:80,
  },
  saveButton: {
    alignSelf: 'center',
    marginTop: 20,
    width:100
    
  },
});
