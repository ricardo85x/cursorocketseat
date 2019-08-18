import React from 'react';

import {Image} from 'react-native';

import logo from '~/assets/logo.png';

// import Input from '~/components/Input';
// import Button from '~/components/Button';
import Background from '~/components/Background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignIn() {
    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCaptalize="none"
                        placeholder="Digite seu email"
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                    />

                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>

                <SignLink onPress={() => {}}>
                    <SignLinkText>Criar conta gratuita!</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
