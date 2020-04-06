import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Notification } from "../components/Notification";

export const Notifications = () => {

  const data = useSelector(state => state.notifications.notifications);

  return (
    <View style={styles.container}>    
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Notification item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 10,
    width: "100%",
    marginBottom: 25
  },
  textStyle: {
    fontSize: 18
  }
});
