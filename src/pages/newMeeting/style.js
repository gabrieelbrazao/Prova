import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: "100%",
    minHeight: Dimensions.get("window").height - 56,
  },
  staticView: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  progressBarView: {
    width: "90%",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
  stepsView: {
    flex: 2,
    width: "200%",
    flexDirection: "row",
  },
});
