import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        width: '100%',
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    titlePage: {
        width: '90%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: '5%',
    },

    detailBloc: {
        width: '90%',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginVertical: '1%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#262626',
        borderRadius: 10,
        padding: '1%',
    },

    detailBlocText: {
        width: '80%',
        marginLeft: '2%',
    },

    detailText: {
        width: '100%',
        color: '#fff',
        fontSize: 14,
        textAlign: 'justify',
        textAlignVertical: 'center',
    },

    detailTextBold: {
        width: '100%',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    detailImage: {
        width: '15%',
        aspectRatio: 1 / 1,
    },

    characterpreview: {
        width: '100%',
        aspectRatio: 1 / 1,
    },

    gallery: {
        width: '70%',
        aspectRatio: 1 / 2,
        marginVertical: '1%',
    },

    imageConstellation: {
        width: '50%',
        aspectRatio: 1 / 1,
    },

    text: {
        width: '90%',
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },

    title: {
        width: '90%',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: '5%',
        marginTop: '3%',
        marginBottom: '1%',
        borderBottomWidth: 2,
    },

    statsBloc: {
        width: '90%',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginVertical: '1%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    statBloc: {
        width: '20%',
        alignItems: 'center',
        flexDirection: 'column',
    },

    statText: {
        width: '100%',
        color: '#fff',
        fontSize: 14,
        marginVertical: '4%',
        textAlign: 'center',
    },
});
