import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
      },

    text:{
        color: "#fff",
        fontSize: 20,
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
        aspectRatio: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '1.5%',
        borderRadius: 20
    }
});
