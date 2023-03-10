import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserList,
  createUser,
  createUsersList,
  deleteUser,
  editUser,
} from "../states/users";
import returnActualDate from "../utils";

function AddUserModal({
  modalVisible,
  setModalVisible,
  description,
  title,
  editUserName,
}) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);
  const [modalInputValue, setModalInputValue] = useState("");
  const [userNameInputValue, setUserNameInputValue] = useState("");
  const [eventModalInputValue, setEventModalInputValue] = useState({
    name: "",
    players: "",
    date: returnActualDate(),
    picture: "",
  });

  const modalInputHandler = (e) => {
    if (!description && !editUserName) {
      setModalInputValue(e);
    } else if (editUserName) {
      setUserNameInputValue(e);
    } else {
      setEventModalInputValue({
        ...eventModalInputValue,
        name: e,
        players: users,
      });
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
            <ScrollView style={styles.modalUsersContainer}>
              {!description && !editUserName ? (
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
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={{ fontSize: 18, marginBottom: 10 }}
                textAlign="center"
                placeholder="Escribir nombre"
                onChangeText={modalInputHandler}
                value={
                  !description && !editUserName
                    ? modalInputValue
                    : editUserName
                    ? userNameInputValue
                    : eventModalInputValue
                }
              />
              <Button
                title="Confirmar"
                titleColor="#FFFFFF"
                backgroundColor="#84E052"
                titleSize={18}
                style={styles.modalButton}
                onPress={() => {
                  if (
                    !modalInputValue &&
                    !eventModalInputValue.name &&
                    !userNameInputValue
                  ) {
                    Alert.alert("Error", "El campo no puede estar vac??o!");
                  } else {
                    if (!description && !editUserName) {
                      dispatch(createUser(modalInputValue));
                    } else if (description && !editUserName) {
                      Alert.alert(
                        "Crear Evento",
                        `Est?? seguro de que quiere crear el evento "${eventModalInputValue.name}"?`,
                        [
                          {
                            text: "De acuerdo",
                            onPress: () => {
                              dispatch(createUsersList(eventModalInputValue));
                              setModalVisible(!modalVisible);
                              dispatch(clearUserList());
                              setEventModalInputValue("");
                            },
                          },
                          { text: "Cancelar" },
                        ]
                      );
                    } else {
                      dispatch(editUser(userNameInputValue));
                      setUserNameInputValue("");
                      setModalVisible(!modalVisible);
                    }
                    setModalInputValue("");
                  }
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
    marginVertical: "5%",
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
