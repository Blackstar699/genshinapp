import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useEffect, useState, Component } from 'react';
import { RootStackParamList } from '../../RootStackParamList';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../../styles/databaseCharacter';
import { Menubar } from '../props/Menubar';
import { Character } from '../../types/Characters';
import { Constellations } from '../../types/Constellations';
import { WeaponTypes } from '../../types/WeaponTypes';
import { Passives } from '../../types/Passives';
import { Stats } from '../../types/Stats';

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseCharacter'>;
}

export const DatabaseCharacter: FunctionComponent<Props> = ({ route }) => {
    const images = 'https://images.latabledesattentistes.fr/genshin/';
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [character, setCharacter] = React.useState<Character>();
    const [passives, setPassives] = React.useState<Passives>();
    const [constellation, setConstellation] = React.useState<Constellations>();
    const [weapontype, setWeaponType] = React.useState<WeaponTypes>();
    const [stat1, setStats1] = React.useState<Stats>();
    const [stat2, setStats2] = React.useState<Stats>();
    const [stat3, setStats3] = React.useState<Stats>();
    const [stat4, setStats4] = React.useState<Stats>();

    const apiPrefix = 'https://strapi-genshin.latabledesattentistes.fr/api';
    const apiCharacterPrefix = '/Characters';
    const apiPassivesPrefix = '/passives?filters[ID_Passives][$eq]=';
    const apiConstellationPrefix = '/constellations?filters[ID_Constellations][$eq]=';
    const apiWeaponTypesPrefix = '/weapon-types?filters[ID_WeaponTypes][$eq]=';
    const apiStatsPrefix = '/stats?filters[ID_Stats][$eq]=';

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyODc0NTM3LCJleHAiOjE2NTU0NjY1Mzd9.1QLHOdVcF--qS8ch_MiO-EB0sJM0JzrZt4SL0jGxnRE'
    };

    useEffect(() => {
        Promise.all([
            fetch(`${apiPrefix}${apiCharacterPrefix}/${route.params.id}`, {headers}).then((response) => response.json()).then((json) => {setCharacter(json)}),
            fetch(`${apiPrefix}${apiPassivesPrefix}${route.params.passives}`, {headers}).then((response) => response.json()).then((json) => {setPassives(json)}),
            fetch(`${apiPrefix}${apiConstellationPrefix}${route.params.constellations}`, {headers}).then((response) => response.json()).then((json) => {setConstellation(json)}),
            fetch(`${apiPrefix}${apiStatsPrefix}${route.params.pv}`, {headers}).then((response) => response.json()).then((json) => {setStats1(json)}),
            fetch(`${apiPrefix}${apiStatsPrefix}${route.params.atq}`, {headers}).then((response) => response.json()).then((json) => {setStats2(json)}),
            fetch(`${apiPrefix}${apiStatsPrefix}${route.params.def}`, {headers}).then((response) => response.json()).then((json) => {setStats3(json)}),
            fetch(`${apiPrefix}${apiStatsPrefix}${route.params.substat}`, {headers}).then((response) => response.json()).then((json) => {setStats4(json)}),
            fetch(`${apiPrefix}${apiWeaponTypesPrefix}${route.params.weapontype}`, {headers}).then((response) => response.json()).then((json) => {setWeaponType(json)})
        ])
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    const color: string = GetColor(typeof character === 'undefined' ? ' ' : character.data.attributes.Element);

    const levels = ['1', '20', '20+', '40', '40+', '50', '50+', '60', '60+', '70', '70+', '80', '80+', '90'];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                <Text style={[styles.titlePage, { color: color }]}>{character?.data.attributes.Name}</Text>
                <Image style={styles.characterpreview} source={{ uri: images + character?.data.attributes.Images + '_gacha_splash.png' }} />
                <Text style={styles.text}>{character?.data.attributes.Description}</Text>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Identité</Text>
                <Text style={styles.text}>Element: {character?.data.attributes.Element}</Text>
                <Text style={styles.text}>Rareté: {character?.data.attributes.Rarity}</Text>
                <Text style={styles.text}>Sexe: {character?.data.attributes.Gender}</Text>
                <Text style={styles.text}>Type: {weapontype?.data[0].attributes.Name}</Text>
                <Text style={styles.text}>Région: {character?.data.attributes.Region}</Text>
                <Text style={styles.text}>Anniversaire: {character?.data.attributes.Birthday}</Text>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Compétences</Text>
                <Text style={styles.text}>Coming Soon...</Text>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Passifs</Text>

                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri : images + character?.data.attributes.Images + '_talent_passive_0.png' }}/>
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{passives?.data[0].attributes.P1}</Text>
                        <Text style={styles.detailText}>{passives?.data[0].attributes.DescriptionP1}</Text>
                    </View>
                </View>
                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri : images + character?.data.attributes.Images + '_talent_passive_1.png' }}/>
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{passives?.data[0].attributes.P2}</Text>
                        <Text style={styles.detailText}>{passives?.data[0].attributes.DescriptionP2}</Text>
                    </View>
                </View>
                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri : images + character?.data.attributes.Images + '_talent_passive_2.png' }}/>
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{passives?.data[0].attributes.P3}</Text>
                        <Text style={styles.detailText}>{passives?.data[0].attributes.DescriptionP3}</Text>
                    </View>
                </View>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Constellations</Text>
                <Image style={styles.imageConstellation} source={{ uri: images + character?.data.attributes.Images + '_constellation.png' }} />
                    
                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri: images + character?.data.attributes.Images + '_constellation_1.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{constellation?.data[0].attributes.C1}</Text>
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.DescriptionC1}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri: images + character?.data.attributes.Images + '_constellation_2.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{constellation?.data[0].attributes.C2}</Text>
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.DescriptionC2}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri: images + character?.data.attributes.Images + '_constellation_3.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{constellation?.data[0].attributes.C3}</Text>
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.DescriptionC3}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri: images + character?.data.attributes.Images + '_constellation_4.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{constellation?.data[0].attributes.C4}</Text>
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.DescriptionC4}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri: images + character?.data.attributes.Images + '_constellation_5.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{constellation?.data[0].attributes.C5}</Text>
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.DescriptionC5}</Text>
                    </View>
                </View>
                    
                <View style={styles.detailBloc}>
                    <Image style={styles.detailImage} source={{ uri: images + character?.data.attributes.Images + '_constellation_6.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{constellation?.data[0].attributes.C6}</Text>
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.DescriptionC6}</Text>
                    </View>
                </View>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Stats</Text>

                <View style={styles.statsBloc}>
                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>Niveau</Text>
                        {levels.map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>
                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>PV</Text>
                        {SortStats(stat1).map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>
                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>ATQ</Text>
                        {SortStats(stat2).map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>
                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>DEF</Text>
                        {SortStats(stat3).map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>
                    <View style={styles.statBloc}>
                        <Text style={styles.statText}>{stat4?.data[0].attributes.Type}</Text>
                        {SortStats(stat4).map((item, index) => {
                            return <Text key={index} style={styles.statText}>{item}</Text>
                        })}
                    </View>
                </View>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Elévation</Text>
                <Text style={styles.text}>Coming Soon...</Text>
                
                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Galerie</Text>
                <Image style={styles.gallery} source={{ uri: images + character?.data.attributes.Images + '_portrait.png' }} />
            
            </ScrollView>
            <Menubar navigation={navigation} />
        </View>
    );
};

const GetColor = (element: string) => {
    let colors: string;

    switch(element){
        case 'Electro':
            colors = '#af71ca';
            break;
        case 'Geo':
            colors = '#bfa34e';
            break;
        case 'Pyro':
            colors = '#bc7057';
            break;
        case 'Anemo':
            colors = '#48bcb4';
            break;
        case 'Dendro':
            colors = '#D39B4F';
            break;
        case 'Cryo':
            colors = '#1c4d80';
            break;
        case 'Hydro':
            colors = '#297bbe';
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
