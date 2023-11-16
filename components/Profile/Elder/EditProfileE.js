import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditProfileE = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles = { justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Image source={require('../../../assets/profile.png')} style={{ alignItems: 'center', width: 100, height: 100, borderRadius: 50 }} />
        <Text></Text>
        <Text>Joined Date: 12 Aug 2022</Text>
        <Text></Text>
        <Text>Name</Text>
        <Text></Text>
        <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"} >
          <Icon name="edit" color="white" />
          Edit
        </Button>
      </View>
      <View style={styles = { flex: 1, alignItems: 'left', padding: 20 }}>
        <Text></Text>
        <Text style={styles = { fontSize: 20 }}>Personal Details</Text>
      </View>


    </SafeAreaView>
  )
}

export default EditProfileE

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEBEF",
    justifyContent: 'space-between'

  }
})