import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { AsyncStorage, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/authActions';



export const Login = () => {

  const [isloading,setIsLoading] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const checkLoggedIn  = async () => {
     let userData = await AsyncStorage.getItem('userData');
     let parsedData = JSON.parse(userData);
      if(parsedData){
        navigation.navigate('Dashboard');
        dispatch(actions.SIGNIN,userData.displayName,
          userData.email,
          userData.expiresIn,
          userData.idToken,
          userData.localId,
          userData.refreshToken,
          userData.registered)
      }
      setIsLoading(false)
      }
    checkLoggedIn();
   
  },[dispatch])

const navigateToOTP = () => {
  navigation.navigate('LoginEmail');
}
const navigateToRegister = () => {
  navigation.navigate('Register');
}

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo_transparent.png")}
      />
      <View style={styles.buttonContainer}>
        {isloading ? <ActivityIndicator size="large"/> : 
         <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => navigateToOTP()}
        style={styles.primary}
      >
        <Text style={{textAlign:'center',color:'#ffffff'}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToRegister()}
        style={styles.secondary}
      >
        <Text style={{textAlign:'center',color:'#6100ED'}} >REGISTER</Text>
      </TouchableOpacity>
      </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  logo: {
    height: 300,
    width: 300
  },
  buttonContainer: {
    width: "70%",
    alignItems:'center',
    justifyContent:'center'
  },
  primary:{
    padding: 15,
    width:'100%',
    backgroundColor:'#6200EE',
    marginBottom:20,
    borderRadius:5
  },
  secondary:{
    padding: 15,
    width:'100%',
    borderStyle:'solid',
    borderColor:'#3F1280',
    borderWidth:2,
    borderRadius:5
  }

});
