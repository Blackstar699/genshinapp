import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import {RootStackParamList} from "../../RootStackParamList";
import {Text, View, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "../../styles/databaseArtifact";
import { Menubar } from "../props/Menubar";
import { ArtifactSet } from "../../types/ArtifactSets";
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
    route: RouteProp<RootStackParamList, 'DatabaseArtifact'>;
}

export const DatabaseArtifact: FunctionComponent<Props> = ({ route }) => {
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

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Bonus</Text>
                <Text style={styles.text}>2 Pièces:</Text>
                <Text style={styles.text}>{artifact?.data.attributes.Bonus2}</Text>
                <Text style={styles.text}>4 Pièces:</Text>
                <Text style={styles.text}>{artifact?.data.attributes.Bonus4}</Text>
                <Text style={styles.title}>Pièces</Text>
                <Text style={styles.text}>{artifact?.data.attributes.Flower}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.DescriptionFlower}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.Plume}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.DescriptionPlume}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.Sand}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.DescriptionSand}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.Goblet}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.DescriptionGoblet}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.Circlet}</Text>
                <Text style={styles.text}>{artifact?.data.attributes.DescriptionCirclet}</Text>
            </ScrollView>
            <Menubar navigation={navigation}/>
        </View>
    );
};
