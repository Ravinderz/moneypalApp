import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const HeaderStrip = ({ title }) => {
  return (
    <View style={styles.strip}>
      <View style={styles.stripContainer}>
        <Icon name="navicon" style={styles.hamburger}></Icon>
        <Text style={styles.stripText}>{title}</Text>
        <Icon name="bell-o" style={styles.hamburger}></Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  strip: {
    backgroundColor: "#6200EE",
    marginTop: 24,
    padding: 10,
    width: "100%"
  },
  stripContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  stripText: {
    alignSelf: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#ffffff"
  },
  hamburger: {
    fontSize: 22,
    color: "#ffffff"
  }
});
