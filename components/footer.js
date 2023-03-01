import Link from 'next/link'








export default function Footer() {
    return (
<footer className='h-2xl sm:grid sm:grid-cols-3 bg-orange-300'>

<div>
  <h5 className=' text-center p-10'>Контакт информације</h5>
  <div className="flex items-center  my-4 justify-center">
 
<Link href={'https://www.google.com/maps/place/O%C5%A0+%22Vuk+Karad%C5%BEi%C4%87%22+-+Ro%C4%87evi%C4%87/@44.535909,19.1437763,15z/data=!4m6!3m5!1s0x475961b2c4b213a1:0x7f9d16c6ff6ca75e!8m2!3d44.535909!4d19.1437763!16s%2Fg%2F11jjw7kvpz'}>
  <svg  className=" w-16 cursor-pointer h-16 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9.00003C7.96003 22 7.06002 21.91 6.27002 21.73L14 14L20.38 20.38Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.24002 7.97997C6.92002 5.04997 11.32 5.04997 12 7.97997C12.39 9.69997 11.31 11.16 10.36 12.06C9.67001 12.72 8.58003 12.72 7.88003 12.06C6.93003 11.16 5.84002 9.69997 6.24002 7.97997Z" stroke="#292D32" stroke-width="1.5"/>
  <path d="M9.0946 8.69995H9.10359" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</Link> <h6 className=" m-2 ">
Адреса: <br />
Роћевић бб, 75 <br />
413 Козлук

  </h6>
  
  </div>
  <div className="flex items-center my-4 justify-center"><svg fill="#000000" className=" w-16 h-16" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M24,12a1,1,0,0,1-2,0A10.011,10.011,0,0,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12Zm-8,1a1,1,0,0,0,0-2H13.723A2,2,0,0,0,13,10.277V7a1,1,0,0,0-2,0v3.277A1.994,1.994,0,1,0,13.723,13ZM1.827,6.784a1,1,0,1,0,1,1A1,1,0,0,0,1.827,6.784ZM2,12a1,1,0,1,0-1,1A1,1,0,0,0,2,12ZM12,22a1,1,0,1,0,1,1A1,1,0,0,0,12,22ZM4.221,3.207a1,1,0,1,0,1,1A1,1,0,0,0,4.221,3.207ZM7.779.841a1,1,0,1,0,1,1A1,1,0,0,0,7.779.841ZM1.827,15.216a1,1,0,1,0,1,1A1,1,0,0,0,1.827,15.216Zm2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,4.221,18.793Zm3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,7.779,21.159Zm14.394-5.943a1,1,0,1,0,1,1A1,1,0,0,0,22.173,15.216Zm-2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,19.779,18.793Zm-3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,16.221,21.159Z"/></svg>
  <h6 className=" m-2 ">
  Радно вријеме <br />
Радним данима: <br /> 07:00 - 19:00
 
 
   </h6>
   
   </div>

  <div className="flex items-center my-4 justify-center">
    <img className="w-16 h-16 ml-6" src="/email.png" alt="" />
  <h6 className=" m-2 ">
  Е-маил: : <br />
os147@skolers.org
 
   </h6>
   
   </div>
   <div className="flex items-centermy-4 justify-center">
    <img className="w-16 h-16 ml-16" src="/phone-call.png" alt="" />
  <h6 className=" m-2 ">
      Тел.: +387 56/398-082; <br /> тел.: 056/398-615, <br /> 056/490-890, 056/490-891
 
   </h6>
   
   </div>
</div>


<div> 
<h5 className=' text-center p-10'>Пратите нас</h5>
<div className="flex cursor-pointer my-4 justify-center">
    <Link href='https://www.facebook.com/juosvukkaradzic.rocevic'><img className="w-16 " src="/facebook.png" alt="" /></Link>
  
   
   </div>

</div>


<div>
<h5 className=' text-center p-10'>Сајт опремио</h5>
<div className="flex  my-4 justify-center">
  
   
   </div>
   <div className="flex align-middle items-center my-4 justify-center">
    <img className="w-16 h-16" src="/email.png" alt="" />
  <h6 className=" m-2 ">
  Е-маил: : <br />
jovan.tubic96@dev-drop.com <br />
drago.vukovic@dev-drop.com
 
   </h6>
   
   </div>
</div>
  </footer>)}