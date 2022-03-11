import { render, screen } from "@testing-library/react";
import React from "react";
import Cart from "../components/Cart/Cart";
import { MemoryRouter } from 'react-router-dom';


describe('Cart Component', () => {

    const cart = render(<MemoryRouter><Cart /></MemoryRouter>);

    const cartBody = screen.queryByTestId('bookCartBody');

    test('feCart1', () => {
        expect(cartBody).toBeTruthy();
    })

})

