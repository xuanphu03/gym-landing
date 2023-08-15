import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home'
import Banner from './components/Banner'
import ReasonToJoin from './components/ReasonToJoin'
import GymMembership from './components/GymMembership'
import AboutUs from './components/AboutUs'
import TrainersStaff from './components/TrainersStaff'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <div>
      <Home />
      <Banner />
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
