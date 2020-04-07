import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

export const HeaderStrip = ({ title, showBackBtn,rightBtn }) => {
  const displayBtn = () => {
    if (showBackBtn === "true") {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back"
            style={styles.goBack}
          ></MaterialIcons>
        </TouchableOpacity>
      );
    } else {
      return (
        <MaterialIcons name="arrow-back" style={styles.dummy}></MaterialIcons>
      );
    }
  };

   const navigation = useNavigation();

  return (
    <View style={styles.strip}>
      <View style={styles.stripContainer}>
        {displayBtn()}
        <Text style={styles.stripText}>{title}</Text>
        {rightBtn === 'check' ? <TouchableOpacity onPress={() => console.log('add group')}>
         <Icon name="check" style={styles.goBack}></Icon>
       </TouchableOpacity> :  <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon name="bell-o" style={styles.goBack}></Icon>
        </TouchableOpacity>
         }
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
  goBack: {
    fontSize: 22,
    color: "#ffffff"
  },
  dummy: {
    fontSize: 22,
    color: "rgba(0, 0, 0, 0.0)"
  }
});
