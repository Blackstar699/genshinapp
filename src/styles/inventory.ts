import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 20,
        paddingTop: '8%',
    },

    loginText: {
        width: '90%',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: '8%',
        paddingBottom: '5%',
    },

    loginBloc: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: '2%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    button: {
        width: '40%',
        backgroundColor: '#3867D6',
        paddingVertical: '3%',
        borderRadius: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },

    content: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    bloc: {
        width: '40%',
        height: '45%',
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '3%',
        borderRadius: 20
    },

    image: {
        width: '80%',
        aspectRatio: 1,
        borderRadius: 20
    },
});
