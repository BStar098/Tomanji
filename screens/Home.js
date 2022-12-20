import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useSelector } from "react-redux";

function Home({ navigation }) {
  const userList = useSelector((state) => state.users.userList);
  return (
    <View style={styles.landingContainer}>
      <View style={styles.landingTitleContainer}>
        <Text style={styles.landingTitle}>Jugadores</Text>
      </View>
      <View style={styles.playersContainer}>
        <Button
          title="+ Agregar jugador"
          titleStyle={{ fontWeight: "700" }}
          titleSize={18}
          titleColor={"#38B3E0"}
        ></Button>
        <Button
          style={styles.playersHistoryButton}
          title="Historial Jugadores"
          titleColor="white"
          backgroundColor="#FD7D39"
          titleSize={18}
          titleStyle={{ fontWeight: "700" }}
        ></Button>
      </View>
      <Button
        style={styles.landingConfirmButton}
        title={"CONFIRMAR"}
        titleColor={"white"}
        titleSize={20}
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
    justifyContent: "center",
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
