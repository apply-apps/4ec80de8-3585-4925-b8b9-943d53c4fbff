// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View, ActivityIndicator } from 'react-native';

export default function App() {
    const [currentLetter, setCurrentLetter] = useState('');
    const [loading, setLoading] = useState(false);

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const getNextLetter = () => {
        setLoading(true);
        setTimeout(() => {
            const nextLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            setCurrentLetter(nextLetter);
            setLoading(false);
        }, 500);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.letterBox}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <Text style={styles.letter}>{currentLetter}</Text>
                )}
            </View>
            <Button title="Next Letter" onPress={getNextLetter} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8ff',
        paddingTop: 50,
    },
    letterBox: {
        marginBottom: 20,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
});