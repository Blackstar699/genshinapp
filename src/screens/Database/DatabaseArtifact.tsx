import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import {RootStackParamList} from "../../RootStackParamList";
import {Text, View, ScrollView, Image } from "react-native";
import styles from "../../styles/databaseArtifact";
import { Menubar } from "../props/Menubar";
import { ArtifactSet } from "../../types/ArtifactSets";

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseArtifact'>;
}

export const DatabaseArtifact: FunctionComponent<Props> = ({ route }) => {
    const strapi = "https://strapi-genshin.latabledesattentistes.fr/uploads/format_webp/";
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [artifact, setArtifact] = React.useState<ArtifactSet>();

    useEffect(() => {
        fetch('https://strapi-genshin.latabledesattentistes.fr/api/artifact-sets/'+route.params.id,
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
          .then((json) => setArtifact(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    const color: string = GetColor(typeof artifact === 'undefined' ? 1 : artifact.data.attributes.RarityMax);

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                <Text style={[styles.titlePage, {color: color}]}>{artifact?.data.attributes.Name}</Text>
                
                <Text style={[styles.title, {color: color, borderBottomColor: color}]}>Bonus</Text>
                <Text style={styles.text}>2 Pièces:{'\n'}{artifact?.data.attributes.Bonus2}</Text>
                <Text style={styles.text}>4 Pièces:{'\n'}{artifact?.data.attributes.Bonus4}</Text>

                <Text style={[styles.title, {color: color, borderBottomColor: color}]}>Pièces</Text>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{uri: strapi + ImagesSplit(typeof artifact === 'undefined' ? '' : artifact.data.attributes.Images, 'flower_of_life')}}/>
                    <Text style={styles.detailText}>{artifact?.data.attributes.Flower}{'\n'}{artifact?.data.attributes.DescriptionFlower}</Text>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{uri: strapi + ImagesSplit(typeof artifact === 'undefined' ? '' : artifact.data.attributes.Images, 'plume_of_death')}}/>
                    <Text style={styles.detailText}>{artifact?.data.attributes.Plume}{'\n'}{artifact?.data.attributes.DescriptionPlume}</Text>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{uri: strapi + ImagesSplit(typeof artifact === 'undefined' ? '' : artifact.data.attributes.Images, 'sands_of_eon')}}/>
                    <Text style={styles.detailText}>{artifact?.data.attributes.Sand}{'\n'}{artifact?.data.attributes.DescriptionSand}</Text>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{uri: strapi + ImagesSplit(typeof artifact === 'undefined' ? '' : artifact.data.attributes.Images, 'goblet_of_eonothem')}}/>
                    <Text style={styles.detailText}>{artifact?.data.attributes.Goblet}{'\n'}{artifact?.data.attributes.DescriptionGoblet}</Text>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{uri: strapi + ImagesSplit(typeof artifact === 'undefined' ? '' : artifact.data.attributes.Images, 'circlet_of_logos')}}/>
                    <Text style={styles.detailText}>{artifact?.data.attributes.Circlet}{'\n'}{artifact?.data.attributes.DescriptionCirclet}</Text>
                </View>

            </ScrollView>
            <Menubar navigation={navigation}/>
        </View>
    );
};


const ImagesSplit = (images: string, pattern: string) => {
    let split: Array<string>;
    let returnString: string = '';

    split = images.split(' | ');

    split.forEach(element => {
        if(element.includes(pattern)){
            returnString = element;
        }
    });

    return returnString;
}

const GetColor = (rarity: number) => {
    let colors: string;

    if(rarity == 3){
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
