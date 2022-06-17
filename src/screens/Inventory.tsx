//imports composants React
import React, { FunctionComponent, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList';
//Async Storage pour récupération des données utilisateur en cache
import AsyncStorage from '@react-native-async-storage/async-storage';
//barre de menu
import { Menubar } from './props/Menubar';
//styles CSS
import styles from '../styles/inventory';
//constantes globales
import { images } from '../GlobalConsts';
//types
import { LoginResponse } from '../types/User';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Inventory'>;
}

export const Inventory: FunctionComponent<Props> = ({ navigation }) => {

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
                    <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate('InventoryCharacters')}>
                        <Image style={styles.image}  source={{ uri: images + 'shenhe_icon_big.png' }}/>
                        <Text style={styles.text}>Personnages</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate('InventoryWeapons')}>
                        <Image style={styles.image}  source={{ uri: images + 'polar_star.png' }}/>
                        <Text style={styles.text}>Armes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate('InventoryArtifacts')}>
                        <Image style={styles.image}  source={{ uri: images + 'emblem_of_severed_fate_flower_of_life.png' }}/>
                        <Text style={styles.text}>Artéfacts</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.content}>
                    <Text style={styles.loginText}>Vous devez vous connecter pour utiliser cette option</Text>
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
