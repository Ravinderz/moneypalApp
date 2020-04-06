import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

export const LoginStep2 = () => {
  const [value, onChangeText] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [showBtn, setShowBtn] = React.useState(false);
  const navigation = useNavigation();
  const navigateToDashboard = () => {
    if(!otp || otp.length < 6 ){
      return;
    }
    navigation.replace("Dashboard");
  };

  
  const showSubmitBtn = () => {
    console.log(value);
    if(!value || value.length < 10){
      return;
    }
    setShowBtn(true);
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  }

  const AddSubmit = () => {
    console.log(showBtn);
    if (showBtn) {
      return (
        <View>
          <TextInput
            style={styles.OTP}
            placeholder="OTP"
            onChangeText={text => setOtp(text)}
            value={otp}
            maxLength={6}
            keyboardType="number-pad"
          />
          <View style={{width:155}}>
          <TouchableOpacity
            onPress={() => navigateToDashboard()}
            style={styles.submit}
          >
            <Text
              style={{ textAlign: "center", color: "#ffffff", fontSize: 18 }}
            >
              SUBMIT
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const showPhoneField = () => {

    if(!showBtn){
    return(
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Text style={styles.numberStart}>+91 -</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter phone number"
            onChangeText={text => onChangeText(text)}
            value={value}
            maxLength={10}
            keyboardType="number-pad"
          />
          <TouchableOpacity onPress={() => showSubmitBtn()} style={styles.done}>
            <MaterialIcons name="done" size={26} color={"#fff"} />
          </TouchableOpacity>        
        </View>
    );
        }else{
          return(
            <>
            </>
          );
        }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo_transparent.png")}
      />
      <View style={styles.buttonContainer}>
        {showPhoneField()}
        {AddSubmit()}
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
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
  submit:{
    padding: 15,
    width: "100%",
    backgroundColor: "#6200EE",
    marginBottom: 20,
    borderRadius: 5,
  },
  inputText: {
    height: 40,
    borderBottomColor: "#3F1280",
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 18,
    letterSpacing:3
  },
  OTP:{
    height: 40,
    borderBottomColor: "#3F1280",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 18,
    letterSpacing:15
  },
  numberStart: {
    marginTop: 8,
    fontSize: 18
  },
  done: {
    marginTop: 8,
    fontSize: 18,
    width: 40,
    height: 40,
    backgroundColor: "#6200EE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  loginText: {
    color: "#c0392b",
    marginLeft:5,
  }
});
