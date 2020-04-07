import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Group } from "../components/Group";

const DATA = [
  {
    id: 1,
    title: "Our New Adda",
    description: "A group for the roomies",
    picture: "../assets/images/groupone.png"
  },
  {
    id: 2,
    title: "Office bunch",
    description: "Office gang",
    picture: "../assets/images/grouptwo.png"
  },
  {
    id: 3,
    title: "Tea time",
    description: "Tea time",
    picture: "../assets/images/groupthree.png"
  }
  
];

export const GroupList = ({navigation}) => {

  const title = 'Groups';

  const navigateToAddGroup =() => {
    console.log("navigate to add group");
    navigation.navigate('AddGroup');
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
      <TouchableOpacity
          onPress={() => navigateToAddGroup()}
          style={styles.secondary}
        >
          <Text style={{textAlign:'center',color:'#6100ED'}} >ADD GROUP</Text>
        </TouchableOpacity>
      </View>
      <View style={{height:"80%"}}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Group item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 25
  },
  secondary:{
    padding: 15,
    width:'100%',
    borderStyle:'solid',
    borderColor:'#3F1280',
    borderWidth:2,
    borderRadius:5
  },
  btnContainer:{
    margin:15
  }
});
