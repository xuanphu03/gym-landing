import { useState } from 'react'
import trainer from '../assets/images/trainer.png'
import bugger from '../assets/svgs/bugger.svg'
import Drawer from './ui/Drawer'
import Banner from './Banner'

export default function Home() {
  const [isToggler, setIsToggler] = useState(false)

  const handleToggler = () => {
    setIsToggler(isToggler => !isToggler)
  }

  return (
    <div className="sm:pt-10 pt-60 relative">
      <nav className="2xl:px-220 lg:px-7 sm:px-5 px-50 flex justify-between">
        <p className="animate-jump-in font-logo text-2xl">
          <a href="#">
            GYM<span className="text-primary">24</span>
          </a>
        </p>

        <ul className="animate-flip-down sm:flex sm:gap-75 sm:items-center text-xs font-light hidden">
          <li className="hover:text-primary">
            <a href="#">Advantages</a>
          </li>
          <li className="hover:text-primary">
            <a href="#">Membership</a>
          </li>
          <li className="hover:text-primary">
            <a href="#">About</a>
          </li>
          <li className="hover:text-primary">
            <a href="#">Trainers</a>
          </li>
        </ul>

        <img className="cursor-pointer sm:hidden" onClick={handleToggler} src={bugger} alt="bugger" />
        <Drawer open={isToggler} onClose={handleToggler}>
          <p className="pl-4 font-logo text-2xl mb-5">
            <a href="#">GYM</a>
            <span className="text-primary">24</span>
          </p>
          <li className="p-4 rounded-md hover:bg-primary/50 text-xl font-light">
            <a href="">Advantages</a>
          </li>
          <li className="p-4 rounded-md hover:bg-primary/50 text-xl font-light">
            <a href="">Membership</a>
          </li>
          <li className="p-4 rounded-md hover:bg-primary/50 text-xl font-light">
            <a href="">About</a>
          </li>
          <li className="p-4 rounded-md hover:bg-primary/50 text-xl font-light">
            <a href="">Trainers</a>
          </li>
        </Drawer>
      </nav>

      <div className="sm:top-0 sm:w-1/2 w-2/3 h-full trainer-image absolute top-5 right-0 -z-10">
        <img className="absolute right-0 sm:h-full h-5/6 object-cover" src={trainer} alt="trainer" />
      </div>

      <Banner />
    </div>
  )
}
