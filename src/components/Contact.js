import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import * as actions from '../store/actions/contactActions';

export const Contact = ({ item, showRemoveBtn }) => {

  const dispatch = useDispatch();

  const removeMember = () => {
    console.log(item);
    console.log("removeMember");
    dispatch(actions.removeContact(item.id));
  }



  if (item.name !== "new") {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: "#ecf0f1",
        }}
      >
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.imgThumbnail}
              source={require("../assets/images/profile.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.primaryText}>{item.name}</Text>
            <Text style={styles.secondaryText}>
              {item.phoneNumbers ? item.phoneNumbers[0].number : "number"}
            </Text>
          </View>
        </View>
        {showRemoveBtn ? (
          <View style={styles.removeBtn}>
            <TouchableOpacity onPress={() => removeMember()}>
              <Text style={{color:'#fff',fontFamily:'Roboto',fontSize:16}}>Remove</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderBottomColor:'#dcdde1',
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  textContainer: {
    margin: 8,
  },
  primaryText: {
    fontFamily: "Roboto",
    fontSize: 16,
    paddingBottom: 5,
  },
  secondaryText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#989595",
  },
  imgThumbnail: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  imgContainer: { elevation: 2, backgroundColor: "black", borderRadius: 50 },
  removeBtn: { justifyContent: "center", padding:25, backgroundColor:'#c0392b'},
});
