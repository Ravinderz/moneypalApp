import * as Contacts from "expo-contacts";
import * as Permissions from "expo-permissions";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Contact } from "../components/Contact";
import * as actions from "../store/actions/contactActions";

export const AllContacts = ({ route, navigation }) => {
  const [contact, setContact] = useState();
  const [allContactsList, setAllContactsList] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { Contactstatus } = await Permissions.askAsync(
        Permissions.CONTACTS
      );
      if (Contactstatus !== "granted") {
        Alert.alert("Sorry, we need contacts permissions to make this work!");
      }

      const { data } = await Contacts.getContactsAsync();
      if (data.length > 0) {
        setAllContactsList(data);
        setFilteredContacts(data);
      }
      setIsLoaded(true);
    })();
  }, []);

  const addContact = async (item) => {
    await dispatch(actions.addContact(item.lookupKey, item.name,"",item.phoneNumbers));
    navigation.navigate("AddGroup");
  };

  const filterContacts = (text) => {
    setFilteredContacts(
      allContactsList.filter(
        (c) => c.name.toLowerCase().indexOf(text.toLowerCase()) > -1
      )
    );
  };

  return (
    <View>
      {!isLoaded ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Search Contact"
                onChangeText={(text) => filterContacts(text)}
                value={contact}
                keyboardType="default"
              />
            </View>

            <View style={styles.contactContainer}>
              <FlatList
                data={filteredContacts}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => addContact(item)}>
                    <Contact item={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 5,
    borderRadius: 5,
    elevation: 5,
    height: "100%",
  },
  contactContainer: {
    height: "95%",
  },
  heading: {
    fontSize: 18,
    fontFamily: "Roboto",
    marginBottom: 16,
  },
  inputContainer: {
    margin: 10,
    width: "95%",
  },
  inputText: {
    height: 40,
    borderBottomColor: "#3F1280",
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});
