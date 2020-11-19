import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";

import { useHeaderHeight } from "@react-navigation/stack";

import Item from "../../components/detailsItem";
import localStyle from "./style";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First person",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second person",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7k",
    name: "Third person",
  },
];

export default () => {
  const headerHeight = useHeaderHeight();
  const [checks, setChecks] = useState([]);

  return (
    <View
      style={{
        ...localStyle.mainView,
        paddingTop: headerHeight,
      }}
    >
      <TextInput style={localStyle.meetingName}>Nome da reunião</TextInput>

      <ScrollView contentContainerStyle={localStyle.listView}>
        {data.map((item) => {
          let newChecks = [];

          if (checks.includes(item.id)) {
            newChecks = checks.filter((value) => value !== item.id);
          } else {
            newChecks = [...checks, item.id];
          }

          return (
            <Item
              item={{ ...item, checks }}
              check={() => setChecks(newChecks)}
              key={item.id}
            />
          );
        })}
      </ScrollView>

      <View style={localStyle.footer}>
        <View style={localStyle.footerButtons}>
          <TouchableOpacity onPress={() => console.log("ok")}>
            <Avatar.Icon size={70} icon="plus" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("ok")}>
            <Avatar.Icon size={70} icon="check" />
          </TouchableOpacity>
        </View>

        <TextInput style={localStyle.dateText}>06/11/2020</TextInput>
      </View>
    </View>
  );
};
