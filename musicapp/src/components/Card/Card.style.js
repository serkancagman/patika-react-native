import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    content: {
        flexDirection: "column",
        marginLeft: 10,
        flex: 1,
    },
    title: {
        
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    descriptionContent: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    artist: {
        fontSize: 16,
        color: "#000",
        marginRight: 10,
    },
    year: {
        fontSize: 13,
        color: "#999",
    },
    soldOutWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end",
        
        marginLeft: 10,
    },
    soldOut: {
        color: "red",
        fontSize: 13,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: "red",
    },
});