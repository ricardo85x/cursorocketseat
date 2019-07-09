import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Form, SubmitButton, List } from './styles';

import Container from '../../components/Container';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
        notFound: false,
    };

    // carregar os dados do local storage
    componentDidMount() {
        const repositories = localStorage.getItem('repositorios');
        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    // salvar os dados no local storage
    componentDidUpdate(_, prev) {
        const { repositories } = this.state;
        if (prev.repositories !== repositories) {
            localStorage.setItem('repositorios', JSON.stringify(repositories));
        }
    }

    randleInputChange = e => {
        const { value: newRepo } = e.target;

        this.setState({ newRepo });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        const { newRepo, repositories } = this.state;

        try {
            const duplicate = repositories.find(repo => repo.name === newRepo);

            if (duplicate) {
                throw 'Repositorio duplicado';
            }

            const response = await api.get(`/repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: false,
                notFound: false,
            });
        } catch (_) {
            this.setState({ notFound: true, loading: false });
        }

        // console.log(this.state.newRepo);
    };

    render() {
        const { newRepo, loading, repositories, notFound } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositorios
                </h1>

                <Form notFound={notFound} onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar repositorio"
                        value={newRepo}
                        onChange={this.randleInputChange}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton>
                </Form>

                <List>
                    {repositories.map(repo => (
                        <li key={repo.name}>
                            <span>{repo.name}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    repo.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
