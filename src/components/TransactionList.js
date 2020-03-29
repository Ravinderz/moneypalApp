import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { uuid } from "uuidv4";
import { Transaction } from "./Transaction";

const DATA = [
  {
    id: uuid(),
    title: "First Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Second Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Third Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Four Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Five Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Six Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Seven Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Eight Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: uuid(),
    title: "Nine Item",
    date: "21-3-2019",
    amount: "2500"
  }
  
];

export const TransactionList = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Recent Transactions </Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Transaction item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 10,
    width: "100%",
    marginBottom: 25
  },
  textStyle: {
    fontSize: 18
  }
});
