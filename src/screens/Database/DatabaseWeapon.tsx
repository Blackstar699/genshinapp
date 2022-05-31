import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import {RootStackParamList} from "../../RootStackParamList";
import {Text, View, ScrollView, Image } from "react-native";
import styles from "../../styles/databaseWeapon";
import { Menubar } from "../props/Menubar";
import { Weapon } from "../../types/Weapons";
import { Stat } from "../../types/Stats";
import { WeaponType } from "../../types/WeaponTypes";


type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseWeapon'>;
}

export const DatabaseWeapon: FunctionComponent<Props> = ({ route }) => {
    const images = "https://images.latabledesattentistes.fr/genshin/";
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [weapon, setWeapon] = React.useState<Weapon>();
    const [stat1, setStats1] = React.useState<Stat>();
    const [stat2, setStats2] = React.useState<Stat>();
    const [weapontype, setWeaponType] = React.useState<WeaponType>();

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
        fetch(`${apiPrefix}${apiWeaponPrefix}/${route.params.id}`, { headers })
            .then((response) => response.json())
            .then((json1) => {
                setWeapon(json1);

                return Promise.all([
                    fetch(`${apiPrefix}${apiStatsPrefix}${json1.data.attributes.ATQ}`, { headers }).then((response) => {response.json()}),
                    fetch(`${apiPrefix}${apiStatsPrefix}${json1.data.attributes.Substat}`, { headers }).then((response) => {response.json()}),
                    fetch(`${apiPrefix}${apiWeaponTypesPrefix}${json1.data.attributes.WeaponType}`, { headers }).then((response) => {response.json()})
                ])

            })
            .then(([rep1, rep2, rep3]: any) => {
                console.log(rep1);
                console.log(rep2);
                console.log(rep3);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []);

    const color: string = GetColor(typeof weapon === 'undefined' ? 1 : weapon.data.attributes.Rarity);

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={[styles.titlePage, {color: color}]}>{weapon?.data.attributes.Name}</Text>
                <Image style={styles.image} source={{uri: images + weapon?.data.attributes.Images + '.png'}}/>
                <Text style={styles.text}>{weapon?.data.attributes.Description}</Text>

                <Text style={[styles.title, {color: color, borderBottomColor: color}]}>Stats</Text>

                <View style={styles.detailBloc}>
                        <Text style={styles.text}>Niveau</Text>
                        <Text style={styles.text}>Attaque de base</Text>
                        <Text style={styles.text}>Type</Text>
                </View>

                <View style={styles.detailBloc}>
                        <Text style={styles.text}>{weapon?.data.attributes.Name}</Text>
                        <Text style={styles.text}>{stat1?.data.attributes.Type}</Text>
                        <Text style={styles.text}>{stat2?.data.attributes.Type}</Text>
                        <Text style={styles.text}>{weapontype?.data.attributes.Name}</Text>

                </View>
                
            </ScrollView>
            <Menubar navigation={navigation}/>
        </View>
    );
};

const GetColor = (rarity: number) => {
    let colors: string;

    if(rarity == 1){
        colors = '#79838F';
    }else if(rarity == 2){
        colors = '#53886A';
    }else if(rarity == 3){
        colors = '#4A90A8';
    }else if(rarity == 4){
        colors = '#AC7FC0';
    }else if(rarity == 5){
        colors = '#D39B4F';
    }else{
        colors = '#ccc';
    }

    return colors;
}
