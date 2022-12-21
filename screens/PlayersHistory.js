import React from "react";
import { Text, View, StyleSheet } from "react-native";
import HexagonsBackground from "../components/HexagonsBackground";
import MainTitle from "../components/MainTitle";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";
import Button from "../components/Button";

function PlayersHistory() {
  const playersHistories = useSelector((state) => state.users.usersHistory);
  return (
    <View style={styles.historyRootContainer}>
      <HexagonsBackground />
      <MainTitle
        style={styles.historyTitle}
        title="HISTORIAL"
        backgroundColor="#A86E34"
      />
      <View style={styles.playersHistoryContainer}>
        {playersHistories.map((history, index) => (
          <ListItem
            key={index}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "white",
              paddingVertical: "4%",
            }}
            titleStyle={{ fontWeight: "700", lineHeight: 21 }}
            title={history.name.toUpperCase()}
            titleColor="#FFFFFF"
            titleSize={16}
            secondaryTitle="fecha"
            pressable={
              <Button
                title="Ver"
                titleSize={16}
                titleColor="#38B3E0"
                backgroundColor={"#FFFFFF"}
                style={{ padding: "5%", borderRadius: 5 }}
              />
            }
          />
        ))}
      </View>
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
});

export default PlayersHistory;
