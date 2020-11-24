import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { TextInput, Avatar } from "react-native-paper";

import localStyle from "./style";

export default ({ stepAnimation, validation }) => {
  return (
    <Animated.View
      style={{ transform: [{ translateX: stepAnimation }], width: "100%" }}
    >
      <View style={localStyle.inputsView}>
        <TextInput
          label="Senha"
          style={localStyle.input}
          mode="outlined"
          dense
          secureTextEntry
          error={validation.errors?.password}
          value={validation.password}
          onChangeText={(text) => validation.setPassword(text)}
        />
      </View>

      <View style={localStyle.confirmView}>
        <TouchableOpacity onPress={() => validation.handleSignUp()}>
          <Avatar.Icon size={70} icon="check" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
