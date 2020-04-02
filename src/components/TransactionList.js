import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Transaction } from "./Transaction";

const DATA = [
  {
    id: 1,
    title: "First Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 2,
    title: "Second Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 3,
    title: "Third Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 4,
    title: "Four Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 5,
    title: "Five Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 6,
    title: "Six Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 7,
    title: "Seven Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 8,
    title: "Eight Item",
    date: "21-3-2019",
    amount: "2500"
  },
  {
    id: 9,
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
