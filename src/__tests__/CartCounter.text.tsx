import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartCounter from '../components/cart/CartItem/CartCounter'
import '@testing-library/jest-dom'

const data = {
    name: 'Aos',
    url: '',
    type: 'ml',
    size: '200',
    code: '8578929',
    manufacturer: 'Aos',
    brand: "Aos",
    price: 100,
    description: 'Средство для мытья посуды ',
    id: 1,
    cartQuantity: 1,
}


describe('couter cart page', () => {
    it('increnent button', () => {
        const  handleDecrease = jest.fn();
        const handleIncrease = jest.fn()
        render(<CartCounter data={data} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />)
        const btn = screen.getByTestId('increment')
        expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
        userEvent.click(btn)
    })
})