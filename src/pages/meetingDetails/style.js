import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    minHeight: Dimensions.get("window").height - 56,
  },
  meetingName: {
    fontSize: 25,
    paddingTop: 10,
    color: "#2980b9",
  },
  listView: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  list: {
    width: "95%",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 30,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  footerButtons: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  dateText: {
    fontSize: 18,
    color: "#555",
  },
});
