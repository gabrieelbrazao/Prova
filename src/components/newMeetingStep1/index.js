import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import validate from "validate.js";

import { constraintsNewMeetingStep1 } from "../../utils/validateConstraints";
import localStyle from "./style";

export default ({ stepFunction, stepAnimation, setProgress }) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState();

  const handleChangeStep = () => {
    const result = validate({ name }, constraintsNewMeetingStep1, {
      fullMessages: false,
    });

    setErrors(result);

    if (result) {
      const msg = `${result.name[0]}`;

      Alert.alert("Dados incorretos!", msg);
    } else {
      setProgress(1);
      stepFunction(stepAnimation);
    }
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
          error={errors?.name}
          value={name}
          onChangeText={(text) => setName(text)}
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
