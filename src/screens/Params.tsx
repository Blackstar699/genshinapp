import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import {RootStackParamList} from "../RootStackParamList";
import {Text, View, Button} from "react-native";
import styles from "../styles/params";
import { Menubar } from "./props/Menubar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User, LoginResponse} from "../types/User";

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Params'>;
}

export const Params: FunctionComponent<Props> = ({ navigation }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [userdata, setUserdata] = React.useState<LoginResponse>();

    useEffect(() => {
        AsyncStorage.getItem('@UserData').then((value) => {
            if(value != null){
                setUserdata(JSON.parse(value));
                setIsLogged(true);
            }
        });
    }, [])
    
    return(
        <View style={styles.container}>
                {
                    isLogged ?
                    <View style={styles.content}>
                        <Text>Connecté en tant que {userdata?.user.username}</Text>
                        <Button onPress={() => {AsyncStorage.removeItem('@UserData'); navigation.navigate('Params')}} title='Sign out'/>
                    </View> 
                    :
                    <View style={styles.content}>
                        <Button onPress={() => navigation.navigate('Login')} title='Sign in'/>
                    </View>
                }
            <Menubar navigation={navigation}/>
        </View>
    );
};
