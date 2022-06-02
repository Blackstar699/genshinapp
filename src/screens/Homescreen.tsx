import { NavigationProp } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import {RootStackParamList} from '../RootStackParamList';
import { Text, View } from 'react-native';
import styles from '../styles/homescreen';
import { Menubar } from './props/Menubar';

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
