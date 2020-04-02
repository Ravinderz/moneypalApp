import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProfileCard } from "../components/ProfileCard";

export const Profile = () => {
  const navigation = useNavigation();

  const logout = () => {
    console.log("logout pressed");

    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View style={styles.container}>
      <ProfileCard />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.secondary}>
          <Text style={styles.btnText}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary}>
          <Text style={styles.btnText}>SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary} onPress={() => logout()}>
          <Text style={styles.btnText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  secondary: {
    padding: 15
  },
  btnText: {
    textAlign: "center",
    color: "#6100ED",
    fontSize: 14
  }
});
