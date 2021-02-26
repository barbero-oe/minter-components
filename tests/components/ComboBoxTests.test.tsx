import {ComboBox} from '../../src/components/ComboBox'
import {fireEvent, render, screen} from '@testing-library/react'

const currencies = ['Dolar', 'Peso', 'Rublo']

function renderWithCurrency() {
    render(<ComboBox options={currencies}/>)
}

test('The options are hidden when the combo is not focused', () => {
    renderWithCurrency()

    expect(screen.queryByRole('listbox')).toBeNull()
})

test('The options are shown when on focus', async () => {
    renderWithCurrency()

    fireEvent.focus(screen.getByRole('combobox'))

    currencies.map(option => expect(screen.getByText(option)).toBeInTheDocument())
})
