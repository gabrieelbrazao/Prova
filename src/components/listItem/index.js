import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";

import localStyle from "./style";

export default ({ item }) => {
  return (
    <TouchableOpacity
      style={localStyle.mainView}
      onPress={() => console.log("ok")}
    >
      <>
        <Text style={localStyle.meetingName}>{item.name}</Text>

        <View style={localStyle.dateView}>
          <Text style={localStyle.dateText}>{item.date}</Text>

          {item.finished ? (
            <Avatar.Icon size={30} icon="check" />
          ) : (
            <Avatar.Icon size={30} icon="close" />
          )}
        </View>
      </>
    </TouchableOpacity>
  );
};
