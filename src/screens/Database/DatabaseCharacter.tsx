import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState, Component } from "react";
import { RootStackParamList } from "../../RootStackParamList";
import { Text, View, ScrollView, Image } from "react-native";
import styles from "../../styles/databaseCharacter";
import { Menubar } from "../props/Menubar";
import { Character } from "../../types/Characters";
import { Constellations } from "../../types/Constellations";

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseCharacter'>;
}
//https://strapi-genshin.latabledesattentistes.fr/api/Constellation/' + character?.data.attributes.Constelations
export const DatabaseCharacter: FunctionComponent<Props> = ({ route }) => {
    const images = "https://images.latabledesattentistes.fr/genshin/";
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [character, setCharacter] = React.useState<Character>();
    const [constellation, setConstellation] = React.useState<Constellations>();

    const apiPrefix = 'https://strapi-genshin.latabledesattentistes.fr/api';
    const apiCharacterPrefix = '/Characters';
    const apiConstellationPrefix = '/constellations?filters[ID_Constellations][$eq]=';
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyODc0NTM3LCJleHAiOjE2NTU0NjY1Mzd9.1QLHOdVcF--qS8ch_MiO-EB0sJM0JzrZt4SL0jGxnRE'
    };
    useEffect(() => {
        fetch(`${apiPrefix}${apiCharacterPrefix}/${route.params.id}`, { headers })
            .then((response) => response.json())
            .then((json1) => {
                setCharacter(json1);

                return fetch(`${apiPrefix}${apiConstellationPrefix}${json1.data.attributes.Constellations}`, { headers })
            })
            .then((response) => response.json())
            .then((json2) => setConstellation(json2))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    const color: string = GetColor(typeof character === 'undefined' ? " " : character.data.attributes.Element);

    return (
        <View style={styles.container}>
            {typeof character != 'undefined' ?
                <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                    <Text style={[styles.titlePage, { color: color }]}>{character?.data.attributes.Name}</Text>
                    <Image style={styles.characterpreview} source={{ uri: images + character?.data.attributes.Images + '_gacha_splash.png' }} />
                    <Text style={styles.quote}>{character?.data.attributes.Description}</Text>
                    <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Identité</Text>
                    <Text style={styles.quote}>Element :  {character?.data.attributes.Element}</Text>
                    <Text style={styles.quote}>Rareté : {character?.data.attributes.Rarity}</Text>
                    <Text style={styles.quote}>Sexe : {character?.data.attributes.Gender}</Text>
                    <Text style={styles.quote}>Arme de Prédilection : {character?.data.attributes.WeaponType}</Text>
                    <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Histoire</Text>
                    <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Galerie</Text>
                    <Image style={styles.characterpreview} source={{ uri: images + character?.data.attributes.Images + '_gacha_card.png' }} />
                    <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Compétences</Text>

                    <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Constellation</Text>
                    <Image style={styles.Constel} source={{ uri: images + character?.data.attributes.Images + '_constellation.png' }} />
                    <View style={styles.detailBloc}>
                        <Image style={styles.image} source={{ uri: images + character?.data.attributes.Images + '_constellation_1.png' }} />
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.C1}{'\n'}{constellation?.data[0].attributes.DescriptionC1}</Text>
                    </View>

                    <View style={styles.detailBloc}>
                        <Image style={styles.imageconstellation} source={{ uri: images + character?.data.attributes.Images + '_constellation_2.png' }} />
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.C2}{'\n'}{constellation?.data[0].attributes.DescriptionC2}</Text>
                    </View>

                    <View style={styles.detailBloc}>
                        <Image style={styles.imageconstellation} source={{ uri: images + character?.data.attributes.Images + '_constellation_3.png' }} />
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.C3}{'\n'}{constellation?.data[0].attributes.DescriptionC3}</Text>
                    </View>

                    <View style={styles.detailBloc}>
                        <Image style={styles.imageconstellation} source={{ uri: images + character?.data.attributes.Images + '_constellation_4.png' }} />
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.C4}{'\n'}{constellation?.data[0].attributes.DescriptionC4}</Text>
                    </View>

                    <View style={styles.detailBloc}>
                        <Image style={styles.imageconstellation} source={{ uri: images + character?.data.attributes.Images + '_constellation_5.png' }} />
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.C5}{'\n'}{constellation?.data[0].attributes.DescriptionC5}</Text>
                    </View>
                    <View style={styles.detailBloc}>
                        <Image style={styles.imageconstellation} source={{ uri: images + character?.data.attributes.Images + '_constellation_6.png' }} />
                        <Text style={styles.detailText}>{constellation?.data[0].attributes.C5}{'\n'}{constellation?.data[0].attributes.DescriptionC6}</Text>
                    </View>
                    <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Elévation</Text>
                </ScrollView> : <View></View>}
            <Menubar navigation={navigation} />
        </View>
    );
};

const GetColor = (element: string) => {
    let colors: string;

    if (element == "Geo") {
        colors = '#bfa34e';
    } else if (element == "Electro") {
        colors = '#af71ca';
    } else if (element == "Pyro") {
        colors = '#bc7057';
    } else if (element == "Hydro") {
        colors = '#297bbe';
    } else if (element == "Dendro") {
        colors = '#D39B4F';
    } else if (element == "Anemo") {
        colors = '#48bcb4';
    } else if (element == "Cryo") {
        colors = '#1c4d80';
    } else {
        colors = '#ccc';
    }

    return colors;
}
