import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, total, removeFromCart, updateAmount }) {
    function increment(product) {
        updateAmount(product, product.amount + 1);
    }

    function decrement(product) {
        updateAmount(product, product.amount - 1);
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormated}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={28}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input
                                        type="text"
                                        readOnly
                                        value={product.amount}
                                    ></input>
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={28}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size="20" color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>Total</span>
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
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
