import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { Button } from '@rneui/themed';

const PassChangeE = ({ navigation }) => {
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
        <Text style={styles.headerText}>Change Password</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.passwordItem}>
          <AntDesign name="lock" size={24} color="black" />
          <Text>New Password</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.passwordItem}>
          <AntDesign name="lock" size={24} color="black" />
          <Text>Retype Password</Text>
        </View>
        <View style={styles.line} />
        <Button size="md" radius={10} type="solid" color="#FFD699" style={styles.saveButton}>
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
    justifyContent: 'space-between'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
  },
  passwordItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  saveButton: {
    alignSelf: 'center',
    marginTop: 20,
    width:200
    
  },
});
