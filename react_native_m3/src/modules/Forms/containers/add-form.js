import React, { Component } from 'react';
import {AsyncStorage, AppRegistry,StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import styles from '../../../utils/styles'
import ListForm from '../components/list-form'
import Api from '../../../utils/api'
/* import DropDownPicker from '@react-native-dropdown-picker'; */

export default class AddForm extends Component {
  constructor(){
    super()

    this.state = {
      title: '',
      type: '',
      adress: '',
      rooms: '',
      price: '',
      area: '', 
    }
  }
  changeTitle(title){
    this.setState({title})
  }
  changeType(type){
    this.setState({type})
  }
  changeAdress(adress){
    this.setState({adress})
  }
  changeRooms(rooms){
    this.setState({rooms})
  }
  changePrice(price){
    this.setState({price})
  }
  changeArea(area){
    this.setState({area})
  }
  buttonPressed(){
    const arrayData = [];
    if(this.state.title && this.state.type && this.state.adress && this.state.rooms && this.state.price && this.state.area)
    {
      const data =  {
        title: this.state.title,
        type: this.state.type,
        adress: this.state.adress,
        rooms: this.state.rooms,
        price: this.state.price,
        area: this.state.area
      }
      arrayData.push(data);
      try {
        let userId = '123';// !!!Ojo hay que obtener el id del usuario logueado 
        Api.createPropiedad(this.state.title, this.state.type, this.state.adress,this.state.rooms,this.state.price, null, userId, function (data, err) {
          if (err) {
            Alert.alert(err.message);
          } else {
            AsyncStorage.getItem('as').then((value) => {
              if(value !== null) {
                const d = JSON.parse(value);
                d.push(data)
                AsyncStorage.setItem('as',JSON.stringify(d)).then(() => {
                  Navigation.push({
                    asdasdad
                  })
                })
              } else {
                AsyncStorage.setItem('as',JSON.stringify(arrayData)).then(() => {
                  Navigation.push({
                    title: 'Add New Rent',
                    component: ListForm
                  })
                })
              }
            })
          }
        });
      } catch (error) {
        console.log(error)
      }
    }
    else
    {
      Alert.alert('Error!!')
    }
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.formTitle}>Ingrese Su Inmueble En Renta</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Title"
            value={this.state.title}
            onChangeText={(title) => this.changeTitle(title)}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Type"
            value={this.state.type}
            onChangeText={(type) => this.changeType(type)}
          />
          <TextInput 
            multiline={true}
            style={[styles.formInput, styles.formTextArea]}
            placeholder="Adress"
            value={this.state.adress}
            onChangeText={(adress) => this.changeAdress(adress)}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Rooms"
            value={this.state.rooms}
            onChangeText={(rooms) => this.changeRooms(rooms)}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Price"
            value={this.state.price}
            onChangeText={(price) => this.changePrice(price)}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Area"
            value={this.state.area}
            onChangeText={(area) => this.changeArea(area)}
          />
          <TouchableHighlight
           style={styles.formButton}
           onPress={() => this.buttonPressed()}
           >
            <Text style={styles.formTextButton}>PUBLICAR</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
