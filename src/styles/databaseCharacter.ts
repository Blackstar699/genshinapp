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
    },

    characterpreview: {
        width: '100%',
        aspectRatio: 1 / 1,
    },

    gallery: {
        width: '70%',
        aspectRatio: 1 / 2,
    },

    Constel: {
        width: '50%',
        aspectRatio: 1 / 1,
    },

    detailText: {
        width: '75%',
        color: '#fff',
        fontSize: 14,
        marginLeft: '5%',
        textAlign: 'justify',
        textAlignVertical: 'center',
    },

    quote: {
        width: '90%',
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },

    text: {
        width: '90%',
        color: '#fff',
        fontSize: 14,
        marginVertical: '5%',
        marginHorizontal: '5%',
        marginRight: '10%',
        textAlign: 'justify',
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

    image: {
        width: '25%',
        aspectRatio: 1,
    },

    imageconstellation: {
        width: '15%',
        aspectRatio: 1 / 1,
    },
});
