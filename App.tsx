import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from './src/RootStackParamList';
import {HomeScreen} from './src/screens/Homescreen';
import { Params } from './src/screens/Params';
import { Database } from './src/screens/Database';
import { Inventory } from './src/screens/Inventory';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Params"
          component={Params}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Database"
          component={Database}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
