import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    flexDirection: "column",
    width: "50%",
  },
  inputView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: "#2980b9",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "90%",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    flex: 1,
  },
});
