import React, {Component} from 'react'
import { Spinner} from 'native-base'
import { AsyncStorage, ImageBackground, View} from 'react-native'
import styles from '../../../utils/styles'

class Loading extends Component {

    componentDidMount(){

        setTimeout( async () => {
            let validationLogin = await AsyncStorage.getItem('userLogin')
            if(validationLogin){
                validationLogin = JSON.parse(validationLogin)
                if(validationLogin.perm) { 
                    this.props.navigation.navigate('Profile')
                }else{
                    this.props.navigation.navigate('UserLogin')
                }
            }else{
                this.props.navigation.navigate('UserLogin')
            }
        },3000)
    }

    render(){

        return(
            
            <ImageBackground source={require("../../../../assets/pit2.jpg")} style={styles.totalScreen}>
                <View style={styles.container}>
                    <Spinner color='green' style={styles.spinner} />
                </View>
            </ImageBackground>
        )

    }

}

export default Loading