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
    <div className="mt-420 2xl:px-220 lg:px-8 px-20">
      <h2 className="text-5xl font-medium 2xl:text-left text-center">Reasons to join</h2>
      <ul className="mt-120 grid lg:grid-cols-2 lg:gap-y-20 lg:gap-x-30 gap-15">
        {reasons.map(reason => (
          <li key={reason.title} className="flex gap-2">
            <img src={reason.icon} alt="" />
            <div>
              <h3 className="mb-3">{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
