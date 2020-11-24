import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import WelcomeImage from "../../assets/welcome.svg";
import globalStyle from "../../global/style";
import localStyle from "./style";

export default ({ navigation }) => {
  return (
    <>
      <View style={localStyle.topView}>
        <WelcomeImage height={200} />

        <View style={localStyle.textsView}>
          <Text style={globalStyle.title}>Bem vindo!</Text>

          <Text style={globalStyle.secondaryText}>
            Escolha uma opção para continuar
          </Text>
        </View>
      </View>

      <View style={localStyle.bottomView}>
        <TouchableOpacity onPress={() => navigation.navigate("signIn")}>
          <Text style={localStyle.optText}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={localStyle.orView}>
          <Text style={localStyle.orText}>OU</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
          <Text style={localStyle.optText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
