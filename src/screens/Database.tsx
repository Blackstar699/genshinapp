import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import {RootStackParamList} from "../RootStackParamList";
import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../styles/database";
import { Menubar } from "./props/Menubar";

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Database'>;
}

export const Database: FunctionComponent<Props> = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate("Inventory")}>
                    <Text>Personnages</Text>
                </TouchableOpacity>
                <View style={styles.bloc}>
                    <Text>Armes</Text>
                </View>
                <View style={styles.bloc}>
                    <Text>Artéfacts</Text>
                </View>
                <View style={styles.bloc}>
                    <Text>Matériaux</Text>
                </View>
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
};
