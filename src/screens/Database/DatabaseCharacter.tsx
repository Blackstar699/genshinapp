import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import { RootStackParamList } from "../../RootStackParamList";
import { Text, View, ScrollView, Image } from "react-native";
import styles from "../../styles/databaseCharacter";
import { Menubar } from "../props/Menubar";
import { Character } from "../../types/Characters";

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseCharacter'>;
}

export const DatabaseCharacter: FunctionComponent<Props> = ({ route }) => {
    const strapi = "https://strapi-genshin.latabledesattentistes.fr/uploads/format_webp/";
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [character, setCharacter] = React.useState<Character>();

    useEffect(() => {
        fetch('https://strapi-genshin.latabledesattentistes.fr/api/Characters/' + route.params.id,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyODc0NTM3LCJleHAiOjE2NTU0NjY1Mzd9.1QLHOdVcF--qS8ch_MiO-EB0sJM0JzrZt4SL0jGxnRE'
                }
            }
        )
            .then((response) => response.json())
            .then((json) => setCharacter(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const color: string = GetColor(typeof character === 'undefined' ? " " : character.data.attributes.Element);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={[styles.titlePage, { color: color }]}>{character?.data.attributes.Name}</Text>
                <Image style={styles.characterpreview} source={{ uri: strapi + ImagesSplit(typeof character === 'undefined' ? '' : character.data.attributes.images, 'raiden_gacha_splash') }} />
                <Text style={styles.quote}>{character?.data.attributes.Description}</Text>
                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Identité</Text>
                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Histoire</Text>


            </ScrollView>
            <Menubar navigation={navigation} />
        </View>
    );
};


const ImagesSplit = (images: string, pattern: string) => {
    let split: Array<string>;
    let returnString: string = '';

    split = images.split(' | ');

    split.forEach(element => {
        if (element.includes(pattern)) {
            returnString = element;
        }
    });

    return returnString;
}

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
