import React from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const LoginStep2 = () => {
  const [value, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo_transparent.png")}
      />
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter phone number"
          onChangeText={text => onChangeText(text)}
          value={value}
          keyboardType='number-pad'
        />
        <TouchableOpacity
          onPress={() => Alert.alert("Simple Button pressed")}
          style={styles.primary}
        >
          <Text style={{ textAlign: "center", color: "#ffffff" }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 300,
    width: 300
  },
  buttonContainer: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center"
  },
  primary: {
    padding: 15,
    width: "100%",
    backgroundColor: "#6200EE",
    marginBottom: 20,
    borderRadius: 5
  },
  inputText: {
    height: 40,
    borderColor: "#3F1280",
    borderWidth: 1,
    width: "100%",
    borderRadius:5,
    marginBottom:20,
    paddingLeft:15
  }
});
