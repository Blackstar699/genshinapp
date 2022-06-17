//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
//imports navigation
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//Async Storage pour récupération des données utilisateur en cache
import AsyncStorage from '@react-native-async-storage/async-storage';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/inventoryArtifact';
//constantes globales
import { images, globalURL, headers, GetColor } from '../../GlobalConsts';
//types
import { ArtifactSets } from '../../types/ArtifactSets';
import { LoginResponse, UserArtifact } from '../../types/User';

type Props = {
    route: RouteProp<RootStackParamList, 'InventoryArtifact'>;
}

export const InventoryArtifact: FunctionComponent<Props> = ({route}) => {

    const [userdata, setUserdata] = React.useState<LoginResponse>();
    const [isLogged, setIsLogged] = useState(false);
    const [artifact, setArtifact] = React.useState<UserArtifact>();

    const [isLoading, setLoading] = useState(true);
    const [artifacts, setArtifacts] = React.useState<ArtifactSets>();

    useEffect(() => {
        fetch(globalURL + '/artifact-sets?pagination[pageSize]=100&sort[0]=Name%3Aasc',
            {
                method: 'GET',
                headers: headers
            }
        )
          .then((response) => response.json())
          .then((json) => {setArtifacts(json)})
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('@UserData').then((value) => {
            if(value != null){
                setUserdata(JSON.parse(value));
                setArtifact(GetArtifact(route.params.id, JSON.parse(value)));
                setIsLogged(true);
            }
        });
    }, [])

    const DeleteArtifact = () => {
        if(typeof userdata !== 'undefined'){
            for(let i = 0; i < userdata.user.Inventory.artifacts.length; i++){
                if(userdata.user.Inventory.artifacts[i].id === route.params.id){
                    userdata.user.Inventory.artifacts.splice(i, 1);
                    PutUpdate()
                    .then((data) => {
                        if(!data.hasOwnProperty('error') && typeof userdata !== 'undefined'){
                            storeData(userdata);
                            navigation.navigate('Home');
                        }else{
                            console.log(data);
                        }
                    });
                }
            }
        }
    };

    const PutUpdate = (): Promise<LoginResponse> => {
        return fetch(globalURL + '/users/' + userdata?.user.id, {
          headers: {
            'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + userdata?.jwt
          },
          method: 'PUT',
          body: JSON.stringify(userdata?.user)
        })
          .then(response => response.json())
          .then((data: LoginResponse) => data);
      };

    const storeData = async (userdata: LoginResponse) => {
        try {
            const jsonValue = JSON.stringify(userdata);
            await AsyncStorage.removeItem('@UserData');
            await AsyncStorage.setItem('@UserData', jsonValue);
        } catch (e) {
          console.log(e);
        }
    };

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const color = GetColor(typeof artifact === 'undefined' ? 1 : artifact.rarity);

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={[styles.titlePage, { color: color }]}>{artifact?.name}{' (+'+artifact?.level+')'}</Text>
                <Image style={styles.image} source={{uri: images + GetImage(artifact?.idSet, artifacts) + '_' + artifact?.type + '.png'}}/>
                <Text style={styles.text}>{artifact?.stat1}</Text>
                <Text style={styles.text}>{artifact?.stat2}</Text>
                <Text style={styles.text}>{artifact?.stat3}</Text>
                <Text style={styles.text}>{artifact?.stat4}</Text>
                <Text style={styles.text}>{artifact?.stat5}</Text>
                <TouchableOpacity style={styles.button} onPress={() => DeleteArtifact()}>
                    <Text style={styles.buttonText}>Supprimer l'artéfact</Text>
                </TouchableOpacity>
            </ScrollView>

            <Menubar navigation={navigation}/>
        </View>
    );
};

const GetArtifact = (id: number|undefined, userdata: LoginResponse|undefined) => {
    let artifact: UserArtifact|undefined;

    if(typeof userdata !== 'undefined' && typeof id !== 'undefined'){
        userdata.user.Inventory.artifacts.forEach(item => {
            if(item.id === id){
                artifact = item;
            }
        });
    }

    return artifact;
};

const GetImage = (idSet: number|undefined, artifacts: ArtifactSets|undefined) => {
    let image: string = '';

    if(typeof artifacts !== 'undefined' && typeof idSet !== 'undefined'){
        for(let i = 0; i < artifacts.data.length; i++){
            if(idSet.toString() === artifacts.data[i].attributes.ID_ArtifactSets){
                image = artifacts.data[i].attributes.Images;
            }
        }
    }

    return image;
};
