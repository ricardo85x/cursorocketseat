import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';

import {
    Loading,
    Owner,
    IssueFilter,
    IssuesList,
    IssuePagination,
} from './styles';

export default class Repository extends Component {
    static propTypes = {
        match: PropType.shape({
            params: PropType.shape({
                repository: PropType.string,
            }),
        }).isRequired,
    };

    state = {
        repository: {},
        issues: [],
        loading: true,
        issueFilter: 'all',
        issuePage: 1,
    };

    async componentDidMount() {
        this.listIssues();
    }

    componentDidUpdate(_, prev) {
        const { issueFilter, issuePage } = this.state;
        if (issueFilter !== prev.issueFilter || issuePage !== prev.issuePage) {
            this.listIssues();
        }
    }

    listIssues = async () => {
        const {
            match: { params },
        } = this.props;

        const repoName = decodeURIComponent(params.repository);

        const { issueFilter, issuePage } = this.state;

        const promises = [
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: issueFilter,
                    per_page: 5,
                    page: issuePage,
                },
            }),
        ];

        const { repository: actualRepository } = this.state;

        if (!actualRepository.name) {
            promises.push(api.get(`/repos/${repoName}`));
        }

        const [issues, repository = actualRepository] = await Promise.all(
            promises
        );

        this.setState({
            repository: actualRepository.name
                ? actualRepository
                : repository.data,
            issues: issues.data,
            loading: false,
        });

        console.log('prev', issues);
    };

    handleIssueFilter = e => {
        this.setState({ issueFilter: e.target.value });
    };

    handleIssuePage = e => {
        this.setState({ issuePage: e });
    };

    render() {
        const { repository, issues, loading, issuePage } = this.state;

        if (loading) {
            return <Loading>Carregando</Loading>;
        }

        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar aos repositorios</Link>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                </Owner>

                <IssuesList>
                    <IssueFilter>
                        <select onChange={this.handleIssueFilter}>
                            <option value="all">Todos</option>
                            <option value="open">Abertos</option>
                            <option value="closed">Fechados</option>
                        </select>
                    </IssueFilter>

                    {issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>
                                    {issue.labels.map(label => (
                                        <span key={String(label.id)}>
                                            {label.name}
                                        </span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </IssuesList>

                <IssuePagination>
                    {issuePage > 1 && (
                        <button
                            type="button"
                            onClick={() => this.handleIssuePage(issuePage - 1)}
                        >
                            Anterior
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={() => this.handleIssuePage(issuePage + 1)}
                    >
                        Proxima
                    </button>
                    <span>Página {issuePage}</span>
                </IssuePagination>
            </Container>
        );
    }
}

// export default function Repository({ match: { params } }) {
//     return <h1>Repo {decodeURIComponent(params.repository)}</h1>;
// }
