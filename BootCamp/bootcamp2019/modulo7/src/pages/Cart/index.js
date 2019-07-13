import React from 'react';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
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
                                        <MdRemoveCircleOutline size={20} />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={produto.amount}
                                    />
                                    <button type="button">
                                        <MdAddCircleOutline size={20} />
                                    </button>
                                </div>
                            </td>

                            <td>
                                <strong>{produto.priceFormatted}</strong>
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            id: produto.id,
                                        })
                                    }
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
                    <strong>R$99,00</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
