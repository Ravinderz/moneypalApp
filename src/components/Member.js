import { useNavigation } from "@react-navigation/native";
import * as Contacts from "expo-contacts";
import * as Permissions from 'expo-permissions';
import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "react-native-vector-icons";

export const Member = ({ item }) => {
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
     
      const { Contactstatus } = await Permissions.askAsync(Permissions.CONTACTS);
      if (Contactstatus !== "granted") {
        Alert.alert(
          "Sorry, we need contacts permissions to make this work!"
        );
      }
    })();
  }, []);

  const addContact = async () => {
    console.log("inside add contact")
    const { data } = await Contacts.getContactsAsync();
    console.log(data);
    if (data.length > 0) {
      const contact = data[0];
      console.log(contact);
    }
  }

  if (item.name === "new") {
    return (
      <View>
          <TouchableOpacity style={styles.iconContainer} onPress={() => addContact()}>
        <MaterialIcons name="add-circle" color="#03DAC6" size={55} />
        <Text>Add</Text>
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
