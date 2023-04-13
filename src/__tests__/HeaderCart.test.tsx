import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import { store } from './../app/store'
import { Provider } from "react-redux"
import { MemoryRouter } from 'react-router-dom';
import Header from "../components/Header/Header"

describe('test routers', () => {
    it('test link to cart', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );

        const cartLink = screen.getByTestId('cart-link')
        userEvent.click(cartLink)
        expect(screen.getByTestId('cart-link-link')).toHaveTextContent(/корзина/i)
    })
})