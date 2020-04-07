import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

export const MoneySpent = () => {
  let spendingTillDate = 0;

  let transactions = useSelector((state) => state.dashboard.recentTransactions);
  console.log(transactions);
  transactions.map((a) => {
    let date = new Date();
    let currentDate = new Date(date.getFullYear(), date.getMonth(), 2);
    if (new Date(a.transactionDate).getTime() > currentDate.getTime()) {
      spendingTillDate = spendingTillDate + +a.amount;
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Spendings</Text>
      <Text style={styles.subTextStyle}>till date</Text>

      <NumberFormat
        value={spendingTillDate}
        displayType={"text"}
        thousandSeparator={true}
        thousandsGroupStyle="lakh"
        prefix={"₹"}
        renderText={(value) => <Text style={styles.moneyStyle}>{value}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 10,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 22,
    fontFamily: "Roboto",
  },
  subTextStyle: {
    fontSize: 16,
    color: "#9993A1",
    fontFamily: "Roboto",
  },
  moneyStyle: {
    fontFamily: "Roboto",
    color: "#C0392B",
    fontSize: 22,
  },
});
