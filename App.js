import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { RootNav } from "./src/components/Tabs";
export default function App() {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  }
});

/* <HeaderStrip />
      <MoneySpent />
       <Dashboard/>
      <TransactionList />      */
