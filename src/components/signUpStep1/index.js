import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { TextInput, Avatar } from "react-native-paper";

import localStyle from "./style";

export default ({ stepFunction, stepAnimation, validation }) => {
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
          error={validation.errors?.name}
          value={validation.name}
          onChangeText={(text) => validation.setName(text)}
        />
        <TextInput
          label="E-mail"
          style={localStyle.input}
          mode="outlined"
          dense
          keyboardType="email-address"
          error={validation.errors?.email}
          value={validation.email}
          onChangeText={(text) => validation.setEmail(text)}
          autoCapitalize="none"
        />
      </View>

      <View style={localStyle.confirmView}>
        <TouchableOpacity onPress={() => stepFunction(stepAnimation)}>
          <Avatar.Icon size={70} icon="arrow-right" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
