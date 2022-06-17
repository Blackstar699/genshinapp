//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput, Button, Image, FlatList } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//Async Storage pour récupération des données utilisateur en cache
import AsyncStorage from '@react-native-async-storage/async-storage';
//additional packages
import {Picker} from '@react-native-picker/picker';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/inventoryArtifactCreate';
//constantes globales
import { globalURL, headers } from '../../GlobalConsts';
//types
import { ArtifactSets } from '../../types/ArtifactSets';
import { LoginResponse } from '../../types/User';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'InventoryArtifactCreate'>;
}

export const InventoryArtifactCreate: FunctionComponent<Props> = ({navigation}) => {

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

    const [isLoading, setLoading] = useState(true);
    const [artifacts, setArtifacts] = React.useState<ArtifactSets>();

    const [artifactName, setArtifactName] = useState('');
    const [artifactSet, setArtifactSet] = useState(0);
    const [artifactType, setArtifactType] = useState('flower_of_life');
    const [artifactLevel, setArtifactLevel] = useState(0);
    const [artifactRarity, setArtifactRarity] = useState(1);
    const [stat1, setStat1] = useState('PV');
    const [stat2, setStat2] = useState('PV');
    const [stat3, setStat3] = useState('PV');
    const [stat4, setStat4] = useState('PV');
    const [stat5, setStat5] = useState('PV');
    const [statValue1, setStatValue1] = useState('');
    const [statValue2, setStatValue2] = useState('');
    const [statValue3, setStatValue3] = useState('');
    const [statValue4, setStatValue4] = useState('');
    const [statValue5, setStatValue5] = useState('');

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

    const statsValues = [
                            {name: 'PV', id: 'PV'},
                            {name: 'PV%', id: 'PV%'},
                            {name: 'ATQ', id: 'ATQ'},
                            {name: 'ATQ%', id: 'ATQ%'},
                            {name: 'DEF', id: 'DEF'},
                            {name: 'DEF%', id: 'DEF%'},
                            {name: 'Taux Crit', id: 'TC%'},
                            {name: 'DGT Crit', id: 'DC%'},
                            {name: 'Maitrise élémentaire', id: 'EM'},
                            {name: 'Recharge d\'énergie', id: 'ER%'},
                            {name: 'Bonus de soins', id: 'Heal%'},
                            {name: 'Bonus de DGT physiques', id: 'Phys%'},
                            {name: 'Bonus de DGT Pyro', id: 'Pyro%'},
                            {name: 'Bonus de DGT Hydro', id: 'Hydro%'},
                            {name: 'Bonus de DGT Electro', id: 'Electro%'},
                            {name: 'Bonus de DGT Cryo', id: 'Cryo%'},
                            {name: 'Bonus de DGT Anemo', id: 'Anemo%'},
                            {name: 'Bonus de DGT Geo', id: 'Geo%'}
                        ];
    
    const UpdateUserData = () => {
        userdata?.user.Inventory.artifacts.push({
            id: userdata.user.Inventory.idArtifacts + 1, 
            idSet: artifactSet, 
            name: artifactName,
            rarity: artifactRarity,
            level: artifactLevel,
            type: artifactType,
            stat1: statValue1+' '+stat1,
            stat2: statValue2+' '+stat2,
            stat3: statValue3+' '+stat3,
            stat4: statValue4+' '+stat4,
            stat5: statValue5+' '+stat5
        });

        if(typeof userdata?.user.Inventory.idArtifacts !== 'undefined'){
            userdata.user.Inventory.idArtifacts += 1;
        }
        
        PutUpdate()
        .then((data) => {
            if(!data.hasOwnProperty('error') && typeof userdata !== 'undefined'){
                storeData(userdata);
                navigation.navigate('Home');
            }else{
                console.log(data);
            }
        });
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

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                <View style={styles.blocBig}>
                    <Text style={styles.text}>Nom</Text>
                    <TextInput style={styles.textInputBig} value={artifactName} onChangeText={(value) => setArtifactName(value)} />
                </View>

                <View style={styles.bloc}>
                    <Text style={styles.text}>Set</Text>
                    <View style={styles.picker}>
                        <Picker selectedValue={artifactSet} onValueChange={(value) => setArtifactSet(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                            {artifacts?.data.map((item, index) => {
                                return <Picker.Item key={index} label={item.attributes.Name} value={item.attributes.ID_ArtifactSets} />
                            })}
                        </Picker>
                    </View>
                </View>

                <View style={styles.bloc}>
                    <Text style={styles.text}>Type</Text>
                    <View style={styles.picker}>
                        <Picker selectedValue={artifactType} onValueChange={(value) => setArtifactType(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                            <Picker.Item label='Fleur' value='flower_of_life'/>
                            <Picker.Item label='Plume' value='plume_of_death'/>
                            <Picker.Item label='Sablier' value='sands_of_eon'/>
                            <Picker.Item label='Coupe' value='goblet_of_eonothem'/>
                            <Picker.Item label='Casque' value='circlet_of_logos'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.bloc}>
                    <Text style={styles.text}>Niveau</Text>
                    <View style={styles.picker}>
                        <Picker selectedValue={artifactLevel} onValueChange={(value) => setArtifactLevel(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                            {Array.from({length: 21}, (item, key) => {
                                return <Picker.Item key={key} label={key.toString()} value={key} />
                            })}
                        </Picker>
                    </View>
                </View>

                <View style={styles.bloc}>
                    <Text style={styles.text}>Rareté</Text>
                    <View style={styles.picker}>
                        <Picker selectedValue={artifactRarity} onValueChange={(value) => setArtifactRarity(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                            {Array.from({length: 5}, (item, key) => {
                                return <Picker.Item key={key+1} label={(key+1).toString()} value={key+1} />
                            })}
                        </Picker>
                    </View>
                </View>

                <View style={styles.statsBloc}>
                    <Text style={styles.text}>Stat principale</Text>
                    <View style={styles.bloc}>
                        <TextInput style={styles.textInput} keyboardType='phone-pad' value={statValue1} onChangeText={(value) => setStatValue1(value)} />
                    </View>
                    <View style={styles.bloc}>
                        <View style={styles.picker}>
                            <Picker selectedValue={stat1} onValueChange={(value) => setStat1(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                                {statsValues.map((item, index) => {
                                    return <Picker.Item key={index} label={item.name} value={item.id} />
                                })}
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.text}>Substat 1</Text>
                    <View style={styles.bloc}>
                        <TextInput style={styles.textInput} keyboardType='phone-pad' value={statValue2} onChangeText={(value) => setStatValue2(value)} />
                    </View>
                    <View style={styles.bloc}>
                        <View style={styles.picker}>
                            <Picker selectedValue={stat2} onValueChange={(value) => setStat2(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                                {statsValues.map((item, index) => {
                                    return <Picker.Item key={index} label={item.name} value={item.id} />
                                })}
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.text}>Substat 2</Text>
                    <View style={styles.bloc}>
                        <TextInput style={styles.textInput} keyboardType='phone-pad' value={statValue3} onChangeText={(value) => setStatValue3(value)} />
                    </View>
                    <View style={styles.bloc}>
                        <View style={styles.picker}>
                            <Picker selectedValue={stat3} onValueChange={(value) => setStat3(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                                {statsValues.map((item, index) => {
                                    return <Picker.Item key={index} label={item.name} value={item.id} />
                                })}
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.text}>Substat 3</Text>
                    <View style={styles.bloc}>
                        <TextInput style={styles.textInput} keyboardType='phone-pad' value={statValue4} onChangeText={(value) => setStatValue4(value)} />
                    </View>
                    <View style={styles.bloc}>
                        <View style={styles.picker}>
                            <Picker selectedValue={stat4} onValueChange={(value) => setStat4(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                                {statsValues.map((item, index) => {
                                    return <Picker.Item key={index} label={item.name} value={item.id} />
                                })}
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.text}>Substat 4</Text>
                    <View style={styles.bloc}>
                        <TextInput style={styles.textInput} keyboardType='phone-pad' value={statValue5} onChangeText={(value) => setStatValue5(value)} />
                    </View>
                    <View style={styles.bloc}>
                        <View style={styles.picker}>
                            <Picker selectedValue={stat5} onValueChange={(value) => setStat5(value)} dropdownIconColor={'#fff'} style={{width: '100%', color: '#fff'}}>
                                {statsValues.map((item, index) => {
                                    return <Picker.Item key={index} label={item.name} value={item.id} />
                                })}
                            </Picker>
                        </View>
                    </View>
                </View>

                <Button title='Créer' onPress={() => UpdateUserData()} />

            </ScrollView>
            <Menubar navigation={navigation}/>
        </View>
    );
};
