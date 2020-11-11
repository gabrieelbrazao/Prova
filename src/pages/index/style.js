import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 30,
  },
  bottomView: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 0,
  },
  textsView: {
    marginTop: 30,
    alignItems: "center",
  },
  orView: {
    borderBottomColor: "#bdc3c7",
    borderBottomWidth: 1,
    position: "relative",
    width: "85%",
    alignItems: "center",
    paddingBottom: 10,
  },
  orText: {
    position: "absolute",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    color: "#2980b9",
    fontWeight: "bold",
  },
  optText: {
    fontSize: 18,
    padding: 30,
    color: "#555",
  },
});
