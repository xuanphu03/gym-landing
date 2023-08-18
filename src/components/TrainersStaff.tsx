import staff1 from '../assets/images/staff1.png'
import staff2 from '../assets/images/staff2.png'
import staff3 from '../assets/images/staff3.png'
import staff4 from '../assets/images/staff4.png'
import staff5 from '../assets/images/staff5.png'
import staff6 from '../assets/images/staff6.png'
import staff7 from '../assets/images/staff7.png'
import staff8 from '../assets/images/staff8.png'
import youtube from '../assets/svgs/youtube.svg'
import twitter from '../assets/svgs/twitter.svg'
import instagram from '../assets/svgs/instagram.svg'

export default function TrainersStaff() {
  const staffs = [
    {
      image: staff1,
      name: 'Victoria Shurpik'
    },
    {
      image: staff2,
      name: 'Elizabeth Lavrinenko'
    },
    {
      image: staff3,
      name: 'Ivan Gladkikh'
    },
    {
      image: staff4,
      name: 'Lyudmila Sabilo'
    },
    {
      image: staff5,
      name: 'Evgeny Gurkov'
    },
    {
      image: staff6,
      name: 'Anatoly Prytytsky'
    },
    {
      image: staff7,
      name: 'Victor Ludkovich'
    },
    {
      image: staff8,
      name: 'Maria Masyak'
    }
  ]
  const socials = [youtube, twitter, instagram]

  return (
    <div className="mt-200">
      <h2 className="sm:text-5xl font-medium text-center text-28">Trainers staff</h2>
      <div className="2xl:grid-cols-4 2xl:gap-5 2xl:mx-180 lg:mt-120 lg:grid lg:grid-cols-3 lg:gap-58 lg:mx-7 sm:mt-100 sm:gap-9 mt-46 flex gap-3 overflow-x-auto snap-x">
        {staffs.map(staff => (
          <div
            key={staff.image}
            className="flex flex-col gap-4.5 items-center pt-22 pb-29 bg-222 rounded-20 snap-center"
          >
            <img src={staff.image} alt="Staff's Photo" />
            <p className="w-staff text-lg font-bold text-center">{staff.name}</p>
            <div className="flex gap-4">
              {socials.map(social => (
                <div className="w-10 h-10 border-1 rounded-full flex justify-center items-center">
                  <img key={social} src={social} alt="social" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
