import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header, Main, Footer } from './components/layout/index'
import { authMe } from './store/auth/auth'
import { getNavigation } from './store/navigation/navigation'
import { useAppDispatch } from './store/store'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNavigation())
    dispatch(authMe())
  }, [dispatch])
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
