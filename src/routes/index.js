import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Index from "../pages/index";
import MeetingDetails from "../pages/meetingDetails";
import MeetingList from "../pages/meetingList";
import NewMeeting from "../pages/newMeeting";
import NewMeetingSuccess from "../pages/newMeetingSuccess";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import SignUpSuccess from "../pages/signUpSuccess";

const Tab = createStackNavigator();

const headerConfig = {
  title: "",
  headerTransparent: true,
};

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="meetingDetails">
        <Tab.Screen
          name="index"
          component={Index}
          options={{ headerShown: false }}
        />

        <Tab.Screen name="signIn" component={SignIn} options={headerConfig} />

        <Tab.Screen name="signUp" component={SignUp} options={headerConfig} />

        <Tab.Screen
          name="signUpSuccess"
          component={SignUpSuccess}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="meetingList"
          component={MeetingList}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="meetingDetails"
          component={MeetingDetails}
          options={headerConfig}
        />

        <Tab.Screen
          name="newMeeting"
          component={NewMeeting}
          options={headerConfig}
        />

        <Tab.Screen
          name="newMeetingSuccess"
          component={NewMeetingSuccess}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
