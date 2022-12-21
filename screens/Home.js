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
import { createUsersList, deleteUser } from "../states/users";
import MainTitle from "../components/MainTitle";

function Home({ navigation }) {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);
  const [userListModalVisible, setUserListModalVisible] = useState(false);
  const [eventModalVisible, setEventModalVisible] = useState(false);
  return (
    <View style={styles.landingContainer}>
      <MainTitle title="Jugadores" backgroundColor="#A86E34"/>
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
          setEventModalVisible(!eventModalVisible);
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
    paddingHorizontal: "10%",
  },
  landingTitleContainer: {
    padding: "5%",
    backgroundColor: "#A86E34",
    borderRadius: 5,
    marginBottom: "7%",
    position: "relative",
    borderLeftColor: "#804E24",
    borderLeftWidth: 5,
    borderBottomColor: "#804E24",
    borderBottomWidth: 4,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  landingTitle: { color: "white", fontSize: 30 },
  playersContainer: {
    position: "relative",
    height: "60%",
    backgroundColor: "white",
    width: "100%",
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
    width: "100%",
    backgroundColor: "#2D87A8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: "7%",
    paddingVertical: "5%",
  },
});

export default Home;
