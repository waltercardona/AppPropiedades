import React, { Component } from 'react';
import { Text} from 'native-base';
import {TouchableOpacity, Button, View, TextInput, Keyboard, KeyboardAvoidingView, AsyncStorage, TouchableWithoutFeedback, ImageBackground} from 'react-native'
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from '../../../utils/styles'
import data from '../../../utils/dataGlobal'

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      useremail : ''
    }
  }

 /*  async componentDidMount(){
    let valLog = await api.valLogin("Juan", "1234")
    console.log(valLog)
  } */

  navigate = async (param) => {
/*     let userLogin = {
      user : this.state.useremail,
      perm : true
    }
    AsyncStorage.setItem('userLogin',JSON.stringify(userLogin)) */
    this.props.navigation.navigate(param)
  }

  render() {
    return (
      <View  style={styles.totalScreen}>
        <ImageBackground source={require('./../../../../assets/home-background.jpg')} style={styles.homeBackgroundImage}>
        <View style={styles.homeButtonsContainer}>
          {/* <Button title="GALERIA" onPress={() => this.navigate('Gallery')} style={styles.homeButton}/>
          <Button title="REGISTRARSE" onPress={() => this.navigate('Register')} style={styles.homeButton}/> */}
          <TouchableOpacity style={styles.homeButton} onPress={() => this.navigate('Gallery')}>
          <Text style={styles.textCenter}> GALERIA </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={() => this.navigate('Register')}>
          <Text style={styles.textCenter}> REGISTRARSE </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
      
    );
  }
}

export default Home