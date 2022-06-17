//imports composants React
import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
//imports navigation
import { NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';
//package react-native-paper pour avoir des boutons avec des icônes
import { IconButton } from 'react-native-paper';
//styles CSS
import styles from '../../styles/menubar';

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const Menubar: FunctionComponent<Props> = ({ navigation }) => {
    
    const route = useRoute();

    return(
        <View style={styles.menubar}>
            <IconButton icon={require('../../images/inventory.png')} color={route.name.includes('Inventory') ? '#3867d6' : '#95a5a6'} size={35} onPress={() => navigation.navigate('Inventory')}/>
            <IconButton icon={require('../../images/home.png')} color={route.name.includes('Home') ? '#3867d6' : '#95a5a6'} size={35} onPress={() => navigation.navigate('Home')}/>
            <IconButton icon={require('../../images/database.png')} color={route.name.includes('Database') ? '#3867d6' : '#95a5a6'} size={35} onPress={() => navigation.navigate('Database')}/>
            <IconButton icon={require('../../images/params.png')} color={route.name.includes('Params') ? '#3867d6' : '#95a5a6'} size={35} onPress={() => navigation.navigate('Params')}/>
        </View>
    );
};
