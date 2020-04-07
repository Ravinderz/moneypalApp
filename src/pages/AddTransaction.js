import React from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-datepicker';
import { Dropdown } from "react-native-material-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { db } from '../dbConfig';
import * as actions from "../store/actions/dashboardActions";

let data = [
  {
    value: "Self"
  },
  {
    value: "Group"
  }
];

let group = [
  {
    value: "Our New Adda"
  },
  {
    value: "Roommies"
  }
];



export const AddTransaction = () => {

  const dispatch = useDispatch();

  const [value, onChangeText] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [transactionDate,setTransactionDate] = React.useState("");
  const [transactionType, setTransactionType] = React.useState("");
  const [selectedgroup, setSelectedGroup] = React.useState("");
  const title = "Add Transaction";

  let userId = useSelector((state) => state.auth.userId);

  const submitTransaction = () =>{
    console.log(value, amount , transactionType ,selectedgroup, transactionDate);
    db.ref(`/transactions/${userId}`).push({
      title: value,
      amount,
      transactionType,
      selectedgroup,
      transactionDate
    });
    Alert.alert('Action!', 'Transaction has been added successfully');
    onChangeText("");
    setAmount("");
    setTransactionType("Self");
    setSelectedGroup("");
    setTransactionDate("");
    dispatch(actions.getRecentTransactions(userId));
  }

  const onTransactionTypeSelection = (transactionType) =>{
    if(transactionType !== 'Group'){
      setSelectedGroup(null);
    }

    setTransactionType(transactionType);
  }

  const showDropdown = (transactionType) => {
    if (transactionType === "Group") {
      return (
        <Dropdown
          containerStyle={styles.dropdownStyle}
          inputContainerStyle={{
            borderBottomWidth: 1,
            borderBottomColor: "#3F1280",
          }}
          label="Select group"
          data={group}
          onChangeText={value => setSelectedGroup(value)}
        />
      );
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter transaction name"
            onChangeText={text => onChangeText(text)}
            value={value}
            keyboardType="default"
          />
          <Dropdown
            containerStyle={styles.dropdownStyle}
            inputContainerStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "#3F1280",
            }}
            label="Select Type of Transaction"
            data={data}
            onChangeText={value => onTransactionTypeSelection(value)}
          />
          <View style={styles.dropdownViewStyle}>
            {showDropdown(transactionType)}
          </View>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Amount"
            onChangeText={text => setAmount(text)}
            value={amount}
            keyboardType="number-pad"
          />
          <View style={styles.calendar}>
      <DatePicker
        style={{width: 270,marginBottom:20
        
      }}
        date={transactionDate}
        mode="date"
        placeholder="Select Transaction date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: {
            width:'100%',
            borderBottomWidth:1,
            borderBottomColor:'#3F1280',
            borderWidth:0,
            alignItems:'flex-start'
          }
        }}
        onDateChange={(date) => {setTransactionDate(date)}}
      />
      </View>
          <TouchableOpacity
            onPress={() => submitTransaction()}
            style={styles.primary}
          >
            <Text style={{ textAlign: "center", color: "#ffffff" }}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  buttonContainer: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center"
  },
  primary: {
    padding: 15,
    width: "100%",
    backgroundColor: "#6200EE",
    marginBottom: 20,
    borderRadius: 5,
    marginTop:50
  },
  inputText: {
    height: 40,
    borderBottomColor: "#3F1280",
    borderBottomWidth: 1,
    width: "100%",
    borderRadius: 5,
    marginBottom: 20
  },
  dropdownStyle:{
    width: "100%",
    paddingTop: 0,
  },
  dropdownViewStyle:{
    width: "100%",
    paddingTop: 0,
    marginBottom:20
  }
});
