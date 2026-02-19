import Select from './Select'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom' 
import userEvent from '@testing-library/user-event'

const options = [
  { label: 'Strict Black', value: 'strict-black' },
  { label: 'Heavenly Green', value: 'heavenly-green' },
  { label: 'Sweet Pink', value: 'pink' },
]

test("test all the options rendered", async ()=>{
  const { getAllByRole, getByTestId } = render(<Select options={options}/>)
  await userEvent.click(getByTestId('DseSelectButton'))

  // CHANGE 'menuitemradio' -> 'option'
  expect(getAllByRole('menuitemradio')).toHaveLength(options.length)
})

test("renders options using custom renderOption method if passed as pro", async ()=> {
  const { getAllByTestId, getByTestId } = render(<Select options={options} renderOption={({option})=> {
    return <li data-testid="CustomRenderOption">{option.label}</li>
  }}/>)

  await userEvent.click(getByTestId('DseSelectButton'))

  expect(getAllByTestId('CustomRenderOption')).toHaveLength(options.length)
})

test("calls onOptionSelected with selected option and index", async ()=> {
  const onOptionSelected = jest.fn();
  const { getAllByRole, getByTestId } = render(<Select options={options} onOptionSelected={onOptionSelected}/>)
  
  await userEvent.click(getByTestId('DseSelectButton'));
  await userEvent.click(getAllByRole('menuitemradio')[0])

  expect(onOptionSelected).toHaveBeenCalledWith(options[0], 0)
})


test("updates button label after selection", async ()=> {
  const { getAllByRole, getByTestId } = render(<Select options={options}/>)

  await userEvent.click(getByTestId('DseSelectButton'));
  await userEvent.click(getAllByRole('menuitemradio')[0])

  expect(getByTestId('DseSelectButton')).toHaveTextContent(options[0].label)

})


test("updates button label after selection", async ()=> {
  const { getAllByRole, getByTestId } = render(<Select options={options}/>)

  await userEvent.click(getByTestId('DseSelectButton'));
  await userEvent.click(getAllByRole('menuitemradio')[0])

  expect(getByTestId('DseSelectButton')).toHaveTextContent(options[0].label)

})


test("updates button label after selection", async ()=> {
  const { getAllByRole, getByTestId } = render(<Select options={options}/>)

  await userEvent.click(getByTestId('DseSelectButton'));
  await userEvent.click(getAllByRole('menuitemradio')[0])

  expect(getByTestId('DseSelectButton')).toHaveTextContent(options[0].label)

})


test("Snapshot test", async () => {
  const { asFragment } = render(<Select options={options}/>)

    expect(asFragment()).toMatchSnapshot()
})

test('can customize select label', () => {
  render(<Select options={options} label="THIS IS A CUSTOM LABEL" />)

  expect(
    screen.getByText(/THIS IS A CUSTOM LABEL/i)
  ).toBeInTheDocument()
})