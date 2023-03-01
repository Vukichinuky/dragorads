import Navbar from '/components/Navbar.jsx'
import Header from '/components/header.js'
import Footer from '/components/footer.js'
import Head from 'next/head'

export default function Oskoli() {
    return(
       <div>
        <Head>

        </Head>
        <main className='bodymis '>

<section >
    <Header />
    <Navbar />
</section>
<section>

 <div className=''> 
 <div className='bg-image'></div>
   
      <div className=' text-center mt-28  max-w-6xl m-auto relative text-white  z-10 '>
     
            <h1 className=' text-xl  sm:text-2xl'>Визија школе - слика жељене будућности</h1>
            <p className='m-6 text-justify sm:text-xl'>Наша визија је једнако и квалитетно васпитање и образовање за све ученике. Заједничким радом и трудом желимо да “извучемо” максимални потенцијал из сваког дјетета поштујући индивидуалне карактеристике, а мото свих је: школа за све и снага је у различитости! </p>
            <p className='m-6 text-m sm:text-xl'>Мисија школе - шта радимо да остваримо нашу визију</p>

        <p className='m-6 text-justify  sm:text-xl'>Сарадњом свих актера створити услове у којима ће се свако дјете осјећати безбједно, прихваћено и задовољно и гдје ће имати прилику да учи и развија се сходно својим капацитетима; у средини која ће дјеловати постицајно на сваки аспект развоја, уз поштовање и уважавање индивидуалних карактеристика, и гдје ће се ученик мотивисати да учи због знања а не због оцјене, а све у циљу развоја здраве личности дјетета које ће постати одговоран члан заједнице и друштва. </p>
        <p className='m-6 sm:text-xl'>Вриједности школе - кључне вриједности које школа промовише </p>
       <p className='m-6 sm:text-xl mb-32'>КВАЛИТЕТНО ОБРАЗОВАЊЕ И ВАСПИТАЊЕ; <br /> 
ПРИЈАТЕЉСТВО И ЗАЈЕДНИШТВО; <br />
ОДГОВОРНОСТ; <br /> 
ТИМСКИ РАД И СПОРТСКИ ДУХ; <br />
ПОШТОВАЊЕ И ТОЛЕРАНЦИЈА. </p>
        </div>
 </div>
 <img  className='  w-full' src="/Image (8).jpeg" alt="" />
</section>
    <section>
        <Footer />
    </section>
        </main>
       </div>
    )
}