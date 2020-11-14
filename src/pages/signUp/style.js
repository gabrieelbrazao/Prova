import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    minHeight: Dimensions.get("window").height - 56,
  },
  textsView: {
    marginTop: 20,
    alignItems: "center",
  },
  inputsView: {
    flex: 0.7,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  stepsView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
});
