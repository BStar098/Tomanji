import React from "react";
import { View, StyleSheet } from "react-native";

function HexagonsBackground() {
  return (
    <View style={styles.hexagonsContainer}>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
      <View style={styles.hexagon}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  hexagonsContainer: {
    height: "200%",
    width: "150%",
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  hexagon: {
    borderRadius: 100,
    height: "7%",
    width: "20%",
    backgroundColor: "rgba(218, 241, 244, 0.1)",
    transform: [{ rotate: "45deg" }],
    marginHorizontal: "1%",
    marginBottom: "5%",
  },
});

export default HexagonsBackground;
