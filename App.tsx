import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from './src/RootStackParamList';
import {HomeScreen} from './src/screens/Homescreen';
import { Params } from './src/screens/Params';
import { Database } from './src/screens/Database';
import { Inventory } from './src/screens/Inventory';
import { DatabaseCharacters } from './src/screens/Database/DatabaseCharacters';
import { DatabaseArtifacts } from './src/screens/Database/DatabaseArtifacts';
import { DatabaseArtifact } from './src/screens/Database/DatabaseArtifact';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#282828"
        hidden={false} />
      <Stack.Navigator screenOptions={{animation: 'none'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Params"
          component={Params}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Database"
          component={Database}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="DatabaseCharacters"
          component={DatabaseCharacters}
          options={{headerShown: true, headerTintColor: '#fff', headerStyle: {backgroundColor: '#202020'}, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Personnages'}}
        />
        <Stack.Screen 
          name="DatabaseArtifacts"
          component={DatabaseArtifacts}
          options={{headerShown: true, headerTintColor: '#fff', headerStyle: {backgroundColor: '#202020'}, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Artéfacts'}}
        />
        <Stack.Screen
          name="DatabaseArtifact"
          component={DatabaseArtifact}
          options={{headerShown: true, headerTintColor: '#fff', headerStyle: {backgroundColor: '#202020'}, headerTitleAlign: 'center',  headerShadowVisible: false, title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
