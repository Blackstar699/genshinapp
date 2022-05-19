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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingVertical: '2%',
        justifyContent: 'space-evenly',
    },

    text: {
        width: '90%',
        color: "#fff",
        fontSize: 18,
        paddingTop: "2%",
        marginHorizontal: '5%',
        textAlign: 'justify',
    },

    title: {
        width: '90%',
        color: '#3867D6',
        fontSize: 22,
        textAlign: 'left',
        marginHorizontal: '5%',
    },

    image: {
        width: "75%",
        aspectRatio: 1,
        borderRadius: 20
    },
});
