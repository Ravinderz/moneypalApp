import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderStrip } from "../components/HeaderStrip";
import { ProfileCard } from "../components/ProfileCard";

export const Profile = () => {
  const title = 'Profile';
  return (
    <View style={styles.container}>
      <HeaderStrip title={title}/>
      <ProfileCard />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.secondary}>
          <Text style={styles.btnText}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary}>
          <Text style={styles.btnText}>
            SETTINGS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary}>
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
    fontSize:14
  }
});
