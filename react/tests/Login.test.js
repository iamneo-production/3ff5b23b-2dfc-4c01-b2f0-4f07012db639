import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login/Login";
import { MemoryRouter } from 'react-router-dom';


describe('Login Component', () => {
    
    const login = render(<MemoryRouter><Login /></MemoryRouter>);

    const email = screen.queryByTestId('email');
    const password = screen.queryByTestId('password');
    const submitButton = screen.queryByTestId('submitButton');
    const loginBox = screen.queryByTestId('loginBox');
    const signinLink = screen.queryByTestId('signupLink');

    test('feLogin1', () => {
        expect(email).toBeTruthy();
        expect(password).toBeTruthy();
        expect(submitButton).toBeTruthy();
        expect(loginBox).toBeTruthy();
        expect(signinLink).toBeTruthy();
    });

    test('feLogin2', () => {
        fireEvent.change(email, {target : {value : 'test@gmail.com'}});
        expect(email.value).toBe('test@gmail.com');

        fireEvent.change(password, {target : {value : 'test'}});
        expect(password.value).toBe('test');

    })

})