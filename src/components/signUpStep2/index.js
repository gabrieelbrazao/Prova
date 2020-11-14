import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { TextInput, Avatar } from "react-native-paper";

import localStyle from "./style";

export default ({ stepAnimation, navigation }) => {
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
        />
      </View>

      <View style={localStyle.confirmView}>
        <TouchableOpacity onPress={() => navigation.navigate("signUpSuccess")}>
          <Avatar.Icon size={70} icon="check" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
