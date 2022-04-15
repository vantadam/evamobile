import React from 'react';
import { ScrollView,SafeAreaView,StyleSheet, TextInput,Text, View,TouchableOpacity,Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

const Separator = () => (
  <View style={styles.separator} />
);
export default function Home({navigation}) {
 return (
  <View style={styles.bg}>
    <TouchableOpacity style={styles.mail}>
         <Ionicons name="notifications" size={24} color="#f58f5a" />
         </TouchableOpacity>
         <Text style={styles.welcome}> bienvenue! </Text>
         <TouchableOpacity style={styles.user}>
         <AntDesign name="user" size={24} color="#f58f5a" />
         </TouchableOpacity>
       <View style ={styles.fixToIcon}>
    <View>


    <TouchableOpacity
     onPress={() => navigation.navigate('Volsearch')}
    style={styles.flight}>
    <FontAwesome name="plane" size={25} color="#36446d" />
    </TouchableOpacity>



    <Text style={styles.vol}>Vol</Text>
    </View>     
    <View><TouchableOpacity 
    style={styles.hotel}>
   <FontAwesome name="hotel" size={25} color="#36446d" />
    </TouchableOpacity>
    <Text style={styles.hot}>Hotel</Text>
    </View>
    <View><TouchableOpacity 
    style={styles.tour}>
   <MaterialIcons name="tour" size={25} color="#36446d" />
    </TouchableOpacity>
    <Text style={styles.volhot}>Vol+Hotel</Text>
    </View>
    </View> 
    
  </View>
  );
}
 
const styles = StyleSheet.create({
  welcome:{
    left :140,
    top:35,
    fontSize:15,
    fontWeight:'bold',
    color:"white"

  },
       
  vol:{
    top:100,
    left:55,
    fontSize:15,
    fontWeight:'bold',
    color:"white"

  },
  hot:{
    top:100,
    left:35,
    fontSize:15,
    fontWeight:'bold',
    color:"white"

  },
  volhot:{
    top:100,
    
    fontSize:15,
    fontWeight:'bold',
    color:"white"

  },
  mail: { 
      color: "white",
      margin: 1,
      
      top:60,
      left:28,
     
      fontWeight: 'bold',
      alignContent:'center'
   

  },
  user: { 
    color: "white",
    margin: 1,
    top:15,
    left:300,
   
    fontWeight: 'bold',
    alignContent:'center'
 

},
fixToIcon: {
  top:20, 
 flexDirection: 'row',
 justifyContent: 'space-between',
},
flight: {
  marginTop:30,
  marginHorizontal:30,
  elevation: 8,
  backgroundColor: "white",
  borderRadius: 100,
  paddingVertical: 20,
  paddingHorizontal: 24,
  top:100 ,
  left:5,
  
},

hotel: {
  marginTop:30,
  marginHorizontal:30,
  elevation: 8,
  backgroundColor: "white",
  borderRadius: 100,
  paddingVertical: 20,
  paddingHorizontal: 20,
  top:100 ,
  right:12
  
},


tour: {
  marginTop:30,
  marginHorizontal:30,
  elevation: 8,
  backgroundColor: "white",
  borderRadius: 100,
  paddingVertical: 20,
  paddingHorizontal: 20,
  top:100 ,
  right:30
  
},

  bg: {
    backgroundColor: '#36446d',
    flex:1,
},
separator: {
 
  marginVertical: 8,
  borderBottomColor: 'white',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
});
