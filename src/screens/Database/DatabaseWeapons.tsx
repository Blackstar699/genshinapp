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
import styles from '../../styles/databaseWeapons';
//constantes globales
import { images, globalURL, headers, GetGradientColor } from '../../GlobalConsts';
//types
import { Weapons } from '../../types/Weapons';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'DatabaseWeapons'>;
}

export const DatabaseWeapons: FunctionComponent<Props> = ({ navigation }) => {

    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(true);
    const [check5, setCheck5] = useState(true);

    const [isLoading, setLoading] = useState(true);
    const [weapons, setWeapons] = React.useState<Weapons>();

    useEffect(() => {
        fetch(globalURL + '/weapons?pagination[pageSize]=300&sort[0]=Name%3Aasc',
            {
                method: 'GET',
                headers: headers
            }
        )
        .then((response) => response.json())
        .then((json) => {setWeapons(json)})
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.sorting}>
                <Text style={styles.sortingText}>Rareté: </Text>
                <BouncyCheckbox isChecked={check1} text='1' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck1(!check1);}}/>
                <BouncyCheckbox isChecked={check2} text='2' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck2(!check2);}}/>
                <BouncyCheckbox isChecked={check3} text='3' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck3(!check3);}}/>
                <BouncyCheckbox isChecked={check4} text='4' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck4(!check4);}}/>
                <BouncyCheckbox isChecked={check5} text='5' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck5(!check5);}}/>
            </View>
            <FlatList style={styles.list} showsVerticalScrollIndicator={false} numColumns={2}
                data={SortData(weapons, check1, check2, check3, check4, check5)}
                renderItem={
                    ({item}) => {
                        return  <LinearGradient style={styles.bloc} colors={GetGradientColor(item.attributes.Rarity)} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('DatabaseWeapon', {id: item.id, atq: item.attributes.ATQ, substat: item.attributes.SubStat, weapontype: item.attributes.WeaponType})}>
                                        <View style={styles.imageView}>
                                            <Image style={styles.image} source={{ uri: images + item.attributes.Images + '.png' }}/>
                                        </View>
                                        <Text style={styles.text}>{item.attributes.Name}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                    }
                }
            />
            <Menubar navigation={navigation}/>
        </View>
    );
};

const SortData = (datas: Weapons|undefined, check1: boolean, check2: boolean, check3: boolean, check4: boolean, check5: boolean) => {

    let rarity: Array<number> = [];

    check1 ? rarity.push(1) : null;
    check2 ? rarity.push(2) : null;
    check3 ? rarity.push(3) : null;
    check4 ? rarity.push(4) : null;
    check5 ? rarity.push(5) : null;

    if(typeof datas !== 'undefined'){
        return datas.data.filter(item => rarity.includes(item.attributes.Rarity));
    }
};
