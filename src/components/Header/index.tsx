import Image from 'next/image'

export default function  Header() {
    return (
      // hover:bg-slate-500 underline
      <div>
        <ul className='flex flex-col items-center md:justify-between md:gap-12  md:flex-row  md:items-center'>
          
          <li className=' flex md:mr-96' >
            <Image 
            src='/images/icon_barber.svg'
            alt=''
            width={100}
            height={100}
          />
          </li>
          <li className='style-hover'>
            {' '}
            <a href='#'>Home</a>
          </li>
          <li className='style-hover'>
            {' '}
            <a href='#'>Serviços</a>
          </li>
          <li className='style-hover'>
            {' '}
            <a href='#'>Contato</a>
          </li>
          <li className='style-hover'>
            {' '}
            <a href='#'>Sobre</a>
          </li>
        </ul>
      </div>
    )
}