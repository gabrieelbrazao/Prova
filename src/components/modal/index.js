import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Modal, Portal, TextInput, Button, Avatar } from "react-native-paper";
import { useSelector } from "react-redux";

import api from "../../services/api";
import localStyle from "./style";

export default ({ visible, hideModal, meetingId, data }) => {
  const { TOKEN } = useSelector((state) => state);

  const handleAddMember = () => {
    api
      .post(
        "localhost:8080/api/presenca",
        {
          usuarioId: 2,
          reuniaoId: meetingId,
          presente: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then(({ data: dataPresent }) => {
        console.log(dataPresent?.dados);

        data.setData([
          ...data.data,
          dataPresent?.dados.map((item) => ({ ...item, nome: "Nome teste" })),
        ]);

        hideModal();
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

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
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button mode="contained" onPress={() => handleAddMember()}>
          ADICIONAR
        </Button>
      </Modal>
    </Portal>
  );
};
