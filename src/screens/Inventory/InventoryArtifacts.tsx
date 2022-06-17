//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//Async Storage pour récupération des données utilisateur en cache
import AsyncStorage from '@react-native-async-storage/async-storage';
//additional packages
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/inventoryArtifacts';
//constantes globales
import { images, globalURL, headers, GetGradientColor } from '../../GlobalConsts';
//types
import { ArtifactSets } from '../../types/ArtifactSets';
import { LoginResponse } from '../../types/User';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'InventoryArtifacts'>;
}

export const InventoryArtifacts: FunctionComponent<Props> = ({navigation}) => {

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

    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(true);
    const [check5, setCheck5] = useState(true);

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

    return(
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InventoryArtifactCreate')}>
                    <Text style={styles.buttonText}>Ajouter un artéfact</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sorting}>
                <Text style={styles.sortingText}>Rareté: </Text>
                <BouncyCheckbox isChecked={check1} text='1' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck1(!check1);}}/>
                <BouncyCheckbox isChecked={check2} text='2' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck2(!check2);}}/>
                <BouncyCheckbox isChecked={check3} text='3' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck3(!check3);}}/>
                <BouncyCheckbox isChecked={check4} text='4' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck4(!check4);}}/>
                <BouncyCheckbox isChecked={check5} text='5' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck5(!check5);}}/>
            </View>

            <FlatList style={styles.list} showsVerticalScrollIndicator={false} numColumns={2}
                data={SortData(userdata, check1, check2, check3, check4, check5)}
                renderItem={
                    ({item}) => {
                        return  <LinearGradient style={styles.bloc} colors={GetGradientColor(item.rarity)} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('InventoryArtifact', {id: item.id})}>
                                        <View style={styles.imageView}>
                                            <Image style={styles.image} source={{ uri: images + GetImage(item.idSet, artifacts) + '_' + item.type + '.png' }}/>
                                        </View>
                                        <Text style={styles.text}>+{item.level} - {StatSplitter(item.stat1, 1)}</Text>
                                        <Text style={styles.text}>{item.name}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                    }
                }
            />

            <Menubar navigation={navigation}/>
        </View>
    );
};

const SortData = (datas: LoginResponse|undefined, check1: boolean, check2: boolean, check3: boolean, check4: boolean, check5: boolean) => {

    let rarity: Array<number> = [];

    check1 ? rarity.push(1) : null;
    check2 ? rarity.push(2) : null;
    check3 ? rarity.push(3) : null;
    check4 ? rarity.push(4) : null;
    check5 ? rarity.push(5) : null;

    if(typeof datas !== 'undefined'){
        return datas.user.Inventory.artifacts.filter(item => rarity.includes(item.rarity));
    }
};

const GetImage = (idSet: number, artifacts: ArtifactSets|undefined) => {
    let image: string = '';

    if(typeof artifacts !== 'undefined'){
        for(let i = 0; i < artifacts.data.length; i++){
            if(idSet.toString() === artifacts.data[i].attributes.ID_ArtifactSets){
                image = artifacts.data[i].attributes.Images;
            }
        }
    }

    return image;
};

const StatSplitter = (stat: string, id: number) => {
    let split = stat.split(' ');
    return split[id];
};
