import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import api from '../../services/api';
// import { Container } from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    state = {
        stars: [],
    };

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
        }).isRequired,
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');
        const { stars } = this.state;

        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: [...stars, response.data] });
    }

    render() {
        const { stars } = this.state;
        return (
            <View>
                <Text>Ola User</Text>
            </View>
        );
    }
}
