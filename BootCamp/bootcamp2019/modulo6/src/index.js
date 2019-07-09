import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}> Ola mundo cruel 2</Text>
            <Text style={styles.welcome}> outra linha</Text>
        </View>
    );
}
