import { useEffect } from 'react'
import { useAppSelector } from '../redux/hooks'
import { userSelector } from '../redux/userStateSlice'


const UserLandingPage = ({isAuthenticated}) => {

  // useAppSelector is just a typescript wrapper around useSelector

  const { user } = useAppSelector(userSelector)

  useEffect(() => {
    if (isAuthenticated && user?.apiHost) {
      // fetchUserOrders(user.apiHost)
    }
  }, [isAuthenticated, user])

 return (
  <div data-testid={'hello'}>Hello, {user}</div>
 )
}

export default UserLandingPage