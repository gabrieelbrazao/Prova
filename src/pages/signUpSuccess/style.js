import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    minHeight: Dimensions.get("window").height,
    paddingHorizontal: 20,
  },
  buttonView: {
    width: "100%",
    flex: 0.5,
  },
  button: {
    width: "100%",
  },
});
