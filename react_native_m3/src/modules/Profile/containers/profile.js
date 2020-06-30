import React, {Component} from 'react'
import { Button, Spinner } from 'native-base'
import {View, Text, AsyncStorage, FlatList} from 'react-native'
import API from '../../../utils/api'
import styles from '../../../utils/styles'
import HomeLayout from '../../Home/components/homeLayout'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      useremail : '',
      perm : 0,
      data : '',
      loading : true
    }
  }

  async componentDidMount(){
    let userLogin = await AsyncStorage.getItem('userLogin')
    userLogin = JSON.parse(userLogin)
    this.setState({ useremail : userLogin.user, perm : userLogin.perm })

    let movies = await API.getData()
    this.setState({ data : movies.data.movies, loading : false })
  }

  render(){

    return(
      
      <View style={styles.totalScreen}>
        <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i.toString()}
        ListFooterComponent={() => this.state.loading ? <Spinner /> : null }
        renderItem={({ item }) => 
            <HomeLayout datos={item} />
        }
      />
        <Button danger transparent bordered style={styles.buttomCenter}
        onPress={ () => {
          AsyncStorage.removeItem('userLogin')
          this.props.navigation.navigate('Form')
        } }
        ><Text>Cerrar sesión</Text></Button>
      </View>
    )

  }

}

export default Profile
