import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import Sort from '../components/Catalog/CatalogTitle/Sort/Sort'
import userEvent from '@testing-library/user-event'

describe('should open dropdown', () => { 
    it('click toggle-button and open dropdown', () => {        
        render(<Sort  />);
      const btn = screen.getByTestId('toggle-btn')
      expect(btn).toBeInTheDocument()
      userEvent.click(btn)
      })
})