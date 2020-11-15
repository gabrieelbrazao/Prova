import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

import Item from "../../components/listItem";
import globalStyle from "../../global/style";
import localStyle from "./style";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item asd asdas asda sdas dasda sdas as das",
    date: "15/02/2021",
    finished: false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
    date: "23/02/2020",
    finished: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item",
    date: "17/05/2021",
    finished: false,
  },
];

export default ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
    });
  }, [navigation]);

  return (
    <View style={localStyle.mainView}>
      <View style={localStyle.nameView}>
        <Text style={globalStyle.secondaryText}>Olá, </Text>
        <Text style={localStyle.nameText}>Gabriel</Text>
      </View>

      <Text style={localStyle.title}>SUAS REUNIÕES</Text>

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
        <TouchableOpacity onPress={() => console.log("ok")}>
          <Avatar.Icon
            size={50}
            icon="exit-to-app"
            color="#2980b9"
            style={{
              backgroundColor: "transparent",
              transform: [{ scaleX: -1 }],
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("ok")}>
          <Avatar.Icon size={70} icon="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
