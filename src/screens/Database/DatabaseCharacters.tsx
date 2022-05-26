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
    const images = "https://images.latabledesattentistes.fr/genshin/";

    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);

    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(true);
    const [check5, setCheck5] = useState(true);
    const [check6, setCheck6] = useState(true);
    const [check7, setCheck7] = useState(true);
    const [check8, setCheck8] = useState(true);
    const [check9, setCheck9] = useState(true);

    const [isLoading, setLoading] = useState(true);
    const [characters, setCharacters] = React.useState<Characters>();

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
            .then((json) => { setCharacters(json) })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.sorting}>
                <Text style={styles.sortingText}>Elements </Text>
                <BouncyCheckbox isChecked={check3} text='Pyro' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck3(!check3); }} />
                <BouncyCheckbox isChecked={check4} text='Hydro' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck4(!check4); }} />
                <BouncyCheckbox isChecked={check5} text='Cryo' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck5(!check5); }} />
                <BouncyCheckbox isChecked={check6} text='Electro' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck6(!check6); }} />
                <BouncyCheckbox isChecked={check7} text='Geo' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck7(!check7); }} />
                <BouncyCheckbox isChecked={check8} text='Dendro' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck8(!check8); }} />
                <BouncyCheckbox isChecked={check9} text='Anemo' fillColor='#3867D6' style={styles.checkbox} textStyle={{ textDecorationLine: 'none', color: '#fff' }} useNativeDriver={false} onPress={() => { setCheck9(!check9); }} />
            </View>
            <FlatList style={styles.list} showsVerticalScrollIndicator={false} numColumns={2}
                data={SortElement(characters, check3, check4, check5, check6, check7, check8, check9)}
                renderItem={
                    ({ item }) => {
                        return <LinearGradient style={styles.bloc} colors={GradientColor(item.attributes.Element)} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("DatabaseCharacter", { id: item.id })}>
                                <View style={styles.imageView}>
                                    <Image style={styles.image} source={{ uri: images + item.attributes.Images + '_icon_big.png' }} />
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

const GradientColor = (element: string) => {
    let colors: Array<string>;

    if (element == "Electro") {
        colors = ['#52276e', '#aF71ca'];
    } else if (element == "Geo") {
        colors = ['#544218', '#bfa34e'];
    } else if (element == "Pyro") {
        colors = ['#572224', '#bc7057'];
    } else if (element == "5") {
        colors = ['#0e3685', '#297bbe'];
    } else if (element == "Anemo") {
        colors = ['#15524a', '#48bcb4'];
    } else if (element == "Dendro") {
        colors = ['#ffffff', '#ffffff'];
    } else if (element == "Cryo") {
        colors = ['#347a93', '#72d0eb'];
    } else if (element == "Hydro") {
        colors = ['#0e3685', '#297bbe'];
    }

    else {
        colors = ['#282828'];
    }

    return colors;
}


const SortElement = (datas: Characters | undefined, check3: boolean, check4: boolean, check5: boolean, check6: boolean, check7: boolean, check8: boolean, check9: boolean,) => {

    let Element: Array<string> = [];


    check6 ? Element.push('Electro') : null;
    check7 ? Element.push("Geo") : null;
    check3 ? Element.push("Pyro") : null;
    check4 ? Element.push("Hydro") : null;
    check9 ? Element.push("Anemo") : null;
    check8 ? Element.push("Dendro") : null;
    check5 ? Element.push("Cryo") : null;




    if (typeof datas !== 'undefined') {
        return datas.data.filter(item => Element.includes(item.attributes.Element));
    }
}


