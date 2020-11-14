import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { TextInput, Avatar } from "react-native-paper";

import localStyle from "./style";

export default ({ stepFunction, stepAnimation }) => {
  return (
    <Animated.View
      style={{ transform: [{ translateX: stepAnimation }], width: "100%" }}
    >
      <View style={localStyle.inputsView}>
        <TextInput
          label="Nome"
          style={{ ...localStyle.input, marginBottom: 30 }}
          mode="outlined"
          dense
        />
        <TextInput
          label="E-mail"
          style={localStyle.input}
          mode="outlined"
          dense
          keyboardType="email-address"
        />
      </View>

      <View style={localStyle.confirmView}>
        <TouchableOpacity onPress={() => stepFunction()}>
          <Avatar.Icon size={70} icon="arrow-right" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
