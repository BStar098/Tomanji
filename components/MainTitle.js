import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MainTitle({ style, title, backgroundColor }) {
  return (
    <View
      style={[
        styles.landingTitleContainer,
        { backgroundColor: backgroundColor },
        style,
      ]}
    >
      <Text style={styles.landingTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  landingTitleContainer: {
    padding: "5%",
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
});

export default MainTitle;
