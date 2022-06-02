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

    description: {
        width: '90%',
        color: '#fff',
        fontSize: 15,
        marginVertical: '1%',
        marginHorizontal: '5%',
        textAlign: 'justify',
    },

    statText: {
        width: '100%',
        color: '#fff',
        fontSize: 15,
        marginVertical: '2%',
        textAlign: 'center',
    },

    title: {
        width: '90%',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        marginHorizontal: '5%',
        marginTop: '3%',
        marginBottom: '1%',
        borderBottomWidth: 2,
    },

    image: {
        width: '50%',
        aspectRatio: 1,
        marginBottom: '1%',
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
        width: '32%',
        alignItems: 'center',
        flexDirection: 'column',
    },
});
