import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  nameView: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 30,
  },
  nameText: {
    color: "#2980b9",
    fontWeight: "bold",
    fontSize: 17,
  },
  title: {
    color: "#555",
    fontSize: 30,
    paddingVertical: 30,
  },
  listView: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  list: {
    width: "90%",
    borderLeftColor: "#2980b9",
    borderLeftWidth: 2,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
