import React, { useState } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input } from 'native-base';
import { KeyboardAvoidingView, Alert } from 'react-native'
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import styles from '../../../utils/styles'
import data from '../../../utils/dataGlobal'
import Api from '../../../utils/api'

function Register({ navigation }) {
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfPassword] = useState("");
  const registerUser = async () => {
    try {
      Api.createUser(name, email, password, confirm_password, function (user, err) {
        if (err) {
          Alert.alert(err.message);
        } else {
          Alert.alert("User Register Successfully");
          navigation.goBack();
        }
      })
      // const response = await fetch('http://localhost:4000/api/users/signup', {
      //   mode: 'no-cors',
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json; charset=utf-8',
      //     'Access-Control-Allow-Origin': '*'
      //   },
      //   body: JSON.stringify({
      //     name: name,
      //     last_name: last_name,
      //     email: email,
      //     password: password,
      //     confirm_password: confirm_password
      //   })
      // });
      // const json = await response.json();
      // console.log(json);
      // Alert.alert("User Register Successfully");
      // navigation.goBack();
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <Container>
      <Content padder contentContainerStyle={styles.loginContent}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Registro de usuario</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.loginBody}>
                <Item inlineLabel>
                  <FontAwesome name='user' size={data.sizeInputIcon} />
                  <Input onChangeText={text => setName(text)} placeholder='Nombre' />
                </Item>
                <Item inlineLabel>
                  <FontAwesome name='user' size={data.sizeInputIcon} />
                  <Input onChangeText={text => setLastName(text)} placeholder='Apellido' />
                </Item>
                <Item inlineLabel>
                  <MaterialIcons name='email' size={data.sizeInputIcon} />
                  <Input onChangeText={text => setEmail(text)} placeholder='Correo electrónico' />
                </Item>
                <Item inlineLabel>
                  <Entypo active name='lock' size={data.sizeInputIcon} />
                  <Input onChangeText={text => setPassword(text)} placeholder='Contraseña' />
                </Item>
                <Item inlineLabel>
                  <Entypo active name='lock' size={data.sizeInputIcon} />
                  <Input onChangeText={text => setConfPassword(text)} placeholder='Confirmar Contraseña' />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button danger bordered onPress={() => navigation.goBack()}>
                <Text>Volver</Text>
              </Button>
              <Button success bordered style={styles.loginBoton} onPress={registerUser}>
                <Text>Guardar</Text>
              </Button>
            </CardItem>
          </Card>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
}
export default Register;
