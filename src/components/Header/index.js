import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

export default function Header() {
    const cartSize = useSelector(state => state.cart.length);

    return (
        <Container>
            <Link to="/">
                <img
                    src="https://skylab.rocketseat.com.br/api/files/1562597403849.svg"
                    alt="RocketShoes"
                />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Cart>
        </Container>
    );
}
