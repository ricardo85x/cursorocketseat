import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Stared,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    state = {
        stars: [],
        loading: true,
        page: 0,
        refreshing: false,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
        }).isRequired,
    };

    async componentDidMount() {
        this.loadMore();
    }

    refreshList = async () => {
        this.setState({ page: 0, stars: [] });

        await this.loadMore(1);
    };

    handleStar = ({ item }) => {
        console.tron.log(item.html_url);
        const { navigation } = this.props;
        navigation.navigate('GitPage', { uri: item.html_url });
    };

    loadMore = async (newPage = -1) => {
        this.setState({
            loading: true,
        });

        const { navigation } = this.props;
        const user = navigation.getParam('user');

        let { page, stars } = this.state;

        if (newPage === -1) {
            page += 1;
        } else {
            page = newPage;
        }
        if (page === 1) {
            stars = [];
        }
        const response = await api.get(`/users/${user.login}/starred`, {
            params: {
                per_page: 10,
                page,
            },
        });

        response.data.forEach(item => stars.push(item));

        console.tron.log(response.data);

        this.setState({
            stars,
            loading: false,
            page,
        });
    };

    render() {
        const { navigation } = this.props;
        const { stars, loading, refreshing } = this.state;

        console.tron.log(stars);

        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio} </Bio>
                </Header>

                <Stars
                    data={stars}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.loadMore}
                    onRefresh={this.refreshList}
                    refreshing={refreshing}
                    keyExtractor={star => String(star.id)}
                    renderItem={({ item }) => (
                        <Stared onPress={() => this.handleStar({ item })}>
                            <OwnerAvatar
                                source={{ uri: item.owner.avatar_url }}
                            />
                            <Info>
                                <Title>{item.name}</Title>
                                <Author>{item.owner.login}</Author>
                            </Info>
                        </Stared>
                    )}
                />
                {loading && <ActivityIndicator />}
            </Container>
        );
    }
}
