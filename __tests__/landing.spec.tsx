import { renderWithStore } from '../test-utils'
import LandingPage from '../pages/index'

describe('<UserLandingPage>', () => {
 const customInitialState = {
   user: {
    loaded: true,
    apiHost: 'https://localhost:9000',
    username: 'ajinkyax',
    user: 'Ben',
   }
 }
 it('renders', async () => {
  const { getAllByRole, getByText, findByTestId } = renderWithStore(<LandingPage isAuthenticated={false} />, customInitialState)
  expect((await findByTestId('hello')).textContent).toEqual('Hello, Ben')
 })
})
