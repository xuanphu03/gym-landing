import room from '../assets/images/gym-room.png'
import left from '../assets/svgs/turn-left.svg'
import right from '../assets/svgs/turn-right.svg'

export default function AboutUs() {
  return (
    <div className="mt-262 2xl:px-220 px-7 flex lg:flex-row lg:justify-between items-center flex-col">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-5xl font-medium">About Us</h2>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="w-[472px] mt-65 font-light flex flex-col gap-10">
            <p>
              Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space
              dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness,
              and TechnoGym.
            </p>
            <p>
              With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness
              goals, whether it's building strength, increasing endurance, or losing weight.
            </p>
            <p>
              Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans
              tailored to each individual's needs and goals.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[570px] lg:mt-0 mt-20">
        <img src={room} alt="Room gym" />
        <div className="flex justify-between items-center mt-2">
          <div className="w-200 h-0.5 flex gap-1">
            <div className="w-10 h-0.5 bg-yellow-400 rounded-[10px]"></div>
            <div className="w-10 h-0.5 bg-white rounded-[10px]"></div>
            <div className="w-10 h-0.5 bg-white rounded-[10px]"></div>
            <div className="w-10 h-0.5 bg-white rounded-[10px]"></div>
          </div>

          <div className="flex">
            <img src={left} alt="left" />
            <img src={right} alt="right" />
          </div>
        </div>
      </div>
    </div>
  )
}
