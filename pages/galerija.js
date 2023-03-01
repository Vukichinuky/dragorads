import Navbar from '/components/Navbar.jsx'
import Header from '/components/header.js'
import Footer from '/components/footer.js'
import Head from 'next/head'

export default function Oskoli() {
    return(
       <div>
        <Head>

        </Head>
        <main>

<section className=' '>
    <Header />
    <Navbar />
    
</section>
<section>

 <div className=''> 
 
      <div className='  mt-28 text-justify p-8  max-w-6xl m-auto   z-10 '>
     
            <h1 className=' mb-10 font-bold text-white bg-yellow-600  text-center sm:text-2xl'>Поводом школске славе Светог Саве ученици и учитељи ПО Брањево су у част првог српског просветитеља извели рецитације и пјевали химну Светом Сави.</h1>
           <div className=' md:flex flex-wrap   '>
               <img className='m-2 h-96' src="/325591657_3371335779799594_8455277550985690747_n.jpg" alt="" />
               <img  className='m-2 h-96'src="/326795598_915356876138603_4396425158505957261_n.jpg" alt="" />
               <img  className='m-2 h-96'src="/326802203_714838903358346_6275484961395910159_n.jpg" alt="" />
               <img  className='m-2 h-96'src="/328320934_516951200525055_3775321121430441807_n.jpg" alt="" />
               <img  className='m-2 h-96'src="/328468034_1771102369957166_9032641668976728861_n.jpg" alt="" />
           </div>        
           
           <h1 className=' mb-10 font-bold text-white bg-yellow-600  text-center sm:text-2xl'>У ПО Кисељак реализована је радионица за родитеље на тему "Заједничко рјешавање проблема". </h1>
           <div className=' md:flex flex-wrap   '>
               <img className='m-2 h-96' src="/325860251_1134331167281611_6600092385945959450_n.jpg" alt="" />
               <img  className='m-2 h-96'src="/327590849_948292409913811_7235699669446097449_n.jpg" alt="" />
               <img  className='m-2 h-96'src="/327728311_842946900102455_6709622399947185957_n.jpg" alt="" />
           </div>        
             
           
        </div>
       

 </div>
</section>
    <section>
        <Footer />
    </section>
        </main>
       </div>
    )
}