import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const Transaction = ({item}) => {
  return (
    <View style={styles.container} >
      <View style={styles.lineOne}>
        <Text style={styles.lineOneText}>{item.title}</Text>
        <Text style={styles.lineOneText}>&#x20B9;{item.amount}</Text>
      </View>
      <View>
        <Text style={styles.date}>{item.transactionDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom:5,
    padding: 10,
    width: "100%",
    backgroundColor:'#fff',
    elevation:5,
    borderRadius:5,
  },
  textStyle: {
    fontSize: 18
  },
  lineOne: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  date:{
    fontSize:11,
    color:'#546e7a'
  },
  lineOneText:{
    fontSize:16,
  }
});
