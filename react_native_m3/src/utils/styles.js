import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    },
    formContainer : {
      flex : 1,
      backgroundColor: "#F5FCFF",
      marginTop: 30,
      paddingLeft: 15,
      paddingRight: 15
    },
    formInput: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 2,
      marginBottom: 20,
      paddingLeft: 15,

    },
    formTextArea: {
      height: 60
    },
    formTitle: {
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 5
    },
    formButton: {
      backgroundColor: 'skyblue',
      paddingTop: 15,
      paddingBottom: 15
    },
    loginContent : {
      flex : 1,
      justifyContent : 'center'
    },
    formTextButton: {
      textAlign: 'center',
      color: 'white'
    },
    loginBody : {
      paddingVertical : 30
    },
    textCenter : {
      textAlign : 'center',
      width : '150%',
      color: 'white'
    },
    loginBoton : {
      marginLeft : '40%'
    },
    movieImageSize : {
      width: 150, 
      height: 150
    },
    buttomCenter : {
        padding : 10,
        marginLeft : '40%'
    },
    headerContent : {
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle : {
        color: 'white', 
        textAlign: 'center',
        paddingVertical : 10
    },
    totalScreen : {
      width : '100%', 
      height : '100%',
    },
    spinner : {
      width : 200,
      height : 150
    },
    homeButtonsContainer : {
      padding: 0,
      margin : 100,
      marginTop: 470,
      flex : 1,
      justifyContent: 'space-between',
    },
    homeButton : {
      marginTop: 20,
      padding :20,
      alignItems: "center",
      backgroundColor: "#516b6c",
      borderRadius: 15
    },
    homeBackgroundImage : {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }

})

export default styles