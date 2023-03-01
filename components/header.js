import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
    return (

        <header className=" bg-amber-400 sm:grid grid-rows-none grid-cols-3">
 
 <div className='max-sm:hidden  m-auto'>
   <Image
    src={'/rsgrb.jpeg'}
    alt={'dev drop logo'}
    width={100}
    height={100}
    />
 </div>
 <div className=' py-12 col-start-2 mt-2  px-10 text-center font-bold text-white felx justify-center align-middle '>
  <p><span className=' text-xl 2xl:text-2xl'>РЕПУБЛИКА СРПСКА</span> <br />
<span className=' text-sm 2xl:text-xl'>
  
  ЈУ Основна школа “Вук Караџић” <br />
  Роћевић 66, 75 413 Козлук <br />
  Тел.: +387 56/398-082; Тел: 056/398-615; 056/490-890; 056/490-891 <br />
  е-маил: os147@skolers.org <br />
  ЈИБ: 4400257740008, Организациони код: 08140147
</span></p>
 </div>
 <div className='max-sm:hidden flex self-center justify-center' >
   
  <Image 
  src={'/Logo,_Os_Vuk_Karadzic_Rocevic.png'}
  width={170}
  height={170}
  alt={'logoskole'}
  />
</div>
 <div className='flex sm:hidden  justify-center items-center  '>
 <div className='  m-auto'>
   <Image
    src={'/rsgrb.jpeg'}
    alt={'dev drop logo'}
    width={100}
    height={100}
    />
 </div>
<div className='mt-8 m-auto' >
   
  <Image 
  src={'/Logo,_Os_Vuk_Karadzic_Rocevic.png'}
  width={160}
  height={160}
  alt={'logo= skole'}
  />
</div>
 </div>
</header>)}