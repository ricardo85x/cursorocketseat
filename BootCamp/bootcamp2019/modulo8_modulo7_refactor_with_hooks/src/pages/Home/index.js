import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

export default function Home() {
    const amount = useSelector(state => ({
        amount: prodID => {
            const product = state.cart.find(item => item.id === prodID);
            return product ? product.amount : 0;
        },
    }));

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const productsData = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            setProducts(productsData);
        }
        loadProducts();
    }, []);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={String(product.id)}>
                    <img alt={product.title} src={product.image} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="$fff" />
                            {amount.amount(product.id)}
                        </div>

                        <span>Adicionar ao Carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

Home.propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.func.isRequired,
};

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Home);
