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
    const images = "https://images.latabledesattentistes.fr/genshin/";
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("DatabaseCharacters")}>
                    <Image style={styles.image}  source={{ uri: images+'shenhe_icon_big.png' }}/>
                    <Text style={styles.text}>Personnages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("Inventory")}>
                    <Image style={styles.image}  source={{ uri: images+'polar_star.png' }}/>
                    <Text style={styles.text}>Armes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("DatabaseArtifacts")}>
                    <Image style={styles.image}  source={{ uri: images+'emblem_of_severed_fate_flower_of_life.png' }}/>
                    <Text style={styles.text}>Artéfacts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("Inventory")}>
                    <Image style={styles.image}  source={{ uri: images+'philosophies_of_light.png' }}/>
                    <Text style={styles.text}>Matériaux</Text>
                </TouchableOpacity>
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
};
