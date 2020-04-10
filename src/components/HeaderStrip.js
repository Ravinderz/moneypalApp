import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, AsyncStorage, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { db } from '../dbConfig';
import * as contactActions from '../store/actions/contactActions';
import * as actions from '../store/actions/groupActions';

export const HeaderStrip = ({ title, showBackBtn,rightBtn }) => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

   const storedGroup = useSelector(state => state.groups.group);

  const saveGroup = async () => {
     // let storedGroup;

     let userData = await AsyncStorage.getItem('userData');
     let parsedData = JSON.parse(userData);

      if(storedGroup && storedGroup.title && storedGroup.desc){
        console.log('saving group ');

        db.ref(`/groups/${parsedData.userId}`).push({
          title: storedGroup.title,
          desc:storedGroup.desc,
          image:storedGroup.image,
          members:storedGroup.members
        });        
        // dispatch action to clear contacts
        Alert.alert('Action!', 'group has been added successfully');
        navigation.navigate('Group')
        dispatch(actions.clearGroup());
        dispatch(contactActions.clearContacts());
      }else{
        Alert.alert('Action!', 'Not enough data to save group');
        console.log('Not enough data to save group');
        return;
      }
  }

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

  return (
    <View style={styles.strip}>
      <View style={styles.stripContainer}>
        {displayBtn()}
        <Text style={styles.stripText}>{title}</Text>
        {rightBtn === 'check' ? <TouchableOpacity onPress={() => saveGroup()}>
         <MaterialIcons
            name="done"
            style={styles.goBack}
          ></MaterialIcons>
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
