//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList';
//Async Storage pour récupération/supression des données utilisateur en cache
import AsyncStorage from '@react-native-async-storage/async-storage';
//barre de menu
import { Menubar } from './props/Menubar';
//styles CSS
import styles from '../styles/params';
//types
import { LoginResponse } from '../types/User';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Params'>;
}

export const Params: FunctionComponent<Props> = ({ navigation }) => {

    const [userdata, setUserdata] = React.useState<LoginResponse>();
    const [isLogged, setIsLogged] = useState(false);

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
                        <View style={styles.loginBloc}>
                            <Text style={styles.username}>{userdata?.user.username}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => {AsyncStorage.removeItem('@UserData'); setIsLogged(false);}}>
                                <Text style={styles.buttonText}>Déconnexion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {AsyncStorage.removeItem('@UserData'); setIsLogged(false);}}>
                                <Text style={styles.buttonText}>Déconnexion</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={styles.content}>
                        <View style={styles.loginBloc}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Se connecter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.buttonText}>Créer un compte</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            <Menubar navigation={navigation}/>
        </View>
    );
};
