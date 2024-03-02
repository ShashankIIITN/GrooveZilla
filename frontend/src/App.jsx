import { useState } from 'react'
import LeftPanel from './components/LeftPanel'
import MainPage from './components/MainPage'
import RightPanel from './components/RightPanel'

function App() {

  return (
    <>
      <LeftPanel />
      <MainPage />
      <RightPanel/>
    </>
  )
}

export default App
