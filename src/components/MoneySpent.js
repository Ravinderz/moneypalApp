import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MoneySpent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Money Spent</Text>
      <Text style={styles.textStyle}>&#x20B9; 10,000</Text>
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
    fontSize: 22
  }
});
