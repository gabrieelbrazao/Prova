import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    padding: 20,
    maxHeight: "90%",
  },
  closeView: {
    alignItems: "flex-end",
    marginTop: -10,
    marginRight: -10,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#555",
    marginBottom: 10,
  },
  input: {
    marginBottom: 30,
  },
});
