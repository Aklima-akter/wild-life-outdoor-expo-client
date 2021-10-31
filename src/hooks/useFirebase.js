import { useEffect, useState } from 'react'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import initializeAuthentication from '../Firebase/firebase.init'

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth()
  // console.log(user)

  const signInUsingGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider()

    return signInWithPopup(auth, googleProvider)
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user, 'inside state change')
        setUser(user)
      } else setUser({})
      setIsLoading(false)
    })
  }, [auth])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false))
  }

  return {
    signInUsingGoogle,
    user,
    error,
    logOut,
    setError,
    isLoading,
    setIsLoading,
  }
}

export default useFirebase
