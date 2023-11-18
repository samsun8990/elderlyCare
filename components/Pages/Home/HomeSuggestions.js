import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Card } from '@rneui/themed';
import { FontAwesome } from "react-native-vector-icons";
import { styles } from './HomeStyle';

const HomeSuggestions = () => {

    return (
        <View>
            <Card>
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
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
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
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
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
                                style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
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
            <Text></Text>

        </View>

    )
}

export default HomeSuggestions

