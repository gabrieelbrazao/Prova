import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar as nativeBar,
} from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./store";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? nativeBar.currentHeight : 0,
  },
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2980b9",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" backgroundColor="#2980b9" />
        <Provider store={store}>
          <Routes />
        </Provider>
      </SafeAreaView>
    </PaperProvider>
  );
}
