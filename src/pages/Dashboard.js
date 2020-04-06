import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { MoneySpent } from "../components/MoneySpent";
import { TransactionList } from "../components/TransactionList";

export const Dashboard = () => {
    const title = 'Dashboard';
    const spendingTillDate = useSelector(state => state.dashboard.spendingTillDate);
  return (
    <View style={styles.container}>
        <MoneySpent data={spendingTillDate}/>
        <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  }
  

});
