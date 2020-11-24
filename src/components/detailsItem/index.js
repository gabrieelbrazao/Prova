import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar, Switch } from "react-native-paper";

import localStyle from "./style";

export default ({ item, check }) => {
  return (
    <TouchableOpacity style={localStyle.mainView} onPress={() => check()}>
      <>
        <Text style={localStyle.meetingName}>{item.nome}</Text>

        <View style={localStyle.dateView}>
          <TouchableOpacity>
            <Avatar.Icon size={30} icon="close" />
          </TouchableOpacity>

          <Switch
            style={localStyle.switch}
            value={item.checks.includes(item.id)}
            onValueChange={() => check()}
            color="#2980b9"
          />
        </View>
      </>
    </TouchableOpacity>
  );
};
