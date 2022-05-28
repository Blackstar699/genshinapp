import { NavigationProp, RouteProp } from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {FunctionComponent, useState} from "react";
import styles from '../styles/login'
import {User, LoginResponse} from "../types/User";
import { Menubar } from "./props/Menubar";

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Login'>;
}

const login = (login: string, password: string): Promise<LoginResponse> => {
  return fetch("https://strapi-genshin.latabledesattentistes.fr/api/auth/local", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      "identifier": login,
      "password": password
    })
  })
    .then(response => response.json())
    .then((data: LoginResponse) => data);
}

export const Login: FunctionComponent<Props> = ({ navigation }) => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const [alert, setAlert] = useState(" ");

    const onPressCallback = () => {
        login(identifier, password)
        .then((data) => {
          if(data.hasOwnProperty('jwt')){
            storeData(data);
            navigation.navigate('Home');
          }else{
            setAlert('Erreur, vérifiez votre email et votre mot de passe');
          }
        })
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
                <Text style={styles.text}>Mot de passe</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} value={password} onChangeText={(value) => setPassword(value)} />
                <Text style={styles.textAlert}>{alert}</Text>
                <Button color={'#3867D6'} onPress={onPressCallback} title="Connexion" />
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
}
