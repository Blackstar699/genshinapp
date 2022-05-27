import { NavigationProp } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import {RootStackParamList} from "../RootStackParamList";
import {Image, ImageBackground,Text, View, Button} from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../styles/homescreen";
import { Menubar } from "./props/Menubar";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>HOME</Text>
                <Button title="debug login" onPress={() => AsyncStorage.removeItem('@UserData')}/>
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
};
