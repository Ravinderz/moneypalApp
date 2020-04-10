import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "react-native-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/groupActions";

export const Member = ({ item,groupData }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let userId = useSelector((state) => state.auth.userId);
  const addContact = async () => { 
    await dispatch(actions.storeGroup(groupData.title,groupData.desc,userId,groupData.members,groupData.image));
    navigation.navigate('AllContacts');
  }

  if (item.name === "new") {
    return (
      <View>
          <TouchableOpacity style={styles.iconContainer} onPress={() => addContact()}>
        <MaterialIcons name="add-circle" color="#03DAC6" size={55} />
        <Text style={{flexWrap: 'wrap'}}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.memberContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.memberThumbnail}
            source={require("../assets/images/profile.png")}
          />
        </View>
        <Text>{item.name}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  memberContainer: {
    margin: 8,
    alignItems: "center"
  },
  memberThumbnail: {
    height: 55,
    width: 55,
    borderRadius: 50
  },
  iconContainer: {
    margin: 8,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  imgContainer: { elevation: 2, backgroundColor: "black",borderRadius: 50 }
});
