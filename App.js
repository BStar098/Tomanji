import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./states/store";
import Home from "./screens/Home";
import PlayersHistory from "./screens/PlayersHistory";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Tomanji" component={Home} />
          <Stack.Screen name="PlayersHistory" component={PlayersHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
