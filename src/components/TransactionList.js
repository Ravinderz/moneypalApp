import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Transaction } from "./Transaction";
 
export const TransactionList = (transactions) => {

  let data = useSelector(state => state.dashboard.recentTransactions);
  if(transactions && transactions.size > 0){
    data = transactions;
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Recent Transactions </Text>
      </View>
      <View style={{height:"80%"}}>
        <FlatList
          data={data}
          renderItem={({ item }) => (<Transaction item={item} />)}
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
    marginBottom: 25,
  },
  textStyle: {
    fontSize: 18
  }
});
