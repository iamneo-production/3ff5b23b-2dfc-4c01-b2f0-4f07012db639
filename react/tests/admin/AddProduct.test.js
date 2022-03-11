import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddProduct from '../../components/admin/AddProduct/AddProduct';
import { MemoryRouter } from 'react-router-dom';


describe('Admin AddProduct Component', () => {

    const addProduct = render(<MemoryRouter><AddProduct /></MemoryRouter>);

    const addBookBody = screen.queryByTestId('addBookBody');
    const bookName = screen.queryByTestId('bookName');
    const bookPrice = screen.queryByTestId('bookPrice');
    const bookDescription = screen.queryByTestId('bookDescription');
    const bookImageURL = screen.queryByTestId('bookImageURL');
    const bookQuantity = screen.queryByTestId('bookQuantity')
    const addBookButton = screen.queryByTestId('addBookButton')

    test('feAdminAddProduct1', () => {
        expect(addBookBody).toBeTruthy();
        expect(bookName).toBeTruthy();
        expect(bookPrice).toBeTruthy();
        expect(bookDescription).toBeTruthy();
        expect(bookImageURL).toBeTruthy();
        expect(bookQuantity).toBeTruthy();
        expect(addBookButton).toBeTruthy();  
        
        fireEvent.change(bookName, {target : {value : 'testBookName'}})
        expect(bookName.value).toBe('testBookName');

        fireEvent.change(bookPrice, {target : {value : '5'}})
        expect(bookPrice.value).toBe('5');

        fireEvent.change(bookDescription, {target : {value : 'Book Description'}})
        expect(bookDescription.value).toBe('Book Description');

        fireEvent.change(bookImageURL, {target : {value : 'book URL'}})
        expect(bookImageURL.value).toBe('book URL');

        fireEvent.change(bookQuantity, {target : {value : '120'}})
        expect(bookQuantity.value).toBe('120');
    })
 
})