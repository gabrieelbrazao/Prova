import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
} from "react-native";
import { TextInput, Avatar } from "react-native-paper";
import { useDispatch } from "react-redux";
import validate from "validate.js";

import { useHeaderHeight } from "@react-navigation/stack";

import SignIn from "../../assets/signIn.svg";
import globalStyle from "../../global/style";
import api from "../../services/api";
import { constraintsSignIn } from "../../utils/validateConstraints";
import localStyle from "./style";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  const handleSignIn = async () => {
    const result = validate({ email, password }, constraintsSignIn, {
      fullMessages: false,
    });

    setErrors(result);

    if (result) {
      let msg = "";

      if (result.email) msg += `${result.email[0]}\n`;

      if (result.password) msg += `${result.password[0]}`;

      Alert.alert("Dados incorretos!", msg);
    } else {
      api
        .post("/auth", { email: "usuario01@gmail.com", senha: "12345678" })
        .then(({ data }) => {
          dispatch({
            type: "LOGIN",
            token: data.dados.token,
            userid: 1,
            username: "Usuario 01",
          });

          Keyboard.dismiss();
          navigation.navigate("meetingList");

          // api
          //   .get(`/api/usuario/${email}/senha/${password}`, {
          //     headers: {
          //       Authorization: `Bearer ${data.dados.token}`,
          //     },
          //   })
          //   .then(({ data: dataUser }) => {
          //     console.log(dataUser);
          //   })
          //   .catch(({ response }) => {
          //     console.log(response);
          //   });
        })
        .catch(({ response }) => {
          Alert.alert("Dados incorretos!", response.data.erros[0]);
        });
    }
  };

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
          error={errors?.email}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />

        <TextInput
          label="Senha"
          style={localStyle.input}
          mode="outlined"
          dense
          error={errors?.password}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={localStyle.confirmView}>
        <TouchableOpacity onPress={() => handleSignIn()}>
          <Avatar.Icon size={70} icon="check" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
