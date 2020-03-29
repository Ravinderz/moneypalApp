import React from "react";
import { StyleSheet, View } from "react-native";
import { HeaderStrip } from "./src/components/HeaderStrip";
import { MoneySpent } from "./src/components/MoneySpent";
import { TransactionList } from "./src/components/TransactionList";

 
export default function App() {
  return (
    <View style={styles.container}>
      <HeaderStrip />
      <MoneySpent />
      <TransactionList />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: "#d6d6d6",
  }
});
