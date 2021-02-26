import {ComboBox, Option} from '../../src/components/ComboBox'
import {fireEvent, render, screen} from '@testing-library/react'

const currencies: Option[] = [
    {value: 'usd', display: 'Dolar'},
    {value: 'arg', display: 'Peso'},
    {value: 'rub', display: 'Rublo'}]

function renderWithCurrency() {
    const onChange = jest.fn<void, [string]>()
    render(<ComboBox options={currencies} onChange={onChange}/>)
    return {onChange}
}

test('The options are hidden when the combo is not focused', () => {
    renderWithCurrency()

    expect(screen.queryByRole('listbox')).toBeNull()
})

test('The options are shown when on focus', async () => {
    renderWithCurrency()

    fireEvent.focus(screen.getByRole('combobox'))

    currencies.map(c => c.display)
        .map(option => expect(screen.getByText(option)).toBeInTheDocument())
})

// test('When a value is selected onChange is called with said value', () => {
//     const {onChange} = renderWithCurrency()
//
//     fireEvent.focus(screen.getByRole('combobox'))
//     fireEvent.click(screen.getByText('Peso'))
//
//     expect(onChange.mock.calls.length).toBe(1)
//     expect(onChange.mock.calls[0][0]).toBe('Peso')
// })