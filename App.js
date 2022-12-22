import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { persistor, store } from "./states/store";
import Home from "./screens/Home";
import PlayersHistory from "./screens/PlayersHistory";
import UserList from "./screens/UserLIst";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Tomanji" component={Home} />
            <Stack.Screen name="PlayersHistory" component={PlayersHistory} />
            <Stack.Screen name="UserList" component={UserList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
