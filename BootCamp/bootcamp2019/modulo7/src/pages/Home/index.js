import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    alt="tenis"
                    src="//static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg"
                />
                <strong>
                    Tenis Vegano com um texto gigante nao sei para que tanta
                    descricao
                </strong>
                <span>R$129,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="$fff" /> 3
                    </div>

                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>

            <li>
                <img
                    alt="tenis"
                    src="//static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg"
                />
                <strong>Tenis Vegano</strong>
                <span>R$129,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="$fff" /> 3
                    </div>

                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>

            <li>
                <img
                    alt="tenis"
                    src="//static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg"
                />
                <strong>Tenis Vegano</strong>
                <span>R$129,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="$fff" /> 3
                    </div>

                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>

            <li>
                <img
                    alt="tenis"
                    src="//static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg"
                />
                <strong>Tenis Vegano</strong>
                <span>R$129,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="$fff" /> 3
                    </div>

                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>

            <li>
                <img
                    alt="tenis"
                    src="//static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg"
                />
                <strong>Tenis Vegano</strong>
                <span>R$129,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="$fff" /> 3
                    </div>

                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>

            <li>
                <img
                    alt="tenis"
                    src="//static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg"
                />
                <strong>Tenis Vegano</strong>
                <span>R$129,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="$fff" /> 3
                    </div>

                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}
