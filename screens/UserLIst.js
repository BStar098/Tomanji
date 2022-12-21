import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import HexagonsBackground from "../components/HexagonsBackground";
import ListItem from "../components/ListItem";
import MainTitle from "../components/MainTitle";
import { setCurrentUserList, setEditableTrue } from "../states/users";

function UserList({ navigation }) {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.currentUserList);

  return (
    <View style={styles.playerListRootContainer}>
      <HexagonsBackground />
      <MainTitle
        style={{ alignSelf: "center", top: "10%" }}
        title={userList.name}
        backgroundColor="#A86E34"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20%",
          padding: "5%",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            color: "white",
            fontSize: 18,
            lineHeight: 21,
          }}
        >
          Jugadores
        </Text>
        <Text
          style={{
            fontWeight: "400",
            color: "white",
            fontSize: 16,
            lineHeight: 21,
          }}
        >
          {userList.date}
        </Text>
      </View>
      <ScrollView style={styles.playerList}>
        {userList.players.map((player, index) => (
          <ListItem
            key={index}
            title={`${index + 1}. ${player}`}
            titleSize={16}
            titleColor="white"
          />
        ))}
      </ScrollView>
      <Button
        style={styles.editPlayerListButton}
        backgroundColor="#38B3E0"
        title="SELECCIONAR"
        titleColor="#FFFFFF"
        titleStyle={{ lineHeight: 24, fontWeight: "700", padding: "5%" }}
        onPress={() => {
          dispatch(setCurrentUserList(userList.players));
          dispatch(setEditableTrue(true));
          navigation.navigate("Tomanji");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  playerListRootContainer: { flex: 1, backgroundColor: "#3F454E" },
  playerList: { flex: 1, paddingHorizontal: "5%" },
  editPlayerListButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "5%",
    marginBottom: "10%",
    borderRadius: 10,
  },
});

export default UserList;
