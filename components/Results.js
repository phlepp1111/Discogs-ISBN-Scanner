import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export default function Results({ route }) {
    const results = route.params.results;
    // console.log("results bei results:", results);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Results</Text>
            {results.map((result, index) => (
                <View key={index} style={styles.result}>
                    {result.title && (
                        <Text style={styles.text}>{result.title}</Text>
                    )}
                    {result.year && (
                        <Text style={styles.text}>{result.year}</Text>
                    )}
                    {/* {result.label && (
                        <Text style={styles.text}>{result.label}</Text>
                    )} */}
                    {result.cover_image && (
                        <Image
                            source={{ uri: result.cover_image }}
                            style={styles.cover_image}
                        />
                    )}
                    {/* {result.format && (
                        <Text style={styles.text}>{result.format}</Text>
                    )} */}
                    {result.country && (
                        <Text style={styles.text}>{result.country}</Text>
                    )}
                    {result.genre && (
                        <Text style={styles.text}>{result.genre}</Text>
                    )}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181818",
        width: "100%",
        color: "white",
    },
    result: {
        borderWidth: 1,
        borderColor: "white",
        padding: 10,
        margin: 10,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
    cover_image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        alignSelf: "center",
    },
});
