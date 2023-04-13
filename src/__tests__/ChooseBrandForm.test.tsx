import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChooseBrandForm from '../components/Catalog/CatalogAside/ChooseBrand/ChooseBrandForm/ChooseBrandForm'

describe('form', () => { 
    it('input event', () => {
        const handleChange = jest.fn();
        
        render(<ChooseBrandForm search='' setSearch={handleChange} />);
        const input = screen.getByTestId('search-brand');
        userEvent.type(input, 'Aos')
      })
})