//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
//imports navigation
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/databaseMaterial';
//constantes globales
import { images, globalURL, headers, GetColor } from '../../GlobalConsts';
//types
import { Material } from '../../types/Materials';

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseMaterial'>;
}

export const DatabaseMaterial: FunctionComponent<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [material, setMaterial] = React.useState<Material>();

    useEffect(() => {
        fetch(globalURL + '/materials/' + route.params.id,
            {
                method: 'GET',
                headers: headers
            }
        )
          .then((response) => response.json())
          .then((json) => setMaterial(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    const color = GetColor(typeof material === 'undefined' ? 1 : material.data.attributes.Rarity);

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
