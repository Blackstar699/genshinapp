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
        paddingTop: '20%',
    },

    text: {
        width: '90%',
        color: '#fff',
        fontSize: 16,
        marginVertical: '1%',
        marginHorizontal: '5%',
        textAlign: 'center',
    },

    textInput: {
        color: '#fff',
        width: '80%',
        fontSize: 16,
        backgroundColor: '#383838',
        paddingVertical: '2%',
        paddingLeft: '5%',
        borderRadius: 20,
        marginBottom: '6%',
    },

    textAlert: {
        width: '90%',
        color: '#e74c3c',
        fontSize: 16,
        marginVertical: '3%',
        marginHorizontal: '5%',
        textAlign: 'center',
    },
});
