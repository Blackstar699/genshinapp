//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
//imports navigation
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/databaseArtifact';
//constantes globales
import { images, globalURL, headers, GetColor } from '../../GlobalConsts';
//types
import { ArtifactSet } from '../../types/ArtifactSets';

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseArtifact'>;
}

export const DatabaseArtifact: FunctionComponent<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isLoading, setLoading] = useState(true);
    const [artifact, setArtifact] = React.useState<ArtifactSet>();

    useEffect(() => {
        fetch(globalURL + '/artifact-sets/' + route.params.id,
            {
                method: 'GET',
                headers: headers
            }
        )
        .then((response) => response.json())
        .then((json) => setArtifact(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const color = GetColor(typeof artifact === 'undefined' ? 1 : artifact.data.attributes.RarityMax);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                <Text style={[styles.titlePage, { color: color }]}>{artifact?.data.attributes.Name}</Text>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Bonus</Text>

                <View style={styles.detailBloc}>
                    <Text style={styles.textBold}>2 Pièces</Text>
                    <Text style={styles.text}>{artifact?.data.attributes.Bonus2}</Text>
                </View>
                <View style={styles.detailBloc}>
                    <Text style={styles.textBold}>4 Pièces</Text>
                    <Text style={styles.text}>{artifact?.data.attributes.Bonus4}</Text>
                </View>

                <Text style={[styles.title, { color: color, borderBottomColor: color }]}>Pièces</Text>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{ uri: images + artifact?.data.attributes.Images + '_flower_of_life.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{artifact?.data.attributes.Flower}</Text>
                        <Text style={styles.detailText}>{artifact?.data.attributes.DescriptionFlower}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{ uri: images + artifact?.data.attributes.Images + '_plume_of_death.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{artifact?.data.attributes.Plume}</Text>
                        <Text style={styles.detailText}>{artifact?.data.attributes.DescriptionPlume}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{ uri: images + artifact?.data.attributes.Images + '_sands_of_eon.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{artifact?.data.attributes.Sand}</Text>
                        <Text style={styles.detailText}>{artifact?.data.attributes.DescriptionSand}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{ uri: images + artifact?.data.attributes.Images + '_goblet_of_eonothem.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{artifact?.data.attributes.Goblet}</Text>
                        <Text style={styles.detailText}>{artifact?.data.attributes.DescriptionGoblet}</Text>
                    </View>
                </View>

                <View style={styles.detailBloc}>
                    <Image style={styles.image} source={{ uri: images + artifact?.data.attributes.Images + '_circlet_of_logos.png' }} />
                    <View style={styles.detailBlocText}>
                        <Text style={styles.detailTextBold}>{artifact?.data.attributes.Circlet}</Text>
                        <Text style={styles.detailText}>{artifact?.data.attributes.DescriptionCirclet}</Text>
                    </View>
                </View>

            </ScrollView>
            <Menubar navigation={navigation} />
        </View>
    );
};
