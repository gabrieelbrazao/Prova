import React from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";

import { useHeaderHeight } from "@react-navigation/stack";

import Item from "../../components/detailsItem";
import localStyle from "./style";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First person",
    checked: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second person",
    checked: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third person",
    checked: true,
  },
];

export default () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      contentContainerStyle={{
        ...localStyle.mainView,
        paddingTop: headerHeight,
      }}
    >
      <TextInput style={localStyle.meetingName}>Nome da reunião</TextInput>

      <View style={localStyle.listView}>
        <View style={localStyle.list}>
          <FlatList
            data={data}
            renderItem={Item}
            keyExtractor={({ id }) => id}
          />
        </View>
      </View>

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
    </ScrollView>
  );
};
