import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ListItem({
  style,
  titleStyle,
  title,
  titleColor,
  titleSize,
  background,
}) {
  return (
    <View style={[{ ...style, backgroundColor: background }]}>
      <Text style={{ ...titleStyle, color: titleColor, fontSize: titleSize }}>
        {title}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default ListItem;
