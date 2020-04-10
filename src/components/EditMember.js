import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Contact = ({ item }) => {
 
  
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgThumbnail}
            source={require("../assets/images/profile.png")}
          />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.primaryText}>{item.name}</Text>
        <Text style={styles.secondaryText}>{item.phoneNumbers ? item.phoneNumbers[0].number : 'number'}</Text>
        </View>
      </View>
    );
    }

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:'#ecf0f1',
       // borderBottomColor:'#dcdde1',
        paddingBottom:10,
        paddingTop:10,
        marginLeft:15,
        marginRight:15
    },
  textContainer: {
    margin: 8,
  },
  primaryText:{
    fontFamily:"Roboto",
    fontSize:16,
    paddingBottom:5
  },
  secondaryText:{
    fontFamily:"Roboto",
    fontSize:12,
    color:'#989595'
  },
  imgThumbnail: {
    height: 55,
    width: 55,
    borderRadius: 50
  },
  imgContainer: { elevation: 2, backgroundColor: "black",borderRadius: 50 }
});
