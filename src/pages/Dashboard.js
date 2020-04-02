import React from "react";
import { StyleSheet, View } from "react-native";
import { HeaderStrip } from "../components/HeaderStrip";
import { MoneySpent } from "../components/MoneySpent";
import { TransactionList } from "../components/TransactionList";

export const Dashboard = () => {
    const title = 'Dashboard';
  return (
    <View style={styles.container}>
         <HeaderStrip title={title} showBackBtn={"false"}/>
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
