import * as ImagePicker from "expo-image-picker";
import * as Permissions from 'expo-permissions';
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "react-native-vector-icons";
import { useDispatch } from "react-redux";
import { Member } from "../components/Member";

const title = "EditGroup";

const DATA = [
  {
    id: 4,
    name: "new",
    picture: "../assets/images/groupthree.png",
  },
];

export const AddGroup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [image, setImage] = React.useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    })();
  }, []);

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => pickImage()}>
        {image ? (
          <Image style={styles.groupImg} source={{ uri: image }} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <MaterialIcons name="add-circle" color="grey" size={55} />
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Group title"
          onChangeText={(text) => setTitle(text)}
          value={title}
          keyboardType="default"
        />
        <Text style={styles.tags}>Roomies . Friends . Group</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Group Description"
          onChangeText={(text) => setDesc(text)}
          value={desc}
          keyboardType="default"
        />
      </View>
      <View style={styles.MembersContainer}>
        <Text style={styles.heading}>Members</Text>
        <View style={styles.memberContentContainer}>
          <FlatList
            data={DATA}
            contentContainerStyle={{
              flexDirection: "row",
            }}
            renderItem={({ item }) => <Member item={item} />}
            keyExtractor={(item) => item.id}
          />
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
    height: "100%",
    width: "98%",
  },
  groupImg: {
    height: 194,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tags: {
    fontSize: 14,
    fontFamily: "Roboto",
    marginBottom: 25,
    color: "#D35400",
  },
  inputContainer: {
    margin: 10,
    width: "95%",
  },
  MembersContainer: {
    marginLeft: 10,
    width: "95%",
  },
  heading: {
    fontSize: 18,
    fontFamily: "Roboto",
    marginBottom: 16,
  },
  memberContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    height: 40,
    borderBottomColor: "#3F1280",
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  imagePlaceholder: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
