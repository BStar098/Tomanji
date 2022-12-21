import { React, useState } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import AddUserModal from "./AddUserModal";
import ListItem from "../components/ListItem";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useDispatch } from "react-redux";
import {
  clearUserList,
  createUsersList,
  deleteUser,
  editUserList,
  setEditableTrue,
} from "../states/users";
import MainTitle from "../components/MainTitle";
import HexagonsBackground from "../components/HexagonsBackground";

function Home({ navigation }) {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);
  const editable = useSelector((state) => state.users.editable);
  const editableUserList = useSelector((state) => state.users.currentUserList);

  const [userListModalVisible, setUserListModalVisible] = useState(false);
  const [eventModalVisible, setEventModalVisible] = useState(false);
  return (
    <View style={styles.landingContainer}>
      <HexagonsBackground />
      <MainTitle title="Jugadores" backgroundColor="#A86E34" />
      <View style={styles.playersContainer}>
        <View style={{ height: "60%", width: "100%" }}>
          <ScrollView>
            {userList.map((user, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ListItem
                  title={`${index + 1}. ` + user}
                  titleSize={18}
                  background="white"
                />
                <Pressable
                  onPress={() => {
                    dispatch(deleteUser(user));
                  }}
                >
                  <EvilIcons
                    name="trash"
                    size={25}
                    color="red"
                    userName={user}
                  />
                </Pressable>
              </View>
            ))}
          </ScrollView>
        </View>
        <Button
          title="+ Agregar jugador"
          titleStyle={{ fontWeight: "700", marginTop: "5%" }}
          titleSize={18}
          titleColor={"#38B3E0"}
          onPress={() => {
            setUserListModalVisible(!userListModalVisible);
          }}
        />
        <Button
          style={styles.playersHistoryButton}
          title="Historial Jugadores"
          titleColor="white"
          backgroundColor="#FD7D39"
          titleSize={18}
          titleStyle={{ fontWeight: "700" }}
          onPress={() => {
            navigation.navigate("PlayersHistory");
          }}
        ></Button>
      </View>
      <Button
        style={styles.landingConfirmButton}
        title={"CONFIRMAR"}
        titleColor={"white"}
        titleSize={20}
        onPress={() => {
          if (!userList.length) {
            Alert.alert(
              "Crear Evento",
              "El evento debe tener al menos 1 jugador!"
            );
          } else if (!editable) {
            setEventModalVisible(!eventModalVisible);
          } else {
            dispatch(
              editUserList({ name: editableUserList.name, players: userList })
            );
            dispatch(clearUserList());
            dispatch(setEditableTrue(false));
          }
        }}
      />
      <AddUserModal
        title="Agrega jugadores"
        modalVisible={userListModalVisible}
        setModalVisible={setUserListModalVisible}
      />
      <AddUserModal
        title="Nombre del Evento"
        description="Guarda la lista para el futuro"
        modalVisible={eventModalVisible}
        setModalVisible={setEventModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    backgroundColor: "#3F454E",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  playersContainer: {
    position: "relative",
    height: "60%",
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    padding: "2%",
  },
  playersHistoryButton: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    width: "80%",
    borderRadius: 5,
    paddingVertical: "5%",
  },
  landingConfirmButton: {
    width: "80%",
    backgroundColor: "#2D87A8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: "7%",
    paddingVertical: "5%",
  },
});

export default Home;
