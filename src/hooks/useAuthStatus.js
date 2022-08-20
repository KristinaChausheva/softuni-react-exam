import { useEffect, useState, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export function useAuthStatus() {
  const [loggedIn, setloggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setloggedIn(true)
        }
        if (user.email === "admin@admin.com") {
          setIsAdmin(true)
          // console.log(isAdmin)
        }
        setCheckingStatus(false)
      })
    }

    return () => {
      isMounted.current = false
    }
  }, [isMounted])
  return { loggedIn, checkingStatus, isAdmin }
}

// export default useAuthStatus
