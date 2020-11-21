import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import localStyle from "./style";

export default ({ stepFunction, stepAnimation, setProgress }) => {
  const handleChangeStep = () => {
    setProgress(1);
    stepFunction(stepAnimation);
  };

  return (
    <Animated.View
      style={{
        ...localStyle.mainView,
        transform: [{ translateX: stepAnimation }],
      }}
    >
      <View style={localStyle.inputView}>
        <Text style={localStyle.text}>Qual será o nome da reunião?</Text>
        <TextInput
          mode="outlined"
          dense
          style={localStyle.input}
          label="Nome"
          maxLength={45}
        />
      </View>

      <View style={localStyle.footer}>
        <TouchableOpacity onPress={() => handleChangeStep()}>
          <Avatar.Icon size={70} icon="arrow-right" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
