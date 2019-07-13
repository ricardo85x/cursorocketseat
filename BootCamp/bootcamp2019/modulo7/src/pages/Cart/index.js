import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import * as CartAction from '../../store/modules/cart/actions';
import { Container, ProductTable, Total } from './styles';

import { formatPrice } from '../../util/format';

function Cart({ cart, removeFromCart, updateAmount, total }) {
    // sempre vai ter o dispatch com o redux
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>SubTotal</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {cart.map(produto => (
                        <tr key={String(produto.id)}>
                            <td>
                                <img src={produto.image} alt={produto.title} />
                            </td>
                            <td>
                                <strong>{produto.title}</strong>
                                <span>{produto.price}</span>
                            </td>
                            <td>
                                <div>
                                    {/* adicionado div porque td nao pode ter display flex */}
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            onClick={() =>
                                                updateAmount(
                                                    produto.id,
                                                    'REMOVE'
                                                )
                                            }
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={produto.amount}
                                    />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            onClick={() =>
                                                updateAmount(produto.id, 'ADD')
                                            }
                                        />
                                    </button>
                                </div>
                            </td>

                            <td>
                                <strong>{produto.subtotal}</strong>
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(produto.id)}
                                >
                                    <MdDelete size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL </span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.amount * product.price;
        }, 0)
    ),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
