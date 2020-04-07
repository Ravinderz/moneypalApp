import React, { useEffect, useState } from "react";
import { AsyncStorage, StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { MoneySpent } from "../components/MoneySpent";
import { TransactionList } from "../components/TransactionList";
import * as actions from "../store/actions/dashboardActions";
export const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  let userId = useSelector((state) => state.auth.userId);
  let data = [];
  useEffect(() => {
    const loading = async () => {
      
      let userData = await AsyncStorage.getItem('userData');
      let parsedData = JSON.parse(userData);
      console.log("userId",parsedData.userId);
      await dispatch(actions.getRecentTransactions(parsedData.userId));
      setIsLoaded(true);
    };
    loading();
  }, [dispatch]);

  return (
    <View style={{ flex: 1}}>
      {!isLoaded ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.container}>
          <MoneySpent  />
          <TransactionList transactions={data} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
});
