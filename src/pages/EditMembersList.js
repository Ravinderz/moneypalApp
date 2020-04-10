import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../components/Contact";

export const EditMembers = ({ route, navigation }) => {
  
  const [member, setMember] = useState();
  const [allMembersList, setAllMembersList] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let storedContacts = useSelector(state => state.contact);


  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log("inside use effect")
      if (storedContacts.length > 0) {
        setAllMembersList(storedContacts);
        setFilteredMembers(storedContacts);
      }

      console.log(filteredMembers);
      setIsLoaded(true);
    })();
  }, [allMembersList,filteredMembers]);

   const filterMembers = (text) => {
    setFilteredMembers(
      allMembersList.filter(
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
                placeholder="Search Members"
                onChangeText={(text) => filterMembers(text)}
                value={member}
                keyboardType="default"
              />
            </View>

            <View style={styles.contactContainer}>
              <FlatList
                data={filteredMembers}
                renderItem={({ item }) => 
                  <Contact item={item} showRemoveBtn={true}/>
                }
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
