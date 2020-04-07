import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/authActions';


export const LoginEmail = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const navigateToDashboard = async () => {
    setIsLoading(true);
    await dispatch(actions.signin(email,password));
    setIsLoading(false);
    navigation.navigate("Dashboard");
  };

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo_transparent.png")}
      />
      <View style={styles.buttonContainer}>
               <TextInput
          style={styles.inputText}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="default"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          value={password}
          keyboardType="default"
        />
        {/* <TextInput
          style={styles.inputText}
          placeholder="Enter phone number"
          onChangeText={text => setPhone(text)}
          value={phone}
          keyboardType="number-pad"
        /> */}
        {isLoading ? <ActivityIndicator size="large"/>
        :
        <TouchableOpacity
          onPress={() => navigateToDashboard()}
          style={styles.primary}
        >
          <Text style={{ textAlign: "center", color: "#ffffff" }}>
            LOGIN
          </Text>
        </TouchableOpacity>}
        <View style={{flexDirection:'row'}}>
        <Text>
          Not a member ?
          </Text>
          <TouchableOpacity
            onPress={() => navigateToRegister()}
            style={styles.lineTextBtn}
          >
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
    borderBottomColor: "#3F1280",
    borderBottomWidth: 1,
    width: "100%",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 15
  },
  loginText: {
    color: "#c0392b",
    marginLeft:5,
  }
});
