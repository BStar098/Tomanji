import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HexagonsBackground from "../components/HexagonsBackground";
import MainTitle from "../components/MainTitle";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import { setUserList } from "../states/users";

function PlayersHistory({ navigation }) {
  const dispatch = useDispatch();
  const playersHistories = useSelector((state) => state.users.usersHistory);
  const currentUserList = useSelector((state) => state.users.currentUserList);
  return (
    <View style={styles.historyRootContainer}>
      <HexagonsBackground />
      <MainTitle
        style={styles.historyTitle}
        title="HISTORIAL"
        backgroundColor="#A86E34"
      />

      <ScrollView style={styles.playersHistoryContainer}>
        {playersHistories.map((history, index) => (
          <ListItem
            key={index}
            style={styles.playerListItemStyle}
            titleStyle={{ fontWeight: "700", lineHeight: 21 }}
            title={history.name.toUpperCase()}
            titleColor="#FFFFFF"
            titleSize={16}
            secondaryTitle={history.date}
            pressable={
              <Button
                title="Ver"
                titleSize={16}
                titleColor="#38B3E0"
                backgroundColor={"#FFFFFF"}
                style={{ padding: "5%", borderRadius: 5 }}
                onPress={() => {
                  dispatch(setUserList(history.name));
                  navigation.navigate("UserList");
                }}
              />
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  historyTitle: { top: "10%" },
  historyRootContainer: {
    flex: 1,
    backgroundColor: "#3F454E",
    alignItems: "center",
  },
  playersHistoryContainer: {
    flex: 1,
    width: "100%",
    top: "10%",
    paddingHorizontal: "10%",
  },
  playerListItemStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: "4%",
  },
});

export default PlayersHistory;
