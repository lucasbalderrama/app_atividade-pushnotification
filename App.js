// Lucas Randal N°18 e Flavia Glenda N°04
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaginaPrincipal from './src/screens/PaginaPrincipal.js';
import ListarJogadores from './src/screens/ListarJogadores.js';
import UploadImagens from './src/screens/UploadImagens.js';
import UploadVideos from './src/screens/UploadVideos.js';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    -<Stack.Navigator initialRouteName="PaginaPrincipal" screenOptions={{headerShown: false}}>
      <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
      <Stack.Screen name="ListarJogadores" component={ListarJogadores} />
      <Stack.Screen name="UploadImagens" component={UploadImagens} />
      <Stack.Screen name="UploadVideos" component={UploadVideos} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
