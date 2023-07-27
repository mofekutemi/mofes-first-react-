import Image from 'next/image'
import Link from 'next/link'
import Iphone from '../../public/iphone.svg'
import optimus from '../../public/optimus.svg'
import Frame from '../../public/Frame 5356.svg'
import Playstore from '../../public/Playstore.svg'
import Appstore from '../../public/Appstore.svg'
import Ellipse from '../../public/Ellipse.svg'
const Header = () => {
  return (
    <div>
   {/*  <header className='w-full fixed mb-20 top-0 p-5'> */}
   
  <Image src={optimus} alt="optimus"/>
  <div className="px-4 cursor cursor-pointer">
  <svg className="w-6 hidden h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  <div className="flex items-center justify-between px-10">
  <ul className="flex items-center gap-10 text-sm">
    <li>
      <Link href="/Home">
        Home
      </Link>
    </li>
    <li>
      <Link href="/Save">
        Save
      </Link>
    </li>
    <li>
      <Link href="/FAQs">
        FAQs
      </Link>
    </li>
  </ul>
  <Image className="hidden md:flex items-center gap-10" src={Frame} alt="frame"/>
</div>
</div>

{/* </header>*/}

<div className='w w-full flex items-center justify-center gap-12 h-screen'>
    <div className='w-1/2 text-left'>
    <h1 className="font-bold text-6xl block">Save. Invest.</h1>
<h1 className="font-bold text-6xl block">Spend.</h1>
<h1 className="font-bold text-6xl block">with Optimus.</h1>



<div className="font-manrope text-base font-medium leading-7 tracking-normal text-left">
      <p>Optimus is a financial technology solution that helps you do the most by harmonizing banking, wealth management, and brokerage needs into one simple platform. Optimus is changing the way people interact with money to achieve financial freedom.</p>
    </div>
      <div className='flex gap-10 items-center'>

    <Image src={Playstore} alt="playstore" />

    <Image src={Appstore} alt="Appstore" />

</div>
      

    </div>
    <div className="relative">
  <Image src={Iphone} alt="iphone" className="w-96" />
  <Image src={Ellipse} alt="Ellipse" className="absolute top-0 px-949 py-444" />
</div>




  </div>
          </div>
  )
}
export default Header;