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
import styles from '../../styles/databaseArtifacts';
//constantes globales
import { images, globalURL, headers, GetGradientColor } from '../../GlobalConsts';
//types
import { ArtifactSets } from '../../types/ArtifactSets';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'DatabaseArtifacts'>;
}

export const DatabaseArtifacts: FunctionComponent<Props> = ({ navigation }) => {

    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check3, setCheck3] = useState(true);

    const [isLoading, setLoading] = useState(true);
    const [artifacts, setArtifacts] = React.useState<ArtifactSets>();

    useEffect(() => {
        fetch(globalURL + '/artifact-sets?pagination[pageSize]=100&sort[0]=Name%3Aasc',
            {
                method: 'GET',
                headers: headers
            }
        )
          .then((response) => response.json())
          .then((json) => {setArtifacts(json)})
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.sorting}>
                <Text style={styles.sortingText}>Rareté Max: </Text>
                <BouncyCheckbox isChecked={check1} text='3' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck1(!check1);}}/>
                <BouncyCheckbox isChecked={check2} text='4' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck2(!check2);}}/>
                <BouncyCheckbox isChecked={check3} text='5' fillColor='#3867D6' style={styles.checkbox} textStyle={{textDecorationLine: 'none', color: '#fff'}} useNativeDriver={false} onPress={() => {setCheck3(!check3);}}/>
            </View>

            <FlatList style={styles.list} showsVerticalScrollIndicator={false} numColumns={2}
                data={SortData(artifacts, check1, check2, check3)}
                renderItem={
                    ({item}) => {
                        return  <LinearGradient style={styles.bloc} colors={GetGradientColor(item.attributes.RarityMax)} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('DatabaseArtifact', {id: item.id})}>
                                        <View style={styles.imageView}>
                                            <Image style={styles.image} source={{ uri: images + item.attributes.Images + '_goblet_of_eonothem.png' }}/>
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

const SortData = (datas: ArtifactSets|undefined, check1: boolean, check2: boolean, check3: boolean) => {

    let rarity: Array<number> = [];

    check1 ? rarity.push(3) : null;
    check2 ? rarity.push(4) : null;
    check3 ? rarity.push(5) : null;

    if(typeof datas !== 'undefined'){
        return datas.data.filter(item => rarity.includes(item.attributes.RarityMax));
    }
};
