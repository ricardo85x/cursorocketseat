import React from 'react';
import { WebView } from 'react-native-webview';

export default function gitPage(props) {
    const { uri } = props.navigation.state.params;

    return <WebView source={{ uri }} style={{ marginTop: 20 }} />;
}
