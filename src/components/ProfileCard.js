import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const ProfileCard = () => {
  return (
    <View style={styles.container}>
         <Image
        style={styles.profile}
        source={require("../assets/images/profile.png")}
      />
      <Text style={styles.name}>Silly Jackson</Text>
      <Text style={styles.phone}>+91-9988779988</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin:15,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    elevation:5
  },
  profile:{
      width:100,
      height:100,
      borderRadius:50,
      marginTop:50
  },
  name:{
      fontSize:22,
      fontFamily:'Roboto',
      margin:5,

  },
  phone:{
    fontSize:16,
    fontFamily:'Roboto',
    margin:5,
    marginBottom:50

  }
  

});
