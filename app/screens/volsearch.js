
import { SearchBar } from '@rneui/base';
import { ImageBackground,StyleSheet, TextInput,Text, View,TouchableOpacity,Image } from 'react-native';
import React from 'react';

import { useState } from 'react';

export default function Volsearch() {

  
 return (
  <ImageBackground source={require ('../assets/volbg.png')} style={styles.container}>
    <Text style={styles.title}>D'ou partez vous ?</Text>
     <View style={styles.search}> 
       <SearchBar
       lightTheme
       autoCapitalize='none'
       onChangeText={(value) => this.setState({search_query: value})}
       onSubmitEditing={() => Actions.search_result({"search_query": this.state.search_query})}
       icon={{ type: 'font-awesome', name: 'search' }}
       placeholder='search..' />
    </View>

         
    
    
  </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
   

 title:{
top:50,
fontSize:30,
fontWeight:'bold',
color:'white'
 } ,
  
  
 search:{
flex:1,
width:'80%',
top:80,


 },
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
 
  
});
