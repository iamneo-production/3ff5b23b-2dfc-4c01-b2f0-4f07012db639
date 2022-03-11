import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../components/Signup/Signup";
import { MemoryRouter } from 'react-router-dom';


describe('Signup Component', () => {
    
    const { container, debug} = render(<MemoryRouter><Signup /></MemoryRouter>);

    const email = screen.queryByTestId('email');
    const username = screen.queryByTestId('username');
    const mobilenumber = screen.queryByTestId('mobilenumber');
    const password = screen.queryByTestId('password');
    const confirmpassword = screen.queryByTestId('confirmpassword');
    const submitButton = screen.queryByTestId('submitButton');
    const signupBox = screen.queryByTestId('signupBox');
    const signinLink = screen.queryByTestId('signinLink');

    test('feSignup1', () => {
        expect(email).toBeTruthy();
        expect(username).toBeTruthy();
        expect(mobilenumber).toBeTruthy();
        expect(password).toBeTruthy();
        expect(confirmpassword).toBeTruthy();
        expect(submitButton).toBeTruthy();
        expect(signupBox).toBeTruthy();
        expect(signinLink).toBeTruthy();
    });

    test('feSignup2', () => {
        fireEvent.change(email, {target : {value : 'test email'}})
        expect(email.value).toBe('test email');

        fireEvent.change(username, {target : {value : 'test'}});
        expect(username.value).toBe('test');

        fireEvent.change(mobilenumber, {target : {value : '1230984567'}});
        expect(mobilenumber.value).toBe('1230984567');

        fireEvent.change(password, {target : {value : 'test'}});
        expect(password.value).toBe('test');

        fireEvent.change(confirmpassword, {target : {value : 'test'}});
        expect(confirmpassword.value).toBe('test');
    })

})