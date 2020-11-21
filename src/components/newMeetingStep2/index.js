import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import DateTimePicker from "@react-native-community/datetimepicker";

import { getTimeFromDate, dateTimeToBrl } from "../../utils/timeLocale";
import localStyle from "./style";

export default ({ stepAnimation, navigation }) => {
  const [show, setShow] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [mode, setMode] = useState("date");

  const changeDateTime = (data) => {
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
          onChange={(event, data) => changeDateTime(data)}
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
