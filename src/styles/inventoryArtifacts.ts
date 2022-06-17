import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttons: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4%',
    },

    button: {
        width: '50%',
        backgroundColor: '#3867D6',
        paddingVertical: '3%',
        borderRadius: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },

    sorting: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '3%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkbox: {
        marginRight: '2%',
    },

    list: {
        width: '100%',
    },

    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },

    sortingText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginRight: '2%',
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
        width: '45%',
        aspectRatio: 9/12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '1.5%',
        marginLeft: '3.33%',
        borderRadius: 20,
    },

    image: {
        width: '80%',
        aspectRatio: 1,
        borderRadius: 20
    },

    imageView: {
        width: '100%',
        aspectRatio: 1/0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
