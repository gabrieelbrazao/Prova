import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Index from "../pages/index";

const Tab = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator headerMode="none" initialRouteName="index">
        <Tab.Screen name="index" component={Index} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
