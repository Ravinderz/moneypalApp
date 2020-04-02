import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';
import { AddTransaction } from "../pages/AddTransaction";
import { Calendar } from "../pages/Calendar";
import { Dashboard } from "../pages/Dashboard";
import { EditGroup } from "../pages/EditGroup";
import { GroupList } from "../pages/GroupList";
import { Profile } from "../pages/Profile";
import { HeaderStrip } from "./HeaderStrip";
const Tab = createMaterialBottomTabNavigator();

const GroupStack = createStackNavigator();
const groupTitle = "Groups";
const editGroupTitle = "EditGroups";
function GroupStackScreen() {
  return (
    <GroupStack.Navigator  >
      <GroupStack.Screen name="Group" component={GroupList} 
      options={{ header: props => <HeaderStrip {...props} title={groupTitle} showBackBtn={"false"}/> }}/>
      <GroupStack.Screen name="EditGroup" component={EditGroup} 
      options={{ header: props => <HeaderStrip {...props} title={editGroupTitle} showBackBtn={"true"}/> }}/>
    </GroupStack.Navigator>
  );
}


export const Tabs = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#ffffff"
      inactiveColor="#B180F6"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#6200EE' }}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} 
         options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="dashboard" color={color} size={26} />
            ),
          }}/>
        <Tab.Screen name="Groups" children={GroupStackScreen} 
        options={{
            tabBarLabel: 'Groups',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
          }}/>
           <Tab.Screen name="AddTransaction" component={AddTransaction} 
        options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="add-circle" color="#03DAC6" size={26}/>
            ),

          }}/>
          <Tab.Screen name="Calendar" component={Calendar} 
        options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}/>
          <Tab.Screen name="Profile" component={Profile} 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
