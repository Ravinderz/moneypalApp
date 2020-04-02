import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-datepicker';
import { TransactionList } from "../components/TransactionList";

export const Calendar = () => {  
  [fromDate,setFromDate] = useState("");
  [toDate,setToDate] = useState("");

  const search = () => {
    console.log("from date : "+fromDate , " to date : "+toDate);
  }

  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
      <DatePicker
        style={{width: 200}}
        date={fromDate}
        mode="date"
        placeholder="select From date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: {
            width:'50%'
          }
        }}
        onDateChange={(date) => {setFromDate(date)}}
      />
       <DatePicker
        style={{width: 200}}
        date={toDate}
        mode="date"
        placeholder="select To date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: {
            marginRight: 25,
            width:'50%'
          }
        }}
        onDateChange={(date) => {setToDate(date)}}
      />
      </View>
      <View style={styles.buttonContainer} >
      <TouchableOpacity
          onPress={() => search()}
          style={styles.primary}
        >
          <Text style={{textAlign:'center',color:'#ffffff'}}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  calendar: {
    flexDirection:"row",
    margin:10,
    width:'100%'
  },
  primary:{
    padding: 15,
    width:'40%',
    backgroundColor:'#6200EE',
    marginTop:20,
    borderRadius:5,
    alignItems:'center'
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:"center",
    width:'100%'
  }
});
