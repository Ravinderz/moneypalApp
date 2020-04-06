import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MoneySpent = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Money Spent</Text>
      <Text style={styles.subTextStyle}>till date</Text>
      <Text style={styles.moneyStyle}>&#x20B9; {data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 10,
    alignItems: "center"
  },
  textStyle: {
    fontSize: 22,
    fontFamily:'Roboto'
  },
  subTextStyle: {
    fontSize: 16,
    color:'#9993A1',
    fontFamily:'Roboto'
  },
  moneyStyle:{
    fontFamily:'Roboto',
    color:'#C0392B',
    fontSize:22
  }
});
