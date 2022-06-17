import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/RootStackParamList';
import { HomeScreen } from './src/screens/Homescreen';
import { Params } from './src/screens/Params';
import { Database } from './src/screens/Database';
import { Inventory } from './src/screens/Inventory';
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { DatabaseCharacters } from './src/screens/Database/DatabaseCharacters';
import { DatabaseCharacter } from './src/screens/Database/DatabaseCharacter';
import { DatabaseArtifacts } from './src/screens/Database/DatabaseArtifacts';
import { DatabaseArtifact } from './src/screens/Database/DatabaseArtifact';
import { DatabaseMaterials } from './src/screens/Database/DatabaseMaterials';
import { DatabaseMaterial } from './src/screens/Database/DatabaseMaterial';
import { DatabaseWeapons } from './src/screens/Database/DatabaseWeapons';
import { DatabaseWeapon } from './src/screens/Database/DatabaseWeapon';
import { InventoryArtifacts } from './src/screens/Inventory/InventoryArtifacts';
import { InventoryArtifact } from './src/screens/Inventory/InventoryArtifact';
import { InventoryArtifactCreate } from './src/screens/Inventory/InventoryArtifactCreate';
import { InventoryWeapons } from './src/screens/Inventory/InventoryWeapons';
import { InventoryCharacters } from './src/screens/Inventory/InventoryCharacters';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor='#282828'
          hidden={false} />
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Params'
            component={Params}
            options={{ headerShown: true, headerBackVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Paramètres'}}
          />
          <Stack.Screen
            name='Database'
            component={Database}
            options={{ headerShown: true, headerBackVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Base de données'}}
          />
          <Stack.Screen
            name='Inventory'
            component={Inventory}
            options={{ headerShown: true, headerBackVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Inventaire'}}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Connexion'}}
          />
          <Stack.Screen
            name='Register'
            component={Register}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Créer un compte'}}
          />
          <Stack.Screen
            name='DatabaseCharacters'
            component={DatabaseCharacters}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Personnages' }}
          />
          <Stack.Screen
            name='DatabaseCharacter'
            component={DatabaseCharacter}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerShadowVisible: false, title: '' }}
          />
          <Stack.Screen
            name='DatabaseWeapons'
            component={DatabaseWeapons}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Armes' }}
          />
          <Stack.Screen
            name='DatabaseWeapon'
            component={DatabaseWeapon}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: '' }}
          />
          <Stack.Screen
            name='DatabaseArtifacts'
            component={DatabaseArtifacts}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Artéfacts' }}
          />
          <Stack.Screen
            name='DatabaseArtifact'
            component={DatabaseArtifact}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerShadowVisible: false, title: '' }}
          />
          <Stack.Screen
            name='DatabaseMaterials'
            component={DatabaseMaterials}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Matériaux' }}
          />
          <Stack.Screen
            name='DatabaseMaterial'
            component={DatabaseMaterial}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerShadowVisible: false, title: '' }}
          />
          <Stack.Screen
            name='InventoryArtifacts'
            component={InventoryArtifacts}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Mes artéfacts' }}
          />
          <Stack.Screen
            name='InventoryArtifact'
            component={InventoryArtifact}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerShadowVisible: false, title: '' }}
          />
          <Stack.Screen
            name='InventoryArtifactCreate'
            component={InventoryArtifactCreate}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Ajouter un artéfact' }}
          />
          <Stack.Screen 
            name='InventoryWeapons'
            component={InventoryWeapons}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Mes armes' }}
          />
          <Stack.Screen 
            name='InventoryCharacters'
            component={InventoryCharacters}
            options={{ headerShown: true, headerTintColor: '#fff', headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center', headerShadowVisible: false, title: 'Mes personnages' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
