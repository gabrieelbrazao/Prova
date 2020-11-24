import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import globalStyle from "../../global/style";
import localStyle from "./style";

export default ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      const { type } = event.data.action;
      if (type !== "REPLACE" && type !== "NAVIGATE") event.preventDefault();
    });
  }, [navigation]);

  return (
    <View style={localStyle.mainView}>
      <View style={{ flex: 1.5, width: "100%" }}>
        <LottieView
          source={require("../../assets/signUpSuccess.json")}
          autoPlay
          speed={0.3}
          loop={false}
          resizeMode="cover"
        />
      </View>

      <View
        style={{ flex: 1, width: "100%", alignItems: "center", marginTop: -40 }}
      >
        <Text style={globalStyle.title}>Tudo pronto!</Text>
        <Text style={{ ...globalStyle.secondaryText, textAlign: "center" }}>
          Sua reunião foi criada com sucesso, selecione uma opção abaixo para
          voltar.
        </Text>
      </View>

      <View style={localStyle.buttonView}>
        <Button
          icon="format-list-bulleted"
          mode="contained"
          contentStyle={localStyle.button}
          onPress={() => navigation.navigate("meetingList")}
          // onPress={() => navigation.navigate("meetingDetails")}
          style={{ marginBottom: 20 }}
        >
          DETALHES
        </Button>

        <Button
          icon="home"
          mode="outlined"
          contentStyle={localStyle.button}
          onPress={() => navigation.navigate("meetingList")}
        >
          VOLTAR
        </Button>
      </View>
    </View>
  );
};
