import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";

import DateTimePicker from "@react-native-community/datetimepicker";
import { useHeaderHeight } from "@react-navigation/stack";

import Item from "../../components/detailsItem";
import Modal from "../../components/modal";
import api from "../../services/api";
import {
  getTimeFromDate,
  dateTimeToBrl,
  javaReturnToBrl,
} from "../../utils/timeLocale";
import localStyle from "./style";

// const data = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     name: "First person",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     name: "Second person",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d7k",
//     name: "Third person",
//   },
// ];

export default ({ navigation, route }) => {
  const { TOKEN } = useSelector((state) => state);
  const headerHeight = useHeaderHeight();
  const [checks, setChecks] = useState([]);
  const [visible, setVisible] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [mode, setMode] = useState("date");

  const changeDateTime = (dataChange) => {
    if (!dataChange) {
      setShow(false);
      setMode("date");
      return;
    }

    if (mode === "date") {
      setMode("time");

      setDateTime(dateTimeToBrl(dataChange));
    } else if (mode === "time") {
      setShow(false);

      const date = dateTime.split(" ")[0];

      setDateTime(`${date} ${getTimeFromDate(dataChange)}`);

      setMode("date");
    }
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      if (event.data.action.type !== "NAVIGATE") {
        event.preventDefault();
        navigation.navigate("meetingList");
      }
    });
  }, [navigation]);

  useEffect(() => {
    setMeetingName(route.params.item.nome);
    setDateTime(javaReturnToBrl(route.params.item.data));

    api
      .get(`/api/presenca/presenca/${route.params.item.id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(({ data: dataPresent }) => {
        console.log(dataPresent?.dados);

        // API não retorna nome do usuário, apenas seu id
        setData(
          dataPresent?.dados.map((item) => ({ ...item, nome: "Nome teste" }))
        );
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        ...localStyle.mainView,
        paddingTop: headerHeight,
      }}
    >
      <Modal
        visible={visible}
        hideModal={hideModal}
        meetingId={route.params.item.id}
        data={{ data, setData }}
      />

      <TextInput
        style={localStyle.meetingName}
        maxLength={45}
        value={meetingName}
        onChangeText={(text) => setMeetingName(text)}
      />

      <ScrollView contentContainerStyle={localStyle.listView}>
        {data.length > 0 &&
          data.map((item) => {
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
          <TouchableOpacity onPress={() => showModal()}>
            <Avatar.Icon size={70} icon="plus" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("meetingList")}>
            <Avatar.Icon size={70} icon="check" />
          </TouchableOpacity>
        </View>

        <TextInput
          style={localStyle.dateText}
          onFocus={() => setShow(true)}
          value={dateTime}
        />
      </View>

      {show && (
        <DateTimePicker
          value={new Date()}
          mode={mode}
          is24Hour
          display="default"
          minimumDate={new Date()}
          onChange={(event, dataChange) => changeDateTime(dataChange)}
        />
      )}
    </ScrollView>
  );
};
