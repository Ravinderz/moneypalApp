import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const Group = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
      <View style={styles.groupImage}>
        <Image
          style={styles.groupThumbnail}
          source={require("../assets/images/groupone.png")}
        />
      </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.secondary}
        onPress={() => navigation.navigate('EditGroup')}>
          <Text style={{ textAlign: "center", color: "#6100ED" }}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary}>
          <Text style={{ textAlign: "center", color: "#6100ED" }}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:5,
    padding: 10,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 5
  },
  title: {
    fontSize: 18
  },
  desc: {
    fontSize: 14,
    color:'#989595'
  },
 contentContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
 },
 buttonContainer:{
    flexDirection:"row"
 },
  secondary: {
    padding: 15,
  },
  groupThumbnail: {
    height: 55,
    width: 55
  }
});
