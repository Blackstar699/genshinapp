//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//additional packages
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/databaseCharacters';
//constantes globales
import { images, globalURL, headers, GetGradientColorCharacters } from '../../GlobalConsts';
//types
import { Characters } from '../../types/Characters';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'DatabaseCharacters'>;
}

export const DatabaseCharacters: FunctionComponent<Props> = ({ navigation }) => {

    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(true);
    const [check5, setCheck5] = useState(true);
    const [check6, setCheck6] = useState(true);
    const [check7, setCheck7] = useState(true);
    const [check8, setCheck8] = useState(true);
    const [check9, setCheck9] = useState(true);

    const [isLoading, setLoading] = useState(true);
    const [characters, setCharacters] = React.useState<Characters>();

    useEffect(() => {
        fetch(globalURL + '/Characters?pagination[pageSize]=100&sort[0]=Name%3Aasc',
            {
                method: 'GET',
                headers: headers
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
                        return <LinearGradient style={styles.bloc} colors={GetGradientColorCharacters(item.attributes.Element)} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('DatabaseCharacter', { id: item.id, constellations: item.attributes.Constellations, weapontype: item.attributes.WeaponType, pv: item.attributes.PV, atq: item.attributes.ATQ, def: item.attributes.DEF, substat: item.attributes.SubStat, passives: item.attributes.Passives })}>
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

const SortElement = (datas: Characters|undefined, check3: boolean, check4: boolean, check5: boolean, check6: boolean, check7: boolean, check8: boolean, check9: boolean,) => {

    let Element: Array<string> = [];

    check6 ? Element.push('Electro') : null;
    check7 ? Element.push('Geo') : null;
    check3 ? Element.push('Pyro') : null;
    check4 ? Element.push('Hydro') : null;
    check9 ? Element.push('Anemo') : null;
    check8 ? Element.push('Dendro') : null;
    check5 ? Element.push('Cryo') : null;

    if (typeof datas !== 'undefined') {
        return datas.data.filter(item => Element.includes(item.attributes.Element));
    }
};
