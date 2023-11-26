import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDEBEF",
        justifyContent: 'space-between'
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        gap: 5
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    personalDetailsContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 20,
    },
    cardContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 10,
    },
    accountContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dashboardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 5,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    icon: {
        marginRight: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
});