import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        // marginTop: 24,
        flex: 1, 
        backgroundColor: '#E4EDF2'
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitles: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        margin: 3
    },
    headerBtn: {
        fontSize: 16,
        color: "#1B5B7D",
    },
    cardsContainer: {
        marginTop: 16,
    },
    welcomename: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: "#1B5B7D",
        // fontFamily: "Salsa_400Regular",
    },
    welcomedesc: {
        textAlign: "center",
        fontSize: 13,
        padding: 10,
        color: "#1B5B7D"
    },
    scrollContainer: {
        flexDirection: 'row',
        padding: 10,
        gap: 25
    },
    item: {
        textAlign: "center",
        margin: 5,
        fontWeight: "600"
    },
    suggestions:{
        width:130,
        backgroundColor:"#EBE9E9",
        borderWidth:1,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        padding:12,
        margin:2
        
    }

})