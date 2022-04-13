import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from './src/RootStackParamList';
import {HomeScreen} from './src/screens/Homescreen';
import { Params } from './src/screens/Params';
import { Database } from './src/screens/Database';
import { Inventory } from './src/screens/Inventory';
import { Menubar } from './src/screens/props/Menubar';
import { View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'none', headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Params"
          component={Params}
        />
        <Stack.Screen
          name="Database"
          component={Database}
        />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
