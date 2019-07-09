import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function Main() {
    return (
        <Container>
            <Text>Ola Main volta 2</Text>
        </Container>
    );
}

Main.navigationOptions = {
    title: 'Usuarios',
};
