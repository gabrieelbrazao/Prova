import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  meetingName: {
    fontSize: 15,
    flex: 1,
  },
  dateView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  switch: {
    paddingRight: 10,
  },
});
