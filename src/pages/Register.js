import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/authActions';


export const Register = () => {
  const [name, onChangeText] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const navigateToOTP = async () => {
    setIsLoading(true);
    await dispatch(actions.signup(email,password));
    setIsLoading(false);
    navigation.navigate("Dashboard");
  };

  const navigateToLogin = () => {
    navigation.navigate("OTP");
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
          placeholder="Enter Name"
          onChangeText={text => onChangeText(text)}
          value={name}
          keyboardType="default"
        />
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
        :<TouchableOpacity
          onPress={() => navigateToOTP()}
          style={styles.primary}
        >
          <Text style={{ textAlign: "center", color: "#ffffff" }}>
            REGISTER
          </Text>
      </TouchableOpacity> }
        <View style={{flexDirection:'row'}}>
        <Text>
          Already a member ?
          </Text>
          <TouchableOpacity
            onPress={() => navigateToLogin()}
            style={styles.lineTextBtn}
          >
            <Text style={styles.loginText}>Login</Text>
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
