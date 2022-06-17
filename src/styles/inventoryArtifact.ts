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

    titlePage: {
        width: '90%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: '5%',
    },

    text: {
        width: '100%',
        color: '#fff',
        fontSize: 18,
        marginVertical: '1%',
        textAlign: 'center',
    },

    image: {
        width: '50%',
        aspectRatio: 1/1,
    },

    button: {
        backgroundColor: '#3867D6',
        paddingVertical: '3%',
        paddingHorizontal: '3%',
        marginVertical: '3%',
        borderRadius: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },
});
