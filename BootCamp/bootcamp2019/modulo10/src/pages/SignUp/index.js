import React from 'react';

import {Image} from 'react-native';

import PropTypes from 'prop-types';
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

export default function SignUp({navigation}) {
    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCaptalize="none"
                        placeholder="Nome completo"
                    />

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

                    <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Ja tenho conta!</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}

SignUp.propTypes = {
    navigation: PropTypes.shape().isRequired,
};
