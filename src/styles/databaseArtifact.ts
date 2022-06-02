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

    detailText: {
        width: '75%',
        color: '#fff',
        fontSize: 14,
        marginLeft: '4%',
        textAlign: 'justify',
        textAlignVertical: 'center',
    },

    text: {
        width: '90%',
        color: '#fff',
        fontSize: 14,
        marginVertical: '1%',
        marginHorizontal: '5%',
        textAlign: 'justify',
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
        width: '18%',
        aspectRatio: 1/1,
    },
});
