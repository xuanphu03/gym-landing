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
    <div className="mt-241">
      <h2 className="text-5xl font-medium text-center">Trainers staff</h2>
      <div className="flex flex-wrap justify-center 2xl:px-220 gap-20 mt-142">
        {staffs.map(staff => (
          <div key={staff.image} className="px-18 py-5 bg-222 rounded-2xl flex flex-col items-center gap-5">
            <img src={staff.image} alt="Staff's Photo" />
            <p>{staff.name}</p>
            <div className="flex gap-4">
              {socials.map(social => (
                <div className="w-10 h-10 flex justify-center items-center border-2 rounded-full">
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
