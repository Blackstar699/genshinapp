//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
//imports navigation
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/databaseWeapon';
//constantes globales
import { images, globalURL, headers, GetColor } from '../../GlobalConsts';
//types
import { Weapon } from '../../types/Weapons';
import { Stats } from '../../types/Stats';
import { WeaponTypes } from '../../types/WeaponTypes';

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseWeapon'>;
}

export const DatabaseWeapon: FunctionComponent<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [weapon, setWeapon] = React.useState<Weapon>();
    const [stat1, setStats1] = React.useState<Stats>();
    const [stat2, setStats2] = React.useState<Stats>();
    const [weapontype, setWeaponType] = React.useState<WeaponTypes>();

    const apiWeaponPrefix = '/Weapons';
    const apiStatsPrefix = '/stats?filters[ID_Stats][$eq]=';
    const apiWeaponTypesPrefix = '/weapon-types?filters[ID_WeaponTypes][$eq]=';

    useEffect(() => {
        Promise.all([
            fetch(`${globalURL}${apiWeaponPrefix}/${route.params.id}`, {headers}).then((response) => response.json()).then((json) => {setWeapon(json)}),
            fetch(`${globalURL}${apiStatsPrefix}${route.params.atq}`, {headers}).then((response) => response.json()).then((json) => {setStats1(json)}),
            fetch(`${globalURL}${apiStatsPrefix}${route.params.substat}`, {headers}).then((response) => response.json()).then((json) => {setStats2(json)}),
            fetch(`${globalURL}${apiWeaponTypesPrefix}${route.params.weapontype}`, {headers}).then((response) => response.json()).then((json) => {setWeaponType(json)})
        ])
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    const color: string = GetColor(typeof weapon === 'undefined' ? 1 : weapon.data.attributes.Rarity);

    const levels = ['1', '20', '20+', '40', '40+', '50', '50+', '60', '60+', '70', '70+', '80', '80+', '90'];

    return(
        <View style={styles.container}>
            
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={[styles.titlePage, {color: color}]}>{weapon?.data.attributes.Name}</Text>
                <Image style={styles.image} source={{uri: images + weapon?.data.attributes.Images + '.png'}}/>
                <Text style={styles.description}>Type: {weapontype?.data[0].attributes.Name}</Text>
                <Text style={styles.description}>{weapon?.data.attributes.Description}</Text>

                <Text style={[styles.title, {color: color, borderBottomColor: color}]}>Raffinements</Text>
                <Text style={styles.text}>Coming Soon...</Text>

                <Text style={[styles.title, {color: color, borderBottomColor: color}]}>Stats</Text>

                <View style={styles.statsBloc}>
                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>Niveau</Text>
                        {levels.map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>

                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>ATQ</Text>
                        {SortStats(stat1).map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>

                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>{stat2?.data[0].attributes.Type}</Text>
                        {SortStats(stat2).map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>
                </View>

                <Text style={[styles.title, {color: color, borderBottomColor: color}]}>Matériaux d'élévation</Text>
                <Text style={styles.text}>Coming Soon...</Text>
            
            </ScrollView>
            <Menubar navigation={navigation}/>
        </View>
    );
};

const SortStats = (stats: Stats|undefined) => {
    let rows = [];

    for(let i = 1; i < 15; i++){
        rows.push(CutStats(stats, i));
    }

    return rows;
};

const CutStats = (stats: Stats|undefined, id: number) => {

    let stat: number|undefined;
    let statString: String = '';

    switch(id){
        case 1:
            stat = stats?.data[0].attributes.L1;
            break;
        case 2:
            stat = stats?.data[0].attributes.L20;
            break;
        case 3:
            stat = stats?.data[0].attributes.L20P;
            break;
        case 4:
            stat = stats?.data[0].attributes.L40;
            break;
        case 5:
            stat = stats?.data[0].attributes.L40P;
            break;
        case 6:
            stat = stats?.data[0].attributes.L50;
            break;
        case 7:
            stat = stats?.data[0].attributes.L50P;
            break;
        case 8:
            stat = stats?.data[0].attributes.L60;
            break;
        case 9:
            stat = stats?.data[0].attributes.L60P;
            break;
        case 10:
            stat = stats?.data[0].attributes.L70;
            break;
        case 11:
            stat = stats?.data[0].attributes.L70P;
            break;
        case 12:
            stat = stats?.data[0].attributes.L80;
            break;
        case 13:
            stat = stats?.data[0].attributes.L80P;
            break;
        case 14:
            stat = stats?.data[0].attributes.L90;
            break;
        default:
            stat = 0;
    }

    if(typeof stat === 'undefined'){
        statString = 'N/A';
    }else{
        if(stat == -1){
            statString = 'N/A';
        }else{
            statString = stat.toString();
        }
    }

    return statString;
};
