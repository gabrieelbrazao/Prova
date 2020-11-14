import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { TextInput, Avatar } from "react-native-paper";

import { useHeaderHeight } from "@react-navigation/stack";

import SignIn from "../../assets/signIn.svg";
import globalStyle from "../../global/style";
import localStyle from "./style";

export default () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        ...localStyle.mainView,
        paddingTop: headerHeight,
      }}
    >
      <SignIn height={180} />

      <View style={localStyle.textsView}>
        <Text style={globalStyle.title}>Entrar</Text>
        <Text style={globalStyle.secondaryText}>
          Por favor, preencha os dados abaixo.
        </Text>
      </View>

      <View style={localStyle.inputsView}>
        <TextInput
          label="E-mail"
          style={{ ...localStyle.input, marginBottom: 30 }}
          mode="outlined"
          dense
          keyboardType="email-address"
        />
        <TextInput
          label="Senha"
          style={localStyle.input}
          mode="outlined"
          dense
          secureTextEntry
        />
      </View>

      <View style={localStyle.confirmView}>
        <TouchableOpacity>
          <Avatar.Icon size={70} icon="check" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
