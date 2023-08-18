import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import ReasonToJoin from './components/ReasonToJoin'
import GymMembership from './components/GymMembership'
import AboutUs from './components/AboutUs'
import TrainersStaff from './components/TrainersStaff'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <div>
      <Header />
      <ReasonToJoin />
      <GymMembership />
      <AboutUs />
      <TrainersStaff />
      <Footer />
    </div>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
