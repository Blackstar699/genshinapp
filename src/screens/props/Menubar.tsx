import { NavigationProp, useRoute } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import {RootStackParamList} from "../../RootStackParamList";
import {Button, Image, ImageBackground, View} from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../../styles/menubar";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const Menubar: FunctionComponent<Props> = ({ navigation }) => {
    const route = useRoute();

    return(
        <View style={styles.menubar}>
            <IconButton icon={require("../../images/inventory.png")} color={route.name == "Inventory" ? "#3867d6" : "#95a5a6"} size={35} onPress={() => navigation.navigate("Inventory")}/>
            <IconButton icon={require("../../images/home.png")} color={route.name == "Home" ? "#3867d6" : "#95a5a6"} size={35} onPress={() => navigation.navigate("Home")}/>
            <IconButton icon={require("../../images/database.png")} color={route.name == "Database" ? "#3867d6" : "#95a5a6"} size={35} onPress={() => navigation.navigate("Database")}/>
            <IconButton icon={require("../../images/params.png")} color={route.name == "Params" ? "#3867d6" : "#95a5a6"} size={35} onPress={() => navigation.navigate("Params")}/>
        </View>
    );
};
