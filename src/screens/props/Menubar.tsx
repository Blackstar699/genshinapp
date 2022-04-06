import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import {RootStackParamList} from "../../RootStackParamList";
import {Button, Image, ImageBackground, View} from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../../styles/menubar";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const Menubar: FunctionComponent<Props> = ({ navigation }) => {
    return(
        <View style={styles.menubar}>
            <IconButton icon={require("../../images/inventory.png")} color="#95a5a6" size={35} onPress={() => navigation.navigate("Inventory")}/>
            <IconButton icon={require("../../images/database.png")} color="#95a5a6" size={35} onPress={() => navigation.navigate("Database")}/>
            <IconButton icon={require("../../images/home.png")} color="#95a5a6" size={35} onPress={() => navigation.navigate("Home")}/>
            <IconButton icon={require("../../images/params.png")} color="#95a5a6" size={35} onPress={() => navigation.navigate("Params")}/>
        </View>
    );
};
