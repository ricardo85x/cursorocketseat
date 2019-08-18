import React from 'react';

import {Text} from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

import {Container} from './styles';

export default function SignIn() {
    return (
        <Background>
            <Container>
                <Text>Ola SignIn</Text>
                <Input
                    icon="call"
                    placeholder="digite seu nome"
                    style={{marginTop: 30}}
                />

                <Button>Entrar</Button>
            </Container>
        </Background>
    );
}
