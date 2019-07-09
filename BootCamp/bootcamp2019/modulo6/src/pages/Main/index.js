import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
    state = {
        newUser: '',
        users: [],
    };

    //
    //
    handleAddUser = async () => {
        const { users, newUser } = this.state;

        const response = await api.get(`/users/${newUser}`);

        const { name, login, avatar_url: avatar } = response;
        if (name && login && avatar) {
            const data = {
                name,
                login,
                avatar,
            };

            this.setState({ users: [...users, data], newUser: '' });
        }

        Keyboard.dismiss();
    };

    render() {
        const { users, newUser } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adicionar usuario"
                        value={newUser}
                        onChangeText={text => this.setState({ newUser: text })}
                        returnKeyType="send" // permite enviar ao clicar no enter
                        onSubmitEditing={this.handleAddUser} // roda uma acao ao envair com o enter
                    />
                    <SubmmitButton onPress={this.handleAddUser}>
                        <Icon name="add" size={20} color="#FFF" />
                    </SubmmitButton>
                </Form>
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Usuarios',
};
