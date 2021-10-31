import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Login = () => {
  const { signInUsingGoogle, setUser, setIsLoading } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home'
  console.log('came from', location.state?.from)

  const handleGoogleLogIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri)
        setUser(result.user)
      })
      .finally(() => setIsLoading(false))
  }
  return (
    <div>
      <h2 className="text-3xl m-3 font-semibold">Please Login</h2>
      <button
        onClick={handleGoogleLogIn}
        className="bg-green-700 bg-opacity-100 text-lg text-white px-4 py-2 rounded-lg"
      >
        Google Sign In
      </button>
    </div>
  )
}

export default Login
