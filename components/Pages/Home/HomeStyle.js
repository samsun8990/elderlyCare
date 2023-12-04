import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    welcome: {},
    container: {
        flex: 1, 
        backgroundColor: '#DCEDF6'
        //'#E4EDF2'
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        color: "#1B5B7D",
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
    connectBtn:{
        backgroundColor: '#FAB545',
        borderWidth: 2,
        borderColor: '#FAB545',
        borderRadius: 30,
    }

})