import React from "react";
import { Pressable, Text } from "react-native";

function Button({
  style,
  title,
  titleColor,
  titleStyle,
  titleSize,
  backgroundColor,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={backgroundColor ? { ...style, backgroundColor } : { ...style }}
    >
      <Text style={{...titleStyle, color: titleColor, fontSize: titleSize }}>{title}</Text>
    </Pressable>
  );
}

export default Button;
