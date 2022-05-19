import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import {RootStackParamList} from "../RootStackParamList";
import {Text, View, ScrollView, TouchableOpacity, Image} from "react-native";
import styles from "../styles/database";
import { Menubar } from "./props/Menubar";

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Database'>;
}

export const Database: FunctionComponent<Props> = ({ navigation }) => {
    const strapi = "https://strapi-genshin.latabledesattentistes.fr/uploads/format_webp/";
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("DatabaseCharacters")}>
                    <Image style={styles.image}  source={{ uri: strapi+'shenhe_icon_big_f03714c54f.png' }}/>
                    <Text style={styles.text}>Personnages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("Inventory")}>
                    <Image style={styles.image}  source={{ uri: strapi+'polar_star_icon_60d9061433.png' }}/>
                    <Text style={styles.text}>Armes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("DatabaseArtifacts")}>
                    <Image style={styles.image}  source={{ uri: strapi+'emblem_of_severed_fate_flower_of_life_81bd35fc04.png' }}/>
                    <Text style={styles.text}>Artéfacts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("Inventory")}>
                    <Image style={styles.image}  source={{ uri: strapi+'Enseignement_de_la_Resistance_f09342aed6.webp' }}/>
                    <Text style={styles.text}>Matériaux</Text>
                </TouchableOpacity>
            </ScrollView>
            <Menubar navigation={navigation}/>
        </View>
    );
};
