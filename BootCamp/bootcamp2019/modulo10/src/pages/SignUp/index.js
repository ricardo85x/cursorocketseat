import React, {useRef} from 'react';

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
    const refEmail = useRef();
    const refPassword = useRef();

    function handleSubmit() {}

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
                        returnKeyType="next"
                        onSubmitEditing={() => refEmail.current.focus()}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCaptalize="none"
                        placeholder="Digite seu email"
                        ref={refEmail}
                        returnKeyType="next"
                        onSubmitEditing={() => refPassword.current.focus()}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        ref={refPassword}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />

                    <SubmitButton onPress={handleSubmit}>
                        Cadastrar
                    </SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Já tenho conta!</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}

SignUp.propTypes = {
    navigation: PropTypes.shape().isRequired,
};
