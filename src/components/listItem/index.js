import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";

import { javaReturnToBrl } from "../../utils/timeLocale";
import localStyle from "./style";

export default ({ item, navigation }) => {
  console.log(item.data);

  return (
    <TouchableOpacity
      style={localStyle.mainView}
      onPress={() => navigation.navigate("meetingDetails", { item })}
    >
      <>
        <Text style={localStyle.meetingName}>{item.nome}</Text>

        <View style={localStyle.dateView}>
          <Text style={localStyle.dateText}>{javaReturnToBrl(item.data)}</Text>

          {item.finalizado === "1" ? (
            <Avatar.Icon size={30} icon="check" />
          ) : (
            <Avatar.Icon size={30} icon="close" />
          )}
        </View>
      </>
    </TouchableOpacity>
  );
};
