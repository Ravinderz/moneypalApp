import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
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

export const GroupList = () => {

  const title = 'Groups';

  return (
    <View style={styles.container}>
        
      <View style={{marginTop:10}}>
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
  }
});
