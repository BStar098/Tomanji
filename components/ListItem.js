import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ListItem({
  style,
  titleStyle,
  title,
  secondaryTitle,
  secondaryTitleStyle,
  titleColor,
  titleSize,
  background,
  pressable,
}) {
  return (
    <View
      style={[
        {
          ...style,
          backgroundColor: background,
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <View>
        <Text style={{ ...titleStyle, color: titleColor, fontSize: titleSize }}>
          {title}
        </Text>
        {secondaryTitle ? (
          <Text style={[styles.secondaryTitleStyle, secondaryTitleStyle]}>
            {secondaryTitle}
          </Text>
        ) : (
          <></>
        )}
      </View>
      {pressable ? pressable : <></>}
    </View>
  );
}
const styles = StyleSheet.create({
  secondaryTitleStyle: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    color: "#FFFFFF",
  },
});
export default ListItem;
