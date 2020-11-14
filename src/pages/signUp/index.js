import React, { useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
  Keyboard,
} from "react-native";

import { useHeaderHeight } from "@react-navigation/stack";

import SignUp from "../../assets/signUp.svg";
import SignUpStep1 from "../../components/signUpStep1";
import SignUpStep2 from "../../components/signUpStep2";
import globalStyle from "../../global/style";
import localStyle from "./style";

export default ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const stepsAnimation = useRef(new Animated.Value(0)).current;

  const handleChangeStep = () => {
    Keyboard.dismiss();

    Animated.spring(stepsAnimation, {
      toValue: Dimensions.get("window").width * -1,
      speed: 3,
      bounciness: 5,
      useNativeDriver: true,
    }).start();
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
        />

        <SignUpStep2 stepAnimation={stepsAnimation} navigation={navigation} />
      </View>
    </ScrollView>
  );
};
