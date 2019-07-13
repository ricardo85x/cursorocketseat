import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

class Home extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        const products = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        console.log(response.data);

        this.setState({ products });
    }

    handleAddProduct = product => {
        const { addToCart } = this.props;

        addToCart(product);
    };

    render() {
        const { products } = this.state;
        return (
            <ProductList>
                {products.map(product => (
                    <li key={String(product.id)}>
                        <img alt={product.title} src={product.image} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="$fff" />
                                {product.amount}
                            </div>

                            <span>Adicionar ao Carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home);
