import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Component', () => {

    const home = render(<MemoryRouter><Home /></MemoryRouter>);
    
    const homeBodyElement = screen.queryByTestId('bookHomeBody');

    test('feHome1', () => {
            expect(homeBodyElement).toBeTruthy();
    })

})