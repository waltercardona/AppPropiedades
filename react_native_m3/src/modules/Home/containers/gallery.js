import React, {Component} from 'react'
import {View, Text, AsyncStorage, FlatList} from 'react-native'
import { createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Button, Spinner} from 'native-base'
import API from '../../../utils/api'
import HomeLayout from '../components/homeLayout'
import styles from '../../../utils/styles'

class Gallery extends Component {

  constructor(props){
    super(props);
    this.state = {
      useremail : '',
      perm : false,
      data : '',
      loading : true  
    }
  }

  async componentDidMount(){
    let data = await API.getData()
    this.setState({ data : data.propiedades})
    console.log(data)
    /* AsyncStorage.removeItem('userLogin'); */
    /* let userLogin = await AsyncStorage.getItem('userLogin')
    userLogin = JSON.parse(userLogin)
    this.setState({ useremail : userLogin.user, perm : userLogin.perm }) */

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
          this.props.navigation.navigate('Home')
        } }
        ><Text>HOME</Text></Button>
      </View>
    )

  }

}

export default Gallery