import line from '../assets/svgs/line.svg'
import fitnessZones from '../assets/svgs/fitness.svg'
import equipment from '../assets/svgs/equipment.svg'
import time from '../assets/svgs/time.svg'

export default function ReasonToJoin() {
  const reasons = [
    {
      icon: line,
      title: '15000 sq.m.',
      desc: 'A spacious gym for sports - a safe distance between exercise machines'
    },
    {
      icon: equipment,
      title: 'More than 200 equipment',
      desc: 'No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.'
    },
    {
      icon: fitnessZones,
      title: '4 fitness zones',
      desc: 'From cardio to functional and cycle. Separate area for boxing and mixed martial arts'
    },
    {
      icon: time,
      title: 'Round-the-clock operation',
      desc: 'The gym is open 24 hours a day, also works on all holidays and weekends'
    }
  ]

  return (
    <div className="lg:mt-420 sm:mt-228 mt-200">
      <h2 className="2xl:pl-220 2xl:text-left sm:text-5xl font-medium text-28 text-center">Reasons to join</h2>
      <ul className="2xl:px-220 lg:grid lg:grid-cols-2 lg:px-7 lg:mt-120 sm:mt-100 sm:px-20 mt-70 px-37">
        {reasons.map(reason => (
          <li key={reason.title} className="mt-10 flex">
            <div className="w-20 h-20 flex justify-center items-start">
              <img className="pt-2" src={reason.icon} alt="icon" />
            </div>
            <div className="w-2/3 ml-5">
              <h3 className="text-lg font-bold">{reason.title}</h3>
              <p className="sm:mt-3 mt-3.5 text-sm font-light">{reason.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
