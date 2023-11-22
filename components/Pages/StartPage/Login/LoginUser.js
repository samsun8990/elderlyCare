import { StyleSheet, TextInput, View, Image, TouchableOpacity,Text,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React,{useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {Fontisto} from 'react-native-vector-icons'
import {doc, setDoc,getDocs, collection,deleteDoc, addDoc} from "firebase/firestore";


const LoginUser = ({route, navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container}>
            
        <View style={{}}>
            <View style={{flexDirection:'row',borderBottomWidth: 1,paddingBottom: 4, width: '80%', marginBottom:20, marginTop:100}}>
                <Fontisto name="email" size={40}></Fontisto>
                <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                autoCorrect={false}
                />
            </View>     
            <View style={{flexDirection:'row',borderBottomWidth: 1,paddingBottom: 4, width: '80%'}}>
                <Fontisto name="locked" size={40}></Fontisto>
                <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                autoCorrect={false}
                />
            </View> 
            
            <View style={{marginTop:30, alignItems:'center' }}>
                <TouchableOpacity style={styles.button}
                        onPress= {()=>navigation.navigate('LoginUser')}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center', marginTop:20, fontSize: 10}}>
                    <Text style={{fontSize:18, color:'dodgerblue'}}>Forgot password</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        <View>
            <View style={{marginBottom:100, alignContent:'center'  }}>
                <Text style={{textAlign:'center', marginTop:20, fontSize: 18}}>
                    Don't have an account?
                </Text>
                <TouchableOpacity style={{alignItems:'center', marginTop:20}}>
                    <Text style={{fontSize:18, color:'dodgerblue'}}>Create user account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center', marginTop:20}}>
                    <Text style={{fontSize:18, color:'dodgerblue'}}>Create volunteer account</Text>
                </TouchableOpacity>
            </View>
        </View>
        
            
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    
  )
}

export default LoginUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'#E4EDF2'
    },
    input: {
        flex:1,
        fontSize: 20,
        
        paddingHorizontal: 10,
        paddingVertical: 15,
        
       
    },
    inputContainer: {
        width: '80%'
    },
    button: {
        width: 250,
        alignItems: 'center',
        backgroundColor: 'orange',
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
        backgroundColor: 'mediumseagreen',
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