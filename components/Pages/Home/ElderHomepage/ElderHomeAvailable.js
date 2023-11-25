import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Card } from '@rneui/themed';
import { FontAwesome } from "react-native-vector-icons";
import { styles } from '../HomeStyle';
import { defaultImg } from '../../../Utils/ImageCommon';


const ElderHomeAvailable = () => {
    return (

        <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Available Volunteers</Text>
                <TouchableOpacity>
                    <FontAwesome name="arrow-right" size={20} color="#1B5B7D" />
                </TouchableOpacity>
            </View>
            <Card.Divider />
            <ScrollView horizontal>
                <View style={styles.scrollContainer}>
                    <View>
                        <Image source={defaultImg}
                            style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                        <Text style={styles.item}>Lorem Lipsum</Text>
                        <Button buttonStyle={{
                            backgroundColor: '#BF3A3A',
                            borderWidth: 2,
                            borderColor: '#BF3A3A',
                            borderRadius: 30,
                        }}
                            containerStyle={{
                                width: 90,
                                height: 45
                            }}
                            titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                        >Request</Button>
                    </View>
                    <View>
                        <Image source={defaultImg}
                            style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                        <Text style={styles.item}>Lorem Lipsum</Text>
                        <Button buttonStyle={{
                            backgroundColor: '#BF3A3A',
                            borderWidth: 2,
                            borderColor: '#BF3A3A',
                            borderRadius: 30,
                        }}
                            containerStyle={{
                                width: 90,
                                height: 45
                            }}
                            titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                        >Request</Button>
                    </View>
                    <View>
                        <Image source={defaultImg}
                            style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                        <Text style={styles.item}>Lorem Lipsum</Text>
                        <Button buttonStyle={{
                            backgroundColor: '#BF3A3A',
                            borderWidth: 2,
                            borderColor: '#BF3A3A',
                            borderRadius: 30,
                        }}
                            containerStyle={{
                                width: 90,
                                height: 45
                            }}
                            titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                        >Request</Button>
                    </View>



                </View>
            </ScrollView>
        </Card>


    )
}

export default ElderHomeAvailable
