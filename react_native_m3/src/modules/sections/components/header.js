import React from 'react'
import {View} from 'react-native'
import { H3 } from 'native-base'
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../utils/styles'
import data from '../../../utils/dataGlobal'

function Header(props){
    return(
        <LinearGradient colors={[data.primaryAppColor,data.secondAppColor]} end={[0.8, 1]}>
            <View style={{flexDirection: 'row',paddingTop : Constants.statusBarHeight}}>
                <View style={styles.headerContent}>
                    <H3 style={styles.headerTitle}>{props.text}</H3>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Header;