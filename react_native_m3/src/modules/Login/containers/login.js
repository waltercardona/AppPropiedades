import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input } from 'native-base';
import { KeyboardAvoidingView, AsyncStorage, Alert } from 'react-native'
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from '../../../utils/styles'
import data from '../../../utils/dataGlobal'
import Api from '../../../utils/api'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: '',
      password: ''
    }
  }

  /*  async componentDidMount(){
     let valLog = await api.valLogin("Juan", "1234")
     console.log(valLog)
   } */

  navigate = async (param) => {
    let userLogin = {
      user: this.state.useremail,
      perm: true
    }
    AsyncStorage.setItem('userLogin', JSON.stringify(userLogin))
    this.props.navigation.navigate(param)
  }

  signin = (navigation) => {
    try {
      let userLogin = {
        user: this.state.useremail,
        perm: true
      }
      Api.loadUser(this.state.useremail, this.state.password, function (user, err) {
        if (err) {
          Alert.alert(err.message);
        } else {
          AsyncStorage.setItem('userLogin', JSON.stringify(userLogin))
          props.navigation.navigate("Loading")
        }
      })
    }
    catch (err) {
      Alert.alert(error.message);
    }
  }

  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.loginContent}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Card>
              <CardItem header bordered>
                <Text style={styles.textCenter}>Inicio de sesión</Text>
              </CardItem>
              <CardItem>
                <Body style={styles.loginBody}>
                  <Item>
                    <MaterialIcons active name='email' size={data.sizeInputIcon} />
                    <Input placeholder='Correo' onChangeText={(useremail) => this.setState({ useremail })} />
                  </Item>
                  <Item>
                    <Entypo active name='lock' size={data.sizeInputIcon} />
                    <Input placeholder='Contraseña' onChangeText={(password) => this.setState({ password })} />
                  </Item>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Button bordered onPress={() => this.navigate('Register')}>
                  <Text>Registro</Text>
                </Button>
                <Button bordered success style={styles.loginBoton} onPress={() => this.navigate('Loading')}>
                  <Text>Entrar</Text>
                </Button>
              </CardItem>
            </Card>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

export default Login