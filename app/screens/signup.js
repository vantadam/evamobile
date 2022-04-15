import React from 'react';
import { ImageBackground,StyleSheet, TextInput,Text, View,TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 return (
  <ImageBackground source={require ('../assets/loginbg.png')} style={styles.container}>
    <View>
     <Image source={require ('../assets/eva.png')} style={styles.logo} />    
     </View> 
     <View>
         <Text style={styles.title}>
         Créer un compte
         </Text>
    </View>
     <View style={styles.inputView}>
         
     <TextInput
       style={styles.TextInput}
       placeholder="pseudonyme"
       placeholderTextColor="#D3D3D3"
       onChangeText={(email) => setEmail(email)} />
   </View>
   <View style={styles.inputView}>
         
     <TextInput
       style={styles.TextInput}
       placeholder="e-mail"
       placeholderTextColor="#D3D3D3"
       onChangeText={(email) => setEmail(email)} />
   </View>
   <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Mot de passe"
         placeholderTextColor="#D3D3D3"
         secureTextEntry={true}
         onChangeText={(password) => setPassword(password)} />
     </View>
     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Confirmer"
         placeholderTextColor="#D3D3D3"
         secureTextEntry={true}
         onChangeText={(password) => setPassword(password)} />
     </View> 
    <View style ={styles.fixToText}>
    
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>   S'inscrire  </Text>
    </TouchableOpacity>
    </View>
    
  </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
    logo: {
        bottom:500,
        height:'15%',
        marginBottom:10,
 },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    bottom: 40,
  },
  
  TextInput: {
    fontSize:15,
    height: 50,
    flex: 2,
    padding: 10,
    marginLeft: 15,
  },
 
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    marginTop:30,
    marginHorizontal:10,
    elevation: 8,
    backgroundColor: "#f58f5a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    bottom: 30,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  title: { 
      color: "#36446d",
      margin: 1,
      fontSize: 35,
      bottom:100,
     
      fontWeight: 'bold',
      alignContent:'center'
    

  },
  text: {
      bottom:100,
  },
  fixToText: {
     bottom:1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
