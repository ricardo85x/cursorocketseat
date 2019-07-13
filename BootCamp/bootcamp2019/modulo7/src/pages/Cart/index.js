import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
                    <tr>
                        <td>
                            <img
                                src="//static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg"
                                alt="Tenis"
                            />
                        </td>
                        <td>
                            <strong>Le tenis 1</strong>
                            <span>$129,99</span>
                        </td>
                        <td>
                            <div>
                                {/* adicionado div porque td nao pode ter display flex */}
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} />
                                </button>
                                <input type="number" readOnly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} />
                                </button>
                            </div>
                        </td>

                        <td>
                            <strong>R$198,00</strong>
                        </td>

                        <td>
                            <button type="button">
                                <MdDelete size={20} />
                            </button>
                        </td>
                    </tr>
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
