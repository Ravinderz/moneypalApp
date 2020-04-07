import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "react-native-vector-icons";
import { AddTransaction } from "../pages/AddTransaction";
import { Calendar } from "../pages/Calendar";
import { Dashboard } from "../pages/Dashboard";
import { EditGroup } from "../pages/EditGroup";
import { GroupList } from "../pages/GroupList";
import { Login } from "../pages/Login";
import { LoginEmail } from "../pages/LoginEmail";
import { LoginStep2 } from "../pages/LoginStep2";
import { Notifications } from "../pages/Notifications";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { HeaderStrip } from "./HeaderStrip";
//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const DashboardStack = createStackNavigator();
const DashboardTitle = "Dashboard";
const NotificationTitle = "Notifications";

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={DashboardTitle}
              showBackBtn={"false"}
            />
          ),
        }}
      />
      <DashboardStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={NotificationTitle}
              showBackBtn={"true"}
            />
          ),
        }}
      />
    </DashboardStack.Navigator>
  );
}

const GroupStack = createStackNavigator();
const groupTitle = "Groups";
const editGroupTitle = "EditGroups";
function GroupStackScreen() {
  return (
    <GroupStack.Navigator>
      <GroupStack.Screen
        name="Group"
        component={GroupList}
        options={{
          header: (props) => (
            <HeaderStrip {...props} title={groupTitle} showBackBtn={"false"} />
          ),
        }}
      />
      <GroupStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={NotificationTitle}
              showBackBtn={"true"}
            />
          ),
        }}
      />
      <GroupStack.Screen
        name="EditGroup"
        component={EditGroup}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={editGroupTitle}
              showBackBtn={"true"}
            />
          ),
        }}
      />
    </GroupStack.Navigator>
  );
}

const TransactionStack = createStackNavigator();
const transactionTitle = "Add Transaction";
function TransactionStackScreen() {
  return (
    <TransactionStack.Navigator>
      <TransactionStack.Screen
        name="Add Transaction"
        component={AddTransaction}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={transactionTitle}
              showBackBtn={"false"}
            />
          ),
        }}
      />
      <TransactionStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={NotificationTitle}
              showBackBtn={"true"}
            />
          ),
        }}
      />
    </TransactionStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();
const calendarTitle = "Calendar";
function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={calendarTitle}
              showBackBtn={"false"}
            />
          ),
        }}
      />
      <CalendarStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={NotificationTitle}
              showBackBtn={"true"}
            />
          ),
        }}
      />
    </CalendarStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
const profileTitle = "Profile";
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={profileTitle}
              showBackBtn={"false"}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: (props) => (
            <HeaderStrip
              {...props}
              title={NotificationTitle}
              showBackBtn={"true"}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#6200EE" }}
      tabBarOptions={{
        activeTintColor: "#e91e63",
        inactiveTintColor: "#B180F6",
        activeTintColor: "#fff",
        style: {
          backgroundColor: "#6200EE",
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        children={DashboardStackScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        children={GroupStackScreen}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddTransaction"
        children={TransactionStackScreen}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle" color="#03DAC6" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        children={CalendarStackScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        children={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

export const RootNav = () => {
  return (
    <RootStack.Navigator initialRouteName="Login" headerMode="none">
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="LoginEmail"
        component={LoginEmail}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="OTP"
        component={LoginStep2}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="Dashboard" component={Tabs} />
    </RootStack.Navigator>
  );
};
