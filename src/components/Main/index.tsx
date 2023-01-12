import Image from 'next/image'
export default function Main() {
  return (
    <div className='flex flex-col  md:justify-between md:gap-14 md:flex-row  md:items-center'>
      <div className=' flex flex-col'>
        <p className='font-bold mt-2 md:justify-between md:text-left text-center text-2xl md:text-4xl md:mt-12'>
          Respeito, família e tradição
        </p>
        <p className='mt-4 md:mt-10 md:text-left text-center text-1xl md:w-96 md:text-2xl'>
          Ambiente descontraído, com foco no estilo e look de sua preferência!
        </p>
      </div>

      <Image
        className='flex m-12'
        src='/images/barberman.svg'
        alt='Barbeiro'

        width={350}
        height={500}
      />
    </div>
  )
}
