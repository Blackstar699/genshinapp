import { NavigationProp } from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {FunctionComponent, useState} from "react";
import styles from '../styles/login'
//import {login} from "../types/User";
import {User} from "../types/User";
import { Menubar } from "./props/Menubar";

type LoginResponse = {
  jwt: string
  user: User
}

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Login'>;
}

export const login = (login: string, password: string): Promise<User> => {
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
    .then((data: LoginResponse) => data.user);
}

export const Login: FunctionComponent<Props> = ({ navigation }) => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const onPressCallback = () => {
    login(identifier, password)
    .then((user) => {
        console.log(user.name);
        Alert.alert(`You're connected with user ${user.name}`)
    })}

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Email</Text>
                <TextInput value={identifier} onChangeText={(value) => setIdentifier(value)} />
                <Text>Mot de passe</Text>
                <TextInput value={password} onChangeText={(value) => setPassword(value)} />
                <Button onPress={onPressCallback} title="Sign in" />
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
}
