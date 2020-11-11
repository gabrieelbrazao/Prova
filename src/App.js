import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar as nativeBar,
} from "react-native";

import Routes from "./routes";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? nativeBar.currentHeight : 0,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#2980b9" />
      <Routes />
    </SafeAreaView>
  );
}
