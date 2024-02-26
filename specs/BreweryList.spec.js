import BreweryList from '../src/lib/BreweryList.svelte'
import { render, fireEvent, waitFor } from '@testing-library/svelte'

function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve(data)
      })
    })
  }
}

beforeEach(() => {
  const fakeData = [{ name: 'brewery name' }]
  global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData))
})
afterEach(() => {
  global.fetch.mockClear()
})

it('displays breweries when I click the button', async () => {
  
  const { getByText, getByTestId, queryByText } = render(BreweryList)
  const gobutton = getByTestId('gobutton')
  expect(gobutton).toBeTruthy()

  await fireEvent.click(gobutton)

  await waitFor(() =>
    expect(getByTestId('brewerywrapper')).toBeTruthy()
  )
  expect(queryByText('wrong')).toBeNull()
  expect(getByText('brewery name')).toBeTruthy()
})