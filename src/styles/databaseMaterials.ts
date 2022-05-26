import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },

    sorting: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '3%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    list: {
        width: '100%',
    },

    bloc: {
        width: '45%',
        aspectRatio: 9/10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '1.5%',
        marginLeft: '3.33%',
        borderRadius: 20,
    },

    text: {
        color: "#fff",
        fontSize: 18,
        textAlign: 'center',
    },

    imageView: {
        width: '100%',
        aspectRatio: 1/0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: "75%",
        aspectRatio: 1,
        borderRadius: 20
    },

    sortingText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginRight: '2%',
    },

    checkbox: {
        marginRight: '2%',
    },
});
