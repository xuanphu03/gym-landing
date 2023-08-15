import youtube from '../assets/svgs/youtube.svg'
import twitter from '../assets/svgs/twitter.svg'
import instagram from '../assets/svgs/instagram.svg'
import facebook from '../assets/svgs/facebook.svg'
import mail from '../assets/svgs/mail.svg'
import phone from '../assets/svgs/phone.svg'

const socials = [instagram, facebook, twitter, youtube]

export default function Footer() {
  return (
    <div className="mt-259 2xl:px-220 px-8 flex gap-40 justify-between">
      <div className="flex flex-col gap-6 hidden lg:block">
        <p className="font-logo uppercase text-2xl">
          <a href="#">GYM</a>
          <span className="text-primary">24</span>
        </p>
        <p className="text-sm font-light">
          Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a
          motivating community
        </p>
      </div>

      <div className="flex flex-col gap-7">
        <h3>Address</h3>
        <div className="w-174 text-sm font-light">
          <p>Republic of Belarus Minsk city</p>
          <p>Dzerzhinsky Avenue 15</p>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <h3>Contact</h3>
        <div>
          <div className="flex gap-3">
            <img src={phone} alt="phone" />
            <p className="text-sm font-light">+375(44)-777-24-12</p>
          </div>
          <div className="flex gap-3">
            <img src={mail} alt="mail" />
            <p className="text-sm font-light">gym24@gmail.com</p>
          </div>
          <div className="flex mt-4 gap-6">
            {socials.map(social => (
              <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center">
                <img src={social} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
