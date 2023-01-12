
import Image from 'next/image'
export default function Presentation () {
    return (
      <div>
        <div className='flex md:text-center justify-center'>
          <p className="p-6">Nossos serviços</p>
        </div>

        <div className='flex flex-col md:gap-7 md:flex-row shadow-2xl pt-3 justify-between'>
          <div className=' flex flex-col'>
            <figure className=' flex justify-center pt-10'>
              <Image src='/images/comb.svg' alt='' width={70} height={70} />
            </figure>
            <h2 className=' flex font-bold justify-center'>
             
              Corte masculino
            </h2>
            <p className='text-center pl-4'>
             
             Estilo completo, corte adequado ao seu formato de rosto.
            </p>
            <div className=' flex pt-4 justify-center'>
              <button className='btn hover:bg-blue-800 bg-blue-900 mb-12 '>
                Saiba mais
              </button>
            </div>
          </div>

          <div className=' flex flex-col'>
            <figure className='pt-10 flex justify-center '>
              <Image src='/images/blade.svg' alt='' width={70} height={70} />
            </figure>
            <h2 className='  flex font-bold justify-center'>
              
              Corte de barba
            </h2>
            <p className='text-center'>
              
              Elegância de uma barba bem feita e agradável
            </p>
            <div className=' flex  pt-4 justify-center'>
              <button className='btn hover:bg-blue-800 bg-blue-900  mb-12'>
                Saiba mais
              </button>
            </div>
          </div>

          <div className=' flex flex-col'>
            <figure className='pt-10 flex justify-center '>
              <Image src='/images/wash.svg' alt='' width={70} height={70} />
            </figure>
            <h2 className='  flex font-bold justify-center'>
              
               Um tratamento especial
            </h2>
            <p className='text-center pr-4'>
              Uma lavagem necessária para os seus cabelos
            </p>
            <div className=' flex pt-4 justify-center'>
              <button className='btn hover:bg-blue-800 bg-blue-900  mb-12'>
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}