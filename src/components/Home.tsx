import trainer from '../assets/images/trainer.png'

export default function Home() {
  return (
    <div className="pt-10">
      <nav className="2xl:px-220 lg:px-8 px-5 flex justify-between items-center">
        <p className="font-logo uppercase text-2xl">
          <a href="#">GYM</a>
          <span className="text-primary">24</span>
        </p>

        <ul className="flex justify-between gap-75 text-xs font-light">
          <li>Advantages</li>
          <li>Membership</li>
          <li>About</li>
          <li>Trainers</li>
        </ul>
      </nav>

      <div className="absolute top-0 lg:right-0 -right-60 -z-10 trainer-image">
        <img src={trainer} alt="trainer" />
      </div>
    </div>
  )
}
