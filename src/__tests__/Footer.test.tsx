import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import MixColumn from '../components/Footer/MixColumn/MixColumn'

describe('form', () => { 
    it('input event', () => {        
        render(<MixColumn  />);
      const btnText = screen.getByText(/Скачать прайс-лист:/i)
      expect(btnText).toBeInTheDocument()
      expect(btnText).toHaveClass('hide')
      })
})