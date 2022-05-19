import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import {RootStackParamList} from "../../RootStackParamList";
import {Text, View, ScrollView, TouchableOpacity, Image} from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../../styles/databaseCharacters";
import { Menubar } from "../props/Menubar";

type Props = {
    navigation: NavigationProp<RootStackParamList, 'DatabaseCharacters'>;
}

export const DatabaseCharacters: FunctionComponent<Props> = ({ navigation }) => {

    const strapi = "https://strapi-genshin.latabledesattentistes.fr/uploads/format_webp/";

    const [isLoading, setLoading] = useState(true);
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        fetch('https://strapi-genshin.latabledesattentistes.fr/api/artifact-sets',
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
          .then((json) => setCharacters(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      console.log(characters);

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.text}>CHARACTERS</Text>
                <Text style={styles.text}>Dev in progress...</Text>
            </ScrollView>
            <Menubar navigation={navigation}/>
        </View>
    );
};
