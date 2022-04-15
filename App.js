import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import{NavigationContainer} from '@react-navigation/native';
import Login from './app/screens/login';
import Signup from './app/screens/signup';
import Home from './app/screens/home';
import Volsearch from './app/screens/volsearch';
import 'react-native-gesture-handler';



const Stack =createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' headerMode='none'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Volsearch' component={Volsearch}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App;
