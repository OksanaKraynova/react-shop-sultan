import React from 'react'
import { screen, render } from '@testing-library/react'
import ChooseBrandForm from './ChooseBrandForm'

describe('form', () => { 
    test('input event', () => {
        render(<ChooseBrandForm />);
        const input = screen.getByTestId('search-brand')
    })
})