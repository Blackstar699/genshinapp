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
        justifyContent: 'flex-start',
    },

    blocBig: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: '5%',
        marginBottom: '5%',
    },

    bloc: {
        width: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '5%',
    },

    statsBloc: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    textInputBig: {
        color: '#fff',
        backgroundColor: '#383838',
        paddingVertical: '2%',
        paddingLeft: '5%',
        borderRadius: 20,
        width: '100%',
        fontSize: 16,
        marginTop: '2%',
    },

    textInput: {
        color: '#fff',
        backgroundColor: '#383838',
        paddingVertical: '7%',
        paddingLeft: '5%',
        borderRadius: 20,
        width: '90%',
        fontSize: 16,
        marginTop: '2%',
    },

    picker: {
        width: '90%',
        fontSize: 18,
        backgroundColor: '#383838',
        borderRadius: 20,
        marginTop: '2%',
    },

    text: {
        width:'100%',
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },

});
