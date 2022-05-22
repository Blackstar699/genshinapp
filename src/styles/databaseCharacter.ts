import { StyleSheet } from "react-native";

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
        aspectRatio: 4 / 1.3,
        alignItems: 'center',
        marginHorizontal: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: '1%',
    },
    characterpreview: {
        width: "120%",
        resizeMode: "cover",
        opacity: 0.8,
        aspectRatio: 1,
    },

    detailText: {
        width: '75%',
        color: "#fff",
        fontSize: 15,
        textAlign: 'justify',
        textAlignVertical: "center",
    },
    quote: {
        width: '90%',
        color: "#7F7F7F",
        fontSize: 9,
        textAlign: 'center',

    },
    text: {
        width: '90%',
        color: "#fff",
        fontSize: 15,
        marginVertical: '1%',
        marginHorizontal: '5%',
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
        width: "25%",
        aspectRatio: 1,
    },
});
