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
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    loginBloc: {
        width: '100%',
        marginVertical: '2%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    button: {
        width: '45%',
        backgroundColor: '#3867D6',
        paddingVertical: '3%',
        borderRadius: 10,
    },

    username: {
        width: '100%',
        paddingVertical: '3%',
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },

    text:{
        color: '#fff',
        fontSize: 15,
    },
});
