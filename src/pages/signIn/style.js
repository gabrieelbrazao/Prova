import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    minHeight: Dimensions.get("window").height - 56,
  },
  imgView: {
    flex: 0.6,
    width: "100%",
    alignItems: "center",
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
  input: {
    width: "90%",
  },
  confirmView: {
    flex: 0.3,
    width: "90%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
