import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserList,
  createUser,
  createUsersList,
  deleteUser,
} from "../states/users";

function AddUserModal({ modalVisible, setModalVisible, description, title }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);
  const [modalInputValue, setModalInputValue] = useState("");
  const [eventModalInputValue, setEventModalInputValue] = useState({
    name: "",
    players: users,
    date: "",
    picture: "",
  });
  const modalInputHandler = (e) => {
    if (!description) {
      setModalInputValue(e);
    } else {
      setEventModalInputValue({ ...eventModalInputValue, name: e });
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView style={styles.modalContent}>
            <Button
              style={styles.closeButton}
              titleStyle={{ marginHorizontal: "3%", alignSelf: "center" }}
              title="X"
              titleSize={20}
              titleColor="white"
              backgroundColor="#FB443B"
              onPress={() => {
                setModalVisible(!modalVisible);
                /* dispatch(clearUserList()); */
              }}
            />
            <Text style={styles.modalContentTitle}>{title}</Text>
            <View style={styles.modalUsersContainer}>
              {!description ? (
                users.map((user, index) => (
                  <View key={index} style={styles.modalUserName}>
                    <Button
                      style={{
                        flexDirection: "row",
                        padding: "3%",
                        alignItems: "center",
                        borderRadius: 10,
                      }}
                      title={user}
                      backgroundColor="#EDEDED"
                      titleSize={16}
                      onPressIcon={() => {
                        dispatch(deleteUser(user));
                      }}
                      icon={
                        <EvilIcons
                          name="trash"
                          size={25}
                          color="red"
                          userName={user}
                        />
                      }
                    />
                  </View>
                ))
              ) : (
                <Text style={styles.descriptionText}>{description}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={{ fontSize: 18, marginBottom: 10 }}
                textAlign="center"
                placeholder="Escribir nombre"
                onChangeText={modalInputHandler}
                value={!description ? modalInputValue : eventModalInputValue}
              />
              <Button
                title="Confirmar"
                titleColor="#FFFFFF"
                backgroundColor="#84E052"
                titleSize={18}
                style={styles.modalButton}
                onPress={() => {
                  Alert.alert(
                    !description ? "Agregar usuario" : `Crear Evento`,
                    !description
                      ? `Está seguro de que quiere agregar al usuario "${modalInputValue}" `
                      : `Crear evento "${eventModalInputValue.name}"?`,
                    [
                      {
                        text: "Si!",
                        onPress: () => {
                          if (!description) {
                            dispatch(createUser(modalInputValue));
                          } else {
                            dispatch(createUsersList(eventModalInputValue));
                            dispatch(clearUserList());
                            setModalVisible(!modalVisible);
                          }
                          setModalInputValue("");
                        },
                        cancelable: true,
                      },
                      { text: "Cancelar" },
                    ]
                  );
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeButton: {
    position: "absolute",
    top: "-3%",
    right: "-3%",
    borderRadius: 30,
  },
  modalContent: {
    width: "80%",
    height: "40%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: "5%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContentTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3F454E",
  },
  modalUsersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  descriptionText: { color: "#979797", fontSize: 16, fontWeight: "400" },
  modalUserName: {
    flexDirection: "row",
    marginBottom: "3%",
    marginRight: "1%",
    alignItems: "center",
  },
  inputContainer: { width: "80%" },
  modalButton: { alignItems: "center", paddingVertical: "3%", borderRadius: 5 },
});

export default AddUserModal;
