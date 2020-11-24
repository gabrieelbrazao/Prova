import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import DateTimePicker from "@react-native-community/datetimepicker";

import {
  getTimeFromDate,
  dateTimeToBrl,
  isFutureDate,
} from "../../utils/timeLocale";
import localStyle from "./style";

export default ({ stepAnimation, navigation }) => {
  const [show, setShow] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [mode, setMode] = useState("date");
  const [errors, setErrors] = useState();

  const handleChangeDateTime = (data) => {
    if (!data) {
      setShow(false);
      setMode("date");
      return;
    }

    if (mode === "date") {
      setMode("time");
      setDateTime(dateTimeToBrl(data));
    } else if (mode === "time") {
      setShow(false);
      setDateTime(`${dateTime.split(" ")[0]} ${getTimeFromDate(data)}`);
      setMode("date");
    }
  };

  const handleCreateMeeting = () => {
    let result;

    if (!dateTime) {
      result = { dateTime: ["Data não pode ser vazia."] };
    } else if (!isFutureDate(dateTime)) {
      result = { dateTime: ["Data deve ser futura à data atual."] };
    }

    setErrors(result);

    if (result) {
      const msg = `${result.dateTime[0]}`;

      Alert.alert("Dados incorretos!", msg);
    } else {
      navigation.navigate("newMeetingSuccess");
    }
  };

  return (
    <Animated.View
      style={{
        ...localStyle.mainView,
        transform: [{ translateX: stepAnimation }],
      }}
    >
      {show && (
        <DateTimePicker
          value={new Date()}
          mode={mode}
          is24Hour
          display="default"
          minimumDate={new Date()}
          onChange={(event, data) => handleChangeDateTime(data)}
        />
      )}

      <View style={localStyle.inputView}>
        <Text style={localStyle.text}>Qual será a data da reunião?</Text>

        <TextInput
          mode="outlined"
          dense
          style={localStyle.input}
          label="Data"
          onFocus={() => setShow(true)}
          value={dateTime}
          error={errors}
        />
      </View>

      <View style={localStyle.footer}>
        <TouchableOpacity onPress={() => handleCreateMeeting()}>
          <Avatar.Icon size={70} icon="check" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
