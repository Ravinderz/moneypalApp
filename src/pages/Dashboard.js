import React from "react";
import { StyleSheet, View } from "react-native";
import { MoneySpent } from "../components/MoneySpent";
import { TransactionList } from "../components/TransactionList";

export const Dashboard = () => {
    const title = 'Dashboard';
  return (
    <View style={styles.container}>
        <MoneySpent />
        <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  }
  

});
