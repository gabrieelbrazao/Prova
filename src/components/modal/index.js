import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Modal, Portal, TextInput, Button, Avatar } from "react-native-paper";

import localStyle from "./style";

export default ({ visible, hideModal }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => hideModal()}
        contentContainerStyle={localStyle.mainView}
      >
        <TouchableOpacity onPress={() => hideModal()}>
          <View style={localStyle.closeView}>
            <Avatar.Icon size={30} icon="close" />
          </View>
        </TouchableOpacity>

        <Text style={localStyle.title}>ADICIONAR PARTICIPANTE</Text>

        <Text style={localStyle.text}>
          Para adicionar um participante, digite o e-mail dele.
        </Text>

        <TextInput
          label="E-mail"
          mode="outlined"
          dense
          style={localStyle.input}
        />

        <Button mode="contained" onPress={() => console.log("ok")}>
          ADICIONAR
        </Button>
      </Modal>
    </Portal>
  );
};
