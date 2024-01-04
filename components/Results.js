import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export default function Results({ route }) {
    const results = route.params.results;
    return (
        <ScrollView style={styles.container}>
            {results.map((result, index) => (
                <View key={index} style={styles.result}>
                    <View>
                        {result.cover_image && (
                            <Image
                                source={{ uri: result.cover_image }}
                                style={styles.cover_image}
                            />
                        )}
                    </View>
                    <View style={styles.result_text}>
                        {result.title && (
                            <Text style={styles.text}>
                                {result.title}
                                {"\n"}
                            </Text>
                        )}
                        {result.year && (
                            <Text style={styles.text}>{result.year}</Text>
                        )}
                        {/* {result.label && (
                        <Text style={styles.text}>{result.label}</Text>
                    )} */}

                        {/* {result.format && (
                        <Text style={styles.text}>{result.format}</Text>
                    )} */}
                        {result.country && (
                            <Text style={styles.text}>
                                {result.country}
                                {"\n"}
                            </Text>
                        )}
                        {result.style && (
                            <Text style={styles.text}>
                                {result.style.join(", ")}
                            </Text>
                        )}
                    </View>
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
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 15,
        padding: 10,
        margin: 10,
    },
    result_text: {
        color: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
    },
    text: {
        color: "white",
        textAlign: "center",
        flexWrap: "wrap",
    },
    cover_image: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        alignSelf: "center",
    },
});
