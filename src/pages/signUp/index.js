import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Animated,
  Alert,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import validate from "validate.js";

import { useHeaderHeight } from "@react-navigation/stack";

import SignUp from "../../assets/signUp.svg";
import SignUpStep1 from "../../components/signUpStep1";
import SignUpStep2 from "../../components/signUpStep2";
import globalStyle from "../../global/style";
import api from "../../services/api";
import changeStep from "../../utils/handleChangeStep";
import {
  constraintsSignUpStep1,
  constraintsSignUpStep2,
} from "../../utils/validateConstraints";
import localStyle from "./style";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();
  const stepsAnimation = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  const handleSignUp = async () => {
    const result = validate({ password }, constraintsSignUpStep2, {
      fullMessages: false,
    });

    setErrors(result);

    if (result) {
      const msg = `${result.password[0]}`;

      Alert.alert("Dados incorretos!", msg);
    } else {
      const { data } = await api
        .post("/api/usuario", {
          email,
          nome: name,
          ativo: 1,
          senha: password,
        })
        .catch(({ response }) => {
          console.log(response);
        });

      // API salvando senha errada
      const { data: dataAuth } = await api
        .post("/auth", {
          email: "usuario01@gmail.com",
          senha: "12345678",
        })
        .catch(({ response }) => {
          console.log(response);
        });

      dispatch({
        type: "LOGIN",
        token: dataAuth.dados.token,
        userid: 1,
        username: "Usuario 01",
      });

      Keyboard.dismiss();
      navigation.navigate("signUpSuccess");
    }
  };

  const handleChangeStep = () => {
    const result = validate({ name, email }, constraintsSignUpStep1, {
      fullMessages: false,
    });

    setErrors(result);

    if (result) {
      let msg = "";

      if (result.name) msg += `${result.name[0]}\n`;

      if (result.email) msg += `${result.email[0]}\n`;

      Alert.alert("Dados incorretos!", msg);
    } else {
      changeStep(stepsAnimation);
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
      <SignUp height={180} />

      <View style={localStyle.textsView}>
        <Text style={globalStyle.title}>Cadastro</Text>
        <Text style={globalStyle.secondaryText}>
          Por favor, preencha os dados abaixo.
        </Text>
      </View>

      <View style={localStyle.stepsView}>
        <SignUpStep1
          stepFunction={handleChangeStep}
          stepAnimation={stepsAnimation}
          validation={{ errors, name, setName, email, setEmail }}
        />

        <SignUpStep2
          stepAnimation={stepsAnimation}
          validation={{ errors, password, setPassword, handleSignUp }}
        />
      </View>
    </ScrollView>
  );
};
