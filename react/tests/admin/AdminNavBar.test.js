import { render, screen } from '@testing-library/react';
import AdminNavBar from '../../components/admin/AdminNav/AdminNav';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';


describe('AdminNavBar Component', () => {

    const adminNavBar = render(<MemoryRouter><AdminNavBar /></MemoryRouter>);

    const adminNavbar = screen.queryByTestId('adminNavbar');
    const adminOrderButton = screen.queryByTestId('adminOrderButton');
    const adminproductButton = screen.queryByTestId('adminproductButton');
    const logoutButton = screen.queryByTestId('logoutButton');

    test('feAdminNavbar1', () => {
        expect(adminNavbar).toBeTruthy();
        expect(adminOrderButton).toBeTruthy();
        expect(adminproductButton).toBeTruthy();
        expect(logoutButton).toBeTruthy();
    })

})