import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import { RootStackParamList } from "../../RootStackParamList";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "../../styles/databaseCharacters";
import { Menubar } from "../props/Menubar";
import { Characters } from "../../types/Characters";
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
    navigation: NavigationProp<RootStackParamList, 'DatabaseCharacters'>;
}

export const DatabaseCharacters: FunctionComponent<Props> = ({ navigation }) => {
    const strapi = "https://strapi-genshin.latabledesattentistes.fr/uploads/format_webp/";

    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);

    const [isLoading, setLoading] = useState(true);
    const [artifacts, setArtifacts] = React.useState<Characters>();

    let url: string = 'https://strapi-genshin.latabledesattentistes.fr/api/Characters?pagination[pageSize]=100&sort[0]=Name%3Aasc';

    useEffect(() => {
        fetch(url,
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
            .then((json) => { setArtifacts(json) })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.sorting}>
                <Text style={styles.sortingText}>Rareté Max: </Text>
                <BouncyCheckbox isChecked={check1} text='4' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck1(!check1); }} />
                <BouncyCheckbox isChecked={check2} text='5' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck2(!check2); }} />
            </View>
            <FlatList style={styles.list} showsVerticalScrollIndicator={false} numColumns={2}
                data={SortData(artifacts, check1, check2)}
                renderItem={
                    ({ item }) => {
                        return <LinearGradient style={styles.bloc} colors={GradientColor(item.attributes.Element)} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("DatabaseCharacter", { id: item.id })}>
                                <View style={styles.imageView}>
                                    <Image style={styles.image} source={{ uri: strapi + ImagesSplit(item.attributes.images) }} />
                                </View>
                                <Text style={styles.text}>{item.attributes.Name}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    }
                }
            />
            <Menubar navigation={navigation} />
        </View>
    );
};


const ImagesSplit = (images: string) => {
    let split: Array<string>;
    let returnString: string = '';

    split = images.split(' | ');

    split.forEach(element => {
        if (element.includes('icon_big')) {
            returnString = element;
        }
    });

    return returnString;
}

const GradientColor = (element: string) => {
    let colors: Array<string>;

    if (element == "Electro") {
        colors = ['#52276e', '#aF71ca'];
    } else if (element == "Geo") {
        colors = ['#544218', '#bfa34e'];
    } else if (element == "Pyro") {
        colors = ['#572224', '#bc7057'];
    } else if (element == "Hydro") {
        colors = ['#0e3685', '#297bbe'];
    } else if (element == "Anemo") {
        colors = ['#15524a', '#48bcb4'];
    } else if (element == "Dendro") {
        colors = ['#ffffff', '#ffffff'];
    } else if (element == "Cryo") {
        colors = ['#1c4d80', '#1c4d80'];
    }

    else {
        colors = ['#282828'];
    }

    return colors;
}

const SortData = (datas: Characters | undefined, check1: boolean, check2: boolean) => {

    let sum: number = 0;
    check1 ? sum += 1 : sum;
    check2 ? sum += 1.5 : sum;

    if (typeof datas !== 'undefined') {
        switch (sum) {
            case 1:
                return datas.data.filter(item => item.attributes.Rarity == 4);
            case 1.5:
                return datas.data.filter(item => item.attributes.Rarity == 5);
            case 2:
                return datas.data.filter(item => item.attributes.Rarity != 5);
            case 2.5:
                return datas.data.filter(item => item.attributes.Rarity != 4);
            case 3:
                return datas.data;
            default:
                return null;
        }
    }
}
