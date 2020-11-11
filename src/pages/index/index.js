import React from "react";
import { Text, View } from "react-native";

import WelcomeImage from "../../assets/welcome.svg";
import globalStyle from "../../global/style";
import localStyle from "./style";

export default () => {
  return (
    <View style={localStyle.topView}>
      <WelcomeImage height={200} />

      <View style={localStyle.textsView}>
        <Text style={globalStyle.title}>Bem vindo!</Text>

        <Text style={globalStyle.secondaryText}>
          Escolha uma opção para continuar
        </Text>
      </View>
    </View>
  );
};
