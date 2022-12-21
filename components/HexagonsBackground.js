import React from "react";
import {View, StyleSheet } from "react-native";

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
    height:'200%',
    width:'150%',
    position: "absolute",
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: "space-around",
  },
  hexagon: {
    borderRadius: 5,
    height: '10%',
    width: '25%',
    backgroundColor: "rgba(218, 241, 244, 0.5)",
    transform: [{ rotate: "40deg" }],
    marginHorizontal:'4%',
    marginBottom:'10%'
  },
});

export default HexagonsBackground;
