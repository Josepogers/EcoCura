import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStart } from "./src/pages/GetStart";
import { Home } from "./src/pages/Home";
import { PragaDetalhes } from "./src/pages/PragasDetalhes";
import { LoginScreen } from "./src/pages/Login";
import { CriarConta } from "./src/pages/CriarConta";
import TutorialScreen from "./src/pages/Tutorial";
import { Favoritos } from "./src/pages/Favoritas";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen
          name="Tutorial"
          component={TutorialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStart"
          component={GetStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PragaDetalhes" component={PragaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
