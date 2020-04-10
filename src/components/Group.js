import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const Group = ({ item }) => {
  const navigation = useNavigation();

  const deleteGroup = (id) => {
    console.log("deleting the group with id : "+id )
  }

  const showAlert = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this group',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => deleteGroup(id)},
      ],
      { cancelable: false }
    )
  }

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
        onPress={() => navigation.navigate('EditGroup',{group:item})}>
          <Text style={{ textAlign: "center", color: "#6100ED" }}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary} onPress= {() => showAlert(item.id)} >
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
