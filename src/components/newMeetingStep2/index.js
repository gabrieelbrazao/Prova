import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import localStyle from "./style";

export default ({ stepAnimation, navigation }) => {
  return (
    <Animated.View
      style={{
        ...localStyle.mainView,
        transform: [{ translateX: stepAnimation }],
      }}
    >
      <View style={localStyle.inputView}>
        <Text style={localStyle.text}>Qual será a data da reunião?</Text>
        <TextInput
          mode="outlined"
          dense
          style={localStyle.input}
          label="Data"
        />
      </View>

      <View style={localStyle.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("newMeetingSuccess")}
        >
          <Avatar.Icon size={70} icon="check" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
