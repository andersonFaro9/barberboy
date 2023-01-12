import Image from 'next/image'
export default function AboutUs () {

    return (

      <div className='flex justify-center md:mt-8 flex-wrap md:flex-nowrap md:justify-between md:gap-6'>
        <figure>
          <Image src='/images/bbs.svg' alt='' width={700} height={450} />
        </figure>

        <div className='text-center mt-4 mb-5 md:text-start'>
          <p>Sobre nós</p>
          <p className='font-bold  text-2xl max-w-md'>
            Há 10 anos no mercado de beleza, cuidando e preservando a aparência
            dos nossos clientes
          </p>
          <div className='flex  justify-center md:justify-start flex-wrap md:flex-wrap'>
            <p className='flex max-w-md pt-2 md:justify-end md:flex-wrap'>
              Sem perder de vista as novas tendências, sem deixar perder o valor
              da velha guarda
            </p>
            <button className='btn w-36 hover:bg-blue-800 bg-blue-900 mt-2 '>
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    )
}