import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { RootNav } from "./src/components/Tabs";
import configureStore from "./src/store/configureStore";


const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
});

/* <HeaderStrip />
      <MoneySpent />
       <Dashboard/>
      <TransactionList />      */
