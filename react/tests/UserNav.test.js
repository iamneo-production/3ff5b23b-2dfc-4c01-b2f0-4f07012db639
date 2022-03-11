import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserNavbar from "../components/UserNav/UserNav";
import { MemoryRouter } from 'react-router-dom';

describe('UserNavbar Component', () => {
    
    const userNav = render(<MemoryRouter><UserNavbar /></MemoryRouter>);

    const bookCartButton = screen.queryByTestId('bookCartButton');
    const bookHomeButton = screen.queryByTestId('bookHomeButton');
    const bookOrderButton = screen.queryByTestId('bookOrderButton');
    const logoutButton = screen.queryByTestId('logoutButton');
    const userNavbar = screen.queryByTestId('userNavbar');

    test('feUserNavbar1', () => {
        expect(bookCartButton).toBeTruthy();
        expect(bookHomeButton).toBeTruthy();
        expect(bookOrderButton).toBeTruthy();
        expect(logoutButton).toBeTruthy();
        expect(userNavbar).toBeTruthy();
    });

})