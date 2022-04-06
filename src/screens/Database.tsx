import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import {RootStackParamList} from "../RootStackParamList";
import {Text, View} from "react-native";
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
                <Text style={styles.text}>DATABASE</Text>
                <Text style={styles.text}>Dev in progress...</Text>
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
};
