import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, StatusBar } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ApiRequest from "./ApiRequest";

export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showScanner, setShowScanner] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // console.log("camera permission", status);
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);
    if (hasPermission === null) {
        return <Text>Requesting camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const startScanning = () => {
        setShowScanner(true);
    };
    const stopScanning = () => {
        setShowScanner(false);
    };

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        setShowScanner(false);
        const api = ApiRequest();
        api.getRelease(data);
    };
    const handleScanAgain = () => {
        setScanned(false);
        setShowScanner(true);
    };
    return (
        <View style={styles.container}>
            {showScanner && (
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    style={StyleSheet.absoluteFillObject}
                >
                    <View style={styles.layerTop} />
                    <View style={styles.layerCenter}>
                        <View style={styles.layerLeft} />
                        <View style={styles.focused} />
                        <View style={styles.layerRight} />
                    </View>
                    <View style={styles.layerBottom} />
                </BarCodeScanner>
            )}
            <View style={styles.ButtonContainer}>
                {!showScanner && !scanned && (
                    <View style={styles.ButtonContainer}>
                        <Button
                            title={"Start Scanning"}
                            onPress={startScanning}
                        />
                    </View>
                )}
                <View style={styles.AgainButtonContainer}>
                    {scanned && (
                        <Button
                            title={"Tap to Scan Again"}
                            onPress={handleScanAgain}
                        />
                    )}
                    {showScanner && !scanned && (
                        <Button
                            title={"Stop Scanning"}
                            onPress={stopScanning}
                        />
                    )}
                </View>
            </View>
        </View>
    );
}

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#181818",
        width: "100%",
    },
    ButtonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    AgainButtonContainer: {
        position: "absolute",
        bottom: "33%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    layerTop: {
        flex: 2,
        backgroundColor: opacity,
    },
    layerCenter: {
        flex: 1,
        flexDirection: "row",
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity,
    },
    focused: {
        flex: 10,
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity,
    },
    layerBottom: {
        flex: 2,
        backgroundColor: opacity,
    },
});
