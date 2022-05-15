import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
      },

    text: {
        color: "#fff",
        fontSize: 20,
        paddingTop: "2%"
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

    bloc: {
        width: '40%',
        aspectRatio: 90/100,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '3%',
        borderRadius: 20
    },

    image: {
        width: "90%",
        aspectRatio: 1,
        borderRadius: 20
    },
});
