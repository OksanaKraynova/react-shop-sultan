import React from 'react'
import { screen, render } from '@testing-library/react'
import Sort from './Sort'


describe('should open dropdown', () => {
    test('toggle button', () => {
        render(<Sort />)
        const btn = screen.getByTestId('toggle-btn')
        expect(screen.queryByTestId('toggle-drop')).toBeNull()
      
    })
})