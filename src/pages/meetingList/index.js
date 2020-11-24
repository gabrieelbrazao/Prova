import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Avatar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import Item from "../../components/listItem";
import globalStyle from "../../global/style";
import api from "../../services/api";
import localStyle from "./style";

// const data = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     name: "First Item asd asdas asda sdas dasda sdas as das",
//     date: "15/02/2021",
//     finished: false,
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     name: "Second Item",
//     date: "23/02/2020",
//     finished: true,
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     name: "Third Item",
//     date: "17/05/2021",
//     finished: false,
//   },
// ];

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const { USERNAME, USERID, TOKEN } = useSelector((state) => state);
  const [data, setData] = useState([]);

  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      if (event.data.action.type !== "POP_TO_TOP") event.preventDefault();
    });
  }, [navigation]);

  useEffect(() => {
    api
      .get(`/api/reuniao/usuario/${USERID}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(({ data: dataUser }) => {
        setData(dataUser?.dados);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  const handleSignOut = () => {
    Alert.alert("Sair", "Deseja realmente sair do aplicativo?", [
      { text: "Cancelar" },
      {
        text: "OK",
        onPress: () => {
          dispatch({ type: "LOGOUT" });
          navigation.popToTop();
        },
      },
    ]);
  };

  return (
    <View style={localStyle.mainView}>
      <View style={localStyle.nameView}>
        <Text style={globalStyle.secondaryText}>Olá, </Text>
        <Text style={localStyle.nameText}>{USERNAME}</Text>
      </View>

      <Text style={localStyle.title}>SUAS REUNIÕES</Text>

      <ScrollView contentContainerStyle={localStyle.listView}>
        {data.length > 0 &&
          data.map((item) => (
            <Item item={{ ...item }} navigation={navigation} key={item.id} />
          ))}
      </ScrollView>

      <View style={localStyle.footer}>
        <TouchableOpacity onPress={() => handleSignOut()}>
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

        <TouchableOpacity onPress={() => navigation.navigate("newMeeting")}>
          <Avatar.Icon size={70} icon="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
