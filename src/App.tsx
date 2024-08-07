import { StatusBar, StyleSheet, Text, View,Platform, Dimensions} from 'react-native'
import React from 'react'

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//screens
import Home from './screens/Home'
import Nav from './screens/Nav'

export type RootStackPramList = {
  Home : undefined;
  Nav : {product: Product}
}


const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;  //Platform specific
const { width, height } = Dimensions.get('window')

const Screen = createNativeStackNavigator<RootStackPramList>()

export default function App() {
  return (
    <>
    
    <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={true}/>
    <View style={styles.background}>
    <NavigationContainer>
      <Screen.Navigator initialRouteName='Home'>
        <Screen.Screen name='Home' component={Home} options={{title: 'Home'}}/>
        <Screen.Screen name='Nav' component={Nav} options={{title: 'Navigation'}}/>
      </Screen.Navigator>
    </NavigationContainer>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#000',flex:1
  },
  headerText:{
    color: '#fff',
    marginTop: statusBarHeight,
    textAlign: 'center',
    padding : 20
  },
  card:{
    backgroundColor: '#fff',
    height: height/10,
    width: width/1.01,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
})