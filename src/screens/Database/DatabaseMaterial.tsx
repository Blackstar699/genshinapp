import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import {RootStackParamList} from "../../RootStackParamList";
import {Text, View, ScrollView, Image } from "react-native";
import styles from "../../styles/databaseMaterial";
import { Menubar } from "../props/Menubar";
import { Material } from "../../types/Materials";

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseMaterial'>;
}

export const DatabaseMaterial: FunctionComponent<Props> = ({ route }) => {
    const images = "https://images.latabledesattentistes.fr/genshin/";
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [material, setMaterial] = React.useState<Material>();

    useEffect(() => {
        fetch('https://strapi-genshin.latabledesattentistes.fr/api/materials/'+route.params.id,
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
          .then((json) => setMaterial(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    const color: string = GetColor(typeof material === 'undefined' ? 1 : material.data.attributes.Rarity);

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                <Text style={[styles.titlePage, {color: color}]}>{material?.data.attributes.Name}</Text>

                <Image style={styles.image} source={{uri: images + material?.data.attributes.Images + '.png'}}/>
                
                <Text style={[styles.title, {color: color, borderBottomColor: color}]}>Informations</Text>
                <Text style={styles.text}>ID: {material?.data.attributes.ID_Materials}</Text>
                <Text style={styles.text}>Type: {material?.data.attributes.Type}</Text>
                <Text style={styles.text}>Source: {material?.data.attributes.Source}</Text>
                <Text style={styles.text}>{material?.data.attributes.Description}</Text>

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
