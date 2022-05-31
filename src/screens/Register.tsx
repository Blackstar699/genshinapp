import { NavigationProp, RouteProp } from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {FunctionComponent, useState} from "react";
import styles from '../styles/register'
import {User, LoginResponse} from "../types/User";
import { Menubar } from "./props/Menubar";

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Register'>;
}

const register = (email: string, pseudo: string, password: string): Promise<LoginResponse> => {
  return fetch("https://strapi-genshin.latabledesattentistes.fr/api/auth/local/register", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      "email": email,
      "username": pseudo,
      "password": password
    })
  })
    .then(response => response.json())
    .then((data: LoginResponse) => data);
}

export const Register: FunctionComponent<Props> = ({ navigation }) => {
    const [identifier, setIdentifier] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const [alert, setAlert] = useState(" ");

    const onPressCallback = () => {
      if(password === verifyPassword && password.length >= 6 && username.length >= 3){
        register(identifier, username, password)
        .then((data) => {
          if(data.hasOwnProperty('jwt')){
            storeData(data);
            navigation.navigate('Home');
          }else{
            setAlert('Erreur');
          }
        })
      }else{
        if(username.length < 3){
          setAlert("le pseudo doit faire au minimum 3 caractères");
        }else if(password !== verifyPassword){
          setAlert("les mots de passe entrés ne correspondent pas");
        }else if(password.length < 6){
          setAlert("le mot de passe doit faire au minimum 6 caractères");
        }
      }
    }

    const storeData = async (userdata: LoginResponse) => {
        try {
          const jsonValue = JSON.stringify(userdata);
          await AsyncStorage.setItem('@UserData', jsonValue);
        } catch (e) {
          // saving error
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput} value={identifier} onChangeText={(value) => setIdentifier(value)} />
                <Text style={styles.text}>Pseudo</Text>
                <TextInput style={styles.textInput} value={username} onChangeText={(value) => setUsername(value)}/>
                <Text style={styles.text}>Mot de passe</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} value={password} onChangeText={(value) => setPassword(value)} />
                <Text style={styles.text}>Confirmation mot de passe</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} value={verifyPassword} onChangeText={(value) => setVerifyPassword(value)}/>
                <Text style={styles.textAlert}>{alert}</Text>
                <Button color={'#3867D6'} onPress={onPressCallback} title='Créer un compte' />
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
}
