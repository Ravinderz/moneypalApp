import React from "react";
import { StyleSheet } from "react-native";
import { Tabs } from "./src/components/Tabs";

export default function App() {
  return (
    <>
      <Tabs />
    </>
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
