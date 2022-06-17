//imports composants React
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList';
//barre de menu
import { Menubar } from './props/Menubar';
//styles CSS
import styles from '../styles/homescreen';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>HOME</Text>
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
};
