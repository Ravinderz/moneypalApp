import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export const Login = () => {

  const navigation = useNavigation();

const navigateToOTP = () => {
  navigation.navigate('OTP');
}

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo_transparent.png")}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigateToOTP()}
          style={styles.primary}
        >
          <Text style={{textAlign:'center',color:'#ffffff'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("Simple Button pressed")}
          style={styles.secondary}
        >
          <Text style={{textAlign:'center',color:'#6100ED'}} >REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
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
