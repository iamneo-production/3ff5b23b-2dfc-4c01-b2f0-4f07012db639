import { render, screen } from '@testing-library/react';
import React from 'react';
import UserOrder from '../components/UserOrder/UserOrder';
import { MemoryRouter } from 'react-router-dom';


describe('UserOrder Component', () => {

    const userOrder = render(<MemoryRouter><UserOrder /></MemoryRouter>);
    
    const OrderBodyElement = screen.queryByTestId('bookOrderBody');

    test('feUserOrder1', () => {
            expect(OrderBodyElement).toBeTruthy();
    })

})