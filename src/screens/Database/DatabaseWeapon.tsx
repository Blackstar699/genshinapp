import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useEffect, useState } from 'react';
import {RootStackParamList} from '../../RootStackParamList';
import {Text, View, ScrollView, Image } from 'react-native';
import styles from '../../styles/databaseWeapon';
import { Menubar } from '../props/Menubar';
import { Weapon } from '../../types/Weapons';
import { Stats } from '../../types/Stats';
import { WeaponTypes } from '../../types/WeaponTypes';

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseWeapon'>;
}

export const DatabaseWeapon: FunctionComponent<Props> = ({ route }) => {
    const images = 'https://images.latabledesattentistes.fr/genshin/';
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [weapon, setWeapon] = React.useState<Weapon>();
    const [stat1, setStats1] = React.useState<Stats>();
    const [stat2, setStats2] = React.useState<Stats>();
    const [weapontype, setWeaponType] = React.useState<WeaponTypes>();

    const apiPrefix = 'https://strapi-genshin.latabledesattentistes.fr/api';
    const apiWeaponPrefix = '/Weapons';
    const apiStatsPrefix = '/stats?filters[ID_Stats][$eq]=';
    const apiWeaponTypesPrefix = '/weapon-types?filters[ID_WeaponTypes][$eq]=';

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyODc0NTM3LCJleHAiOjE2NTU0NjY1Mzd9.1QLHOdVcF--qS8ch_MiO-EB0sJM0JzrZt4SL0jGxnRE'
    };

    useEffect(() => {
        Promise.all([
            fetch(`${apiPrefix}${apiWeaponPrefix}/${route.params.id}`, {headers}).then((response) => response.json()).then((json) => {setWeapon(json)}),
            fetch(`${apiPrefix}${apiStatsPrefix}${route.params.atq}`, {headers}).then((response) => response.json()).then((json) => {setStats1(json)}),
            fetch(`${apiPrefix}${apiStatsPrefix}${route.params.substat}`, {headers}).then((response) => response.json()).then((json) => {setStats2(json)}),
            fetch(`${apiPrefix}${apiWeaponTypesPrefix}${route.params.weapontype}`, {headers}).then((response) => response.json()).then((json) => {setWeaponType(json)})
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
            </ScrollView>
            
            <Menubar navigation={navigation}/>
        </View>
    );
};

const GetColor = (rarity: number) => {
    let colors: string;

    switch(rarity){
        case 1:
            colors = '#79838F';
            break;
        case 2:
            colors = '#53886A';
            break;
        case 3:
            colors = '#4A90A8';
            break;
        case 4:
            colors = '#AC7FC0';
            break;
        case 5:
            colors = '#D39B4F';
            break;
        default:
            colors = '#ccc';
    }

    return colors;
}

const SortStats = (stats: Stats|undefined) => {
    let rows = [];

    for(let i = 1; i < 15; i++){
        rows.push(CutStats(stats, i));
    }

    return rows;
}

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
}
