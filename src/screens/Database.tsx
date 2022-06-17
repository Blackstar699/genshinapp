//imports composants React
import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
//imports navigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList';
//barre de menu
import { Menubar } from './props/Menubar';
//styles CSS
import styles from '../styles/database';
//constantes globales
import { images } from '../GlobalConsts';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Database'>;
}

export const Database: FunctionComponent<Props> = ({ navigation }) => {    
    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate('DatabaseCharacters')}>
                    <Image style={styles.image}  source={{ uri: images+'shenhe_icon_big.png' }}/>
                    <Text style={styles.text}>Personnages</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate('DatabaseWeapons')}>
                    <Image style={styles.image}  source={{ uri: images+'polar_star.png' }}/>
                    <Text style={styles.text}>Armes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate('DatabaseArtifacts')}>
                    <Image style={styles.image}  source={{ uri: images+'emblem_of_severed_fate_flower_of_life.png' }}/>
                    <Text style={styles.text}>Artéfacts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bloc} onPress={() => navigation.navigate('DatabaseMaterials')}>
                    <Image style={styles.image}  source={{ uri: images+'philosophies_of_light.png' }}/>
                    <Text style={styles.text}>Matériaux</Text>
                </TouchableOpacity>
                
            </View>
            <Menubar navigation={navigation}/>
        </View>
    );
};
