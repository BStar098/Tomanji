import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import SvgCss from "react-native-svg";
import { AvatarGenerator, Avatar } from "random-avatar-generator";
import { SvgUri } from "react-native-svg";

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
  avatarName,
}) {
  const generator = new AvatarGenerator();
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
      <View
        style={avatarName ? { flexDirection: "row", alignItems: "center" } : ""}
      >
        {avatarName ? (
          <SvgUri
            width={50}
            height={50}
            uri={generator.generateRandomAvatar(avatarName)}
          />
        ) : (
          <></>
        )}
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
