import {
    StyleSheet, TextInput, View, Image, TouchableOpacity, Text, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard, ScrollView, StatusBar, SafeAreaView
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Fontisto } from 'react-native-vector-icons'
import { doc, setDoc, getDocs, collection, deleteDoc, addDoc } from "firebase/firestore";
import { AuthContext } from '../../../Config/AuthContext';

const LoginUser = ({ route, navigation }) => {

    const { user, signIn, signOut } = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        if (email && password) {
            let signAuth = await signIn(email, password)
            if(user){
                console.log("success");
                setEmail()
                setPassword()
            }
        }
        return;
    }

 
    return (

        <KeyboardAvoidingView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: "center", borderBottomWidth: 1, paddingBottom: 4, width: '80%', marginBottom: 10, marginTop: 50 }}>
                        <Fontisto name="email" size={40}></Fontisto>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: "center", borderBottomWidth: 1, paddingBottom: 4, width: '80%' }}>
                        <Fontisto name="locked" size={40}></Fontisto>
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            style={styles.input}
                            autoCorrect={false}
                            secureTextEntry
                        />
                    </View>

                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button}
                            onPress={handleLogin}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', marginTop: 20, fontSize: 10 }}>
                            <Text style={{ fontSize: 18, color: '#1B5B7D', fontWeight: "bold" }}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 190 }}>
                    <View style={{ marginBottom: 100, alignContent: 'center' }}>
                        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18, fontWeight: "bold" }}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }} onPress={() => navigation.navigate("ElderlyRegister")}>
                            <Text style={{ fontSize: 18, color: '#1B5B7D', fontWeight: "bold" }}>Create user account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }} onPress={() => navigation.navigate("VolunteerRegister")}>
                            <Text style={{ fontSize: 18, color: '#1B5B7D', fontWeight: "bold" }}>Create volunteer account</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>


        </KeyboardAvoidingView>



    )
}

export default LoginUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#E4EDF2',

    },
    input: {
        flex: 1,
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