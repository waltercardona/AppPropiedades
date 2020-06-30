import React from 'react'
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome, MaterialIcons, AntDesign} from '@expo/vector-icons';
import Header from './modules/sections/components/header'
import Login from '../src/modules/Login/containers/login'
import Register from '../src/modules/Login/containers/register'
import Home from '../src/modules/Home/containers/home'
import Push from './modules/Push/containers/push'
import Profile from './modules/Profile/containers/profile'
import Loading from './modules/sections/containers/loading'
import Gallery from './modules/Home/containers/gallery'
import Form from './modules/Forms/containers/add-form'
import ListForm from './modules/Forms/components/list-form'
import data from './utils/dataGlobal'

//Inicio
const HomeNavigator = createStackNavigator({
  Home,
  Gallery,
  Register
},{ 
  defaultNavigationOptions : { header : () => <Header text="BIENVENIDO INVITADO"/>  } 
});
//Inicio de sesión
const LoginNavigator = createStackNavigator({
  Login,
  Loading,
  Register,
  Profile,
  Form,
  ListForm

  
},{ 
  defaultNavigationOptions : { header : () => <Header text="BIENVENIDO ADMINISTRADOR"/>  }
});

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home : {
      screen: HomeNavigator,
      navigationOptions : {
        title: 'INVITADO',
        tabBarIcon: ({tintColor}) => <FontAwesome active name="user" color={tintColor} size={data.sizeMenuIcon} />
      }
    },
    Profile : {
      screen : LoginNavigator,
      navigationOptions : {
        title: 'ADMINISTRADOR',
        tabBarIcon: ({tintColor}) => <FontAwesome active name="user-secret" color={tintColor} size={data.sizeMenuIcon} />
      }
    }
  },
  {
    tabBarOptions : {
      activeTintColor : 'black',
      activeBackgroundColor : 'white',
      inactiveTintColor : 'gray',
      inactiveBackgroundColor : 'white'
    }
  }
)
export default createAppContainer(BottomTabNavigator);