import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 20,
        overflow: "hidden",
        marginHorizontal: 20
    },
    detailcontainer: {
        padding: 20
    },
    thumbnail: {
        borderRadius: 5,
        height: 185, 
        width: "100%",
        marginBottom: 5
    },
    image: {
        borderRadius: 5,
        height: 185, 
        width: 350,
        resizeMode: "contain",
        marginBottom: 5
    },
    description:{
        color: "grey",
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    info: {
        fontSize: 18,
        marginBottom: 5
    },
    showMoreContainer: {
        alignItems: "center"
    },
    title: {
        fontWeight: "700",
        marginBottom: 10,
        fontSize: 20
    }
});

export default styles;