import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Card } from '@rneui/themed';
import { FontAwesome } from "react-native-vector-icons";
import { styles } from './HomeStyle';

const HomeSuggestions = () => {

    return (
        <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Suggestions</Text>
                <TouchableOpacity>
                    <FontAwesome name="arrow-right" size={20} color="#1B5B7D" />
                </TouchableOpacity>
            </View>
            <Card.Divider />
            <ScrollView horizontal>
                <View style={styles.scrollContainer}>
                    <View>
                        <Image source={require("../../../assets/images/defaultuser-img.png")}
                            style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                        <Text style={styles.item}>Lorem Lipsum</Text>
                        <Button buttonStyle={{
                            backgroundColor: '#1B5B7D',
                            borderWidth: 2,
                            borderColor: '#1B5B7D',
                            borderRadius: 30,
                        }}
                            containerStyle={{
                                width: 90
                            }}
                        >Connect</Button>
                    </View>
                    <View>
                        <Image source={require("../../../assets/images/defaultuser-img.png")}
                            style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                        <Text style={styles.item}>Lorem Lipsum</Text>
                        <Button buttonStyle={{
                            backgroundColor: '#1B5B7D',
                            borderWidth: 2,
                            borderColor: '#1B5B7D',
                            borderRadius: 30,
                        }}
                            containerStyle={{
                                width: 90
                            }}
                        >Connect</Button>
                    </View>
                    <View>
                        <Image source={require("../../../assets/images/defaultuser-img.png")}
                            style={{width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                        <Text style={styles.item}>Lorem Lipsum</Text>
                        <Button buttonStyle={{
                            backgroundColor: '#1B5B7D',
                            borderWidth: 2,
                            borderColor: '#1B5B7D',
                            borderRadius: 30,
                        }}
                            containerStyle={{
                                width: 90
                            }}
                        >Connect</Button>
                    </View>
                </View>
            </ScrollView>
        </Card>
    )
}

export default HomeSuggestions

