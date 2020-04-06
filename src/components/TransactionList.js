import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getRecentTransactions } from "../store/actions/dashboardActions";
import { Transaction } from "./Transaction";
 
export const TransactionList = () => {

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecentTransactions())
  }, []);


  const data = useSelector(state => state.dashboard.recentTransactions);
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Recent Transactions </Text>
      </View>
      <View>
        <FlatList
          data={data}
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
