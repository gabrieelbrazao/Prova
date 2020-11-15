import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import globalStyle from "../../global/style";
import localStyle from "./style";

export default ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
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
        <Text style={globalStyle.title}>Incrível!</Text>
        <Text style={{ ...globalStyle.secondaryText, textAlign: "center" }}>
          Sua conta foi criada com sucesso, pressione o botão abaixo para
          continuar.
        </Text>
      </View>

      <View style={localStyle.buttonView}>
        <Button
          icon="home"
          mode="contained"
          contentStyle={localStyle.button}
          onPress={() => navigation.navigate("meetingList")}
        >
          ENTRAR
        </Button>
      </View>
    </View>
  );
};
