import React from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
function Button({
  style,
  title,
  titleColor,
  titleStyle,
  titleSize,
  backgroundColor,
  onPress,
  icon,
  onPressIcon,
}) {

  return onPressIcon ? (
    <View
      style={backgroundColor ? { ...style, backgroundColor } : { ...style }}
    >
      <Pressable onPress={onPress}>
        <Text style={{ ...titleStyle, color: titleColor, fontSize: titleSize }}>
          {title}
        </Text>
      </Pressable>
      <Pressable onPress={onPressIcon}>{icon}</Pressable>
    </View>
  ) : (
    <Pressable
      onPress={onPress}
      style={backgroundColor ? { ...style, backgroundColor } : { ...style }}
    >
      <Text style={{ ...titleStyle, color: titleColor, fontSize: titleSize }}>
        {title}
      </Text>
      {icon ? icon : <></>}
    </Pressable>
  );
}

export default Button;
