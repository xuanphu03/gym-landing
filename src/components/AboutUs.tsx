import room from '../assets/images/gym-room.png'
import room1 from '../assets/images/gym-room-1.png'
import room2 from '../assets/images/gym-room-2.jpg'
import left from '../assets/svgs/turn-left.svg'
import right from '../assets/svgs/turn-right.svg'
import Slider from './ui/Slider'

export default function AboutUs() {
  return (
    <div className="2xl:px-220 2xl:mt-250 lg:mt-200 lg:flex lg:px-7 sm:mt-180 mt-200">
      <div className="lg:text-left text-center">
        <h2 className="sm:text-5xl font-medium text-28">About Us</h2>
        <div className="2xl:mr-120 lg:p-0 lg:mt-65 lg:mr-65 sm:px-120 sm:pt-90 pt-50 px-54 font-light text-sm leading-6">
          <p>
            Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space
            dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness,
            and TechnoGym.
          </p>
          <p className="sm:block sm:mt-5 hidden">
            With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals,
            whether it's building strength, increasing endurance, or losing weight.
          </p>
          <p className="mt-5">
            Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans
            tailored to each individual's needs and goals.
          </p>
        </div>
      </div>

      {/* <div className="lg:hidden sm:mt-20 mt-15">
        <div className="flex gap-3 overflow-x-auto snap-x">
          <img className="sm:w-570 w-room rounded-xl snap-center" src={room} alt="Room gym" />
          <img className="sm:w-570 w-room rounded-xl snap-center" src={room2} alt="Room gym" />
          <img className="sm:w-570 w-room rounded-xl snap-center" src={room1} alt="Room gym" />
        </div>
        <div className="hidden lg:flex justify-between items-center mt-2">
          <div className="w-200 h-0.5 flex gap-1">
            <div className="w-10 h-0.5 bg-yellow-400 rounded-[10px]"></div>
            <div className="w-10 h-0.5 bg-white rounded-[10px]"></div>
            <div className="w-10 h-0.5 bg-white rounded-[10px]"></div>
            <div className="w-10 h-0.5 bg-white rounded-[10px]"></div>
          </div>

          <div className="flex gap-3">
            <img src={left} alt="left" />
            <img src={right} alt="right" />
          </div>
        </div>
      </div> */}
      <Slider images={[room, room1, room2]} className="sm:mt-20 mt-15" />
    </div>
  )
}
