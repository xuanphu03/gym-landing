import { useInView } from 'react-intersection-observer'
import check from '../assets/svgs/check.svg'
import Button from './ui/Button'

const memberships = [
  {
    title: 'Pass ‘Trial’',
    price: '$ 0',
    benefits: ['Access to the gym from 8:00 to 14:00', 'The trainer on duty will introduce you to the gym']
  },
  {
    title: 'Pass ‘Easy Start’',
    price: '$ 119',
    benefits: [
      'Visit without restrictions 24/7',
      'Individual training program',
      'Access to the VTRAINER application',
      'Trainer support'
    ]
  },
  {
    title: 'Pass ‘Free Time’',
    price: '$ 49',
    benefits: [
      'The entrance time to the gym is from 14:00 to 16:00',
      'Without suspension of gym membership',
      'The trainer on duty will introduce you to the gym'
    ]
  },
  {
    title: 'Pass ‘1 Month 24/7’',
    price: '$ 85',
    benefits: ['Visit without restrictions 24/7', 'The trainer on duty will introduce you to the gym']
  },
  {
    title: 'Pass ‘In Shape (AM)’',
    price: '$ 165',
    benefits: [
      'Training in mini-groups until 14:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer support'
    ]
  },
  {
    title: 'Pass ‘In Shape (PM)’',
    price: '$ 195',
    benefits: [
      'Training in mini-groups until 17:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer support'
    ]
  }
]

export default function Membership() {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:mt-180 mt-200" ref={ref}>
      {inView && <h2 className="animate-fade-down sm:text-5xl font-medium text-center text-28">Gym membership</h2>}
      {inView && (
        <div className="2xl:mx-320 2xl:gap-68 lg:grid-cols-3 lg:mx-30 lg:mt-120 lg:gap-14 sm:mt-100 sm:grid sm:grid-cols-2 sm:mx-16 sm:gap-34 mt-70 flex gap-3 overflow-x-auto snap-x">
          {memberships.map(membership => (
            <div
              key={membership.title}
              className="cursor-default sm:animate-flip-down sm:hover:bg-primary sm:hover:text-black snap-center w-pass bg-222 rounded-xl"
            >
              <div className="py-22 text-center border-b-2 border-black">
                <p className="text-lg font-bold">{membership.title}</p>
                <p className="text-2xl font-medium">{membership.price}</p>
              </div>

              <div className="text-white bg-222 flex flex-col">
                <div className="w-60 h-220 mt-27 mr-12 ml-23">
                  {membership.benefits.map(benefit => (
                    <p key={benefit} className="mb-4 text-sm font-light flex gap-3">
                      <img src={check} alt="check" />
                      <span>{benefit}</span>
                    </p>
                  ))}
                </div>

                <Button className="sm:hover:bg-hover sm:hover:text-txtHover">Buy</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
