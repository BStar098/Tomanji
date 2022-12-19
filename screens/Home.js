import React from "react";
import { Button, Text, View } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <Text> HOLAAAAAAAAAA</Text>
      <Button onPress={()=>{navigation.navigate('Test')}} title="Test button" />
    </View>
  );
}

export default Home;
