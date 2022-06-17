//imports composants React
import React, { FunctionComponent } from 'react';
import { Text, View, ScrollView } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//barre de menu
import { Menubar } from '../props/Menubar';
//styles CSS
import styles from '../../styles/inventoryCharacters';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'InventoryCharacters'>;
}

export const InventoryCharacters: FunctionComponent<Props> = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>Coming Soon...</Text>
            </ScrollView>

            <Menubar navigation={navigation}/>
        </View>
    );
};
