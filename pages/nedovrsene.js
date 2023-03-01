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
     
            <h1 className=' mb-10 font-bold text-white bg-yellow-600  text-center sm:text-2xl'>Чека се отпремање слика или слично</h1>
           <div className=' md:flex flex-wrap   '>
               <img className='m-2 h-96' src="/kovidTelefon.jpg" alt="" />
               <img className='m-2 h-96' src="/kovid.jpg" alt="" />
              
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