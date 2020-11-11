import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Index from "../pages/index";
import SignIn from "../pages/signIn";

const Tab = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="index">
        <Tab.Screen
          name="index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="signIn"
          component={SignIn}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
