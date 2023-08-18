import youtube from '../assets/svgs/youtube.svg'
import twitter from '../assets/svgs/twitter.svg'
import instagram from '../assets/svgs/instagram.svg'
import facebook from '../assets/svgs/facebook.svg'
import mail from '../assets/svgs/mail.svg'
import phone from '../assets/svgs/phone.svg'

const socials = [instagram, facebook, twitter, youtube]

export default function Footer() {
  return (
    <div className="2xl:gap-216 2xl:mx-220 lg:mx-30 lg:gap-100 sm:mx-20 sm:gap-180 sm:mt-250 sm:flex sm:justify-between mt-200 mb-70">
      <div className="lg:block w-1/3 hidden">
        <p className="font-logo text-2xl">
          <a href="#">GYM</a>
          <span className="text-primary">24</span>
        </p>
        <p className="mt-27 text-sm font-light">
          Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a
          motivating community
        </p>
      </div>

      <div className="sm:m-0 sm:text-left text-center mx-110">
        <h3 className="text-lg font-bold">Address</h3>
        <p className="text-sm font-light mt-30">
          Republic of Belarus Minsk city <br /> Dzerzhinsky Avenue 15
        </p>
      </div>

      <div className="sm:mt-0 sm:text-left text-center mt-47">
        <h3 className="text-lg">Contact</h3>
        <div className="mt-30">
          <div className="sm:justify-start flex justify-center gap-3">
            <img src={phone} alt="phone" />
            <p className="text-sm font-light">+375(44)-777-24-12</p>
          </div>
          <div className="sm:justify-start flex justify-center gap-3">
            <img src={mail} alt="mail" />
            <p className="text-sm font-light">gym24@gmail.com</p>
          </div>
          <div className="flex justify-center mt-30 gap-6">
            {socials.map(social => (
              <div className="w-10 h-10 border-1 rounded-full flex justify-center items-center">
                <img src={social} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
