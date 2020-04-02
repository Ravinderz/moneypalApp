import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderStrip } from "../components/HeaderStrip";
import { Member } from "../components/Member";

const title = "EditGroup";

const DATA = [
  {
    id: 1,
    name: "Bharath",
    picture: "../assets/images/groupone.png"
  },
  {
    id: 2,
    name: "Amit",
    picture: "../assets/images/grouptwo.png"
  },
  {
    id: 3,
    name: "Ibrahim",
    picture: "../assets/images/groupthree.png"
  },
  {
    id: 4,
    name: "new",
    picture: "../assets/images/groupthree.png"
  }
  
];

export const EditGroup = () => {
  return (
    <View>
      <HeaderStrip title={title} />
      <View style={styles.container}>
        <Image
          style={styles.groupImg}
          source={require("../assets/images/group_img.png")}
        />
        <View style={styles.textContainer}>        
        <Text style={styles.name}>Our New Adda</Text>
        <Text style={styles.tags}>Roomies . Friends . Group</Text>
        <Text style={styles.desc}>Group for roommates expenses</Text>
        </View>
        <View style={styles.MembersContainer}>
          <Text style={styles.heading}>Members</Text>
        <View style={styles.memberContentContainer}>
          <FlatList
          data={DATA}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}
          renderItem={({ item }) => <Member item={item} />}
          keyExtractor={item => item.id}
        />
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 5,
    borderRadius: 5,
    elevation: 5,
    height:'88%'
  },
  groupImg: {
    height:194,
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontFamily: "Roboto",
    marginTop:10,
    marginBottom:5
  },
  tags:{
    fontSize: 14,
    fontFamily: "Roboto",
    marginBottom:25,
    color:'#D35400'
  },
  desc: {
    fontSize: 16,
    fontFamily: "Roboto",
    marginBottom: 25
  },
  textContainer:{
    marginLeft: 24,
    
  },
  MembersContainer:{
    marginLeft: 24,
  },
  heading:{
    fontSize: 18,
    fontFamily: "Roboto",
    marginBottom:16,
  },
  memberContentContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
