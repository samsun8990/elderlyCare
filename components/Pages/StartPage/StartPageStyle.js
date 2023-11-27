import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4EDF2",
        // paddingTop: StatusBar.currentHeight,
      },
      input: {
        flex: 1,
        fontSize: 20,
    
        paddingHorizontal: 10,
        paddingVertical: 15,
      },
      inputContainer: {
        width: "90%",
      },
      button: {
        width: 240,
        alignItems: "center",
        backgroundColor: "#FAB545",
        borderRadius: 20,
        padding: 15,
      },
      buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      },
      buttonOutLine: {
        width: 250,
        alignItems: "center",
        backgroundColor: "#FAB545",
        borderRadius: 10,
        padding: 15,
        marginTop: 15,
      },
      buttonText: {
        fontWeight: "700",
        color: "white",
        fontSize: 18,
      },
      buttonOutLineText: {
        fontWeight: "700",
        color: "white",
        fontSize: 18,
      },
      error: {
        color: "red",
        fontSize: 15,
        width: 340,
      },
      pickerBtn:{
        paddingHorizontal:20
      },
      buttonText:{
        fontSize:14,
        fontWeight:"500"
      },
      buttonOutLineText: {
        fontWeight: '700',
        color: 'white',
        fontSize: 18
      },
      error: {
        color: "red",
        fontSize: 15,
        width: 340,
      },
      DateTimePicker: {
        height: 180,
        width: 200
        // marginTop: -10
      }
    
})