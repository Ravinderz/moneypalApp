import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
 
export const HeaderStrip = ()  =>{
  
  return (
  
      <View style={styles.strip}>
        <View style={styles.stripContainer}>
          <Icon name="navicon" style={styles.hamburger}></Icon>
          <Text style={styles.stripText}>Expense Report</Text>
          <Icon name="bell-o" style={styles.hamburger}></Icon>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  
  strip: {
    backgroundColor: "#455a64",
    marginTop: 24,
    padding: 10,
    width: "100%"
  },
  stripContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  stripText: {
    alignSelf: "center",
    fontFamily: "Roboto",
    fontSize: 20
  },
  hamburger: {
    fontSize: 22
  }
});
