import { StyleSheet, TextInput, View, Image, TouchableOpacity,Text,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import React,{useEffect, useState,useContext} from 'react';
import { AuthContext } from '../../Config/AuthContext';


const StartPage = ({route, navigation}) => {


  return (
    <View style={styles.container}>
        <View style={{marginTop:40,flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'#1B5B7D', fontSize:30, fontWeight:"bold"}}>Elderly </Text>
            <Text style={{color:'#309A14', fontSize:30, fontWeight:"bold"}} >Care </Text>
        </View>
        <View style={{marginTop: 15, marginBottom:30}}>
            <Image style={{width:300, height:300}} source={require('../../../assets/startimage.png')} />

        </View>
        <View>
            <TouchableOpacity style={[styles.button, styles.buttonOutLine, {backgroundColor:"#1B5B7D"}]}
                onPress= {()=>navigation.navigate('ElderlyRegister')}
            >
                <Text style={styles.buttonText}>Join as Elderly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonOutLine]}
               onPress= {()=>navigation.navigate('VolunteerRegister')}
            >
                <Text style={[styles.buttonText, styles.buttonOutLineText]}>Join as Volunteer</Text>
            </TouchableOpacity>
        </View>
    </View>
        
  )
}

export default StartPage

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems: 'center',
      backgroundColor:'#E4EDF2',
      top:40
  },
  input: {
      fontSize: 18,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: 5
  },
  inputContainer: {
      width: '80%'
  },
  button: {
      width: 250,
      alignItems: 'center',
      backgroundColor: '##1B5B7D',
      borderRadius: 10,
      padding: 15

  },
  buttonContainer: {

      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30

  },
  buttonOutLine: {
      width: 250,
      alignItems: 'center',
      backgroundColor: '#309A14',
      borderRadius: 10,
      padding: 15,
      marginTop: 15,
      
  },
  buttonText: {
      fontWeight: '700',
      color: 'white',
      fontSize: 18
  },
  buttonOutLineText: {
      fontWeight: '700',
      color: 'white',
      fontSize: 18
  }

})