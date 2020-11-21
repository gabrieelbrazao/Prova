import React, { useRef, useState } from "react";
import { View, Text, ScrollView, Animated } from "react-native";
import { ProgressBar } from "react-native-paper";

import { useHeaderHeight } from "@react-navigation/stack";

import NewMeetingStep1 from "../../components/newMeetingStep1";
import NewMeetingStep2 from "../../components/newMeetingStep2";
import handleChangeStep from "../../utils/handleChangeStep";
import localStyle from "./style";

export default ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const stepsAnimation = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0.5);

  console.log(stepsAnimation);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        ...localStyle.mainView,
        paddingTop: headerHeight,
      }}
    >
      <View style={localStyle.staticView}>
        <View style={localStyle.progressBarView}>
          <ProgressBar progress={progress} color="#2980b9" />
        </View>

        <Text style={localStyle.text}>
          Para criarmos sua nova reunião, precisaremos de algumas informações.
        </Text>
      </View>

      <View style={localStyle.stepsView}>
        <NewMeetingStep1
          stepFunction={handleChangeStep}
          stepAnimation={stepsAnimation}
          setProgress={setProgress}
        />
        <NewMeetingStep2
          stepAnimation={stepsAnimation}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};
