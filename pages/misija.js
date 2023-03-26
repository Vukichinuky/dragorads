import NavVert from '/components/NavVert.jsx'
import Header from '/components/header.js'
import Footer from '/components/footer.js'
import Head from 'next/head'
import Image from 'next/image'
export default function Oskoli() {
    return (
        <div>
            <Head>

            </Head>
            <main className='bodymis bg-opacity-25 '>

                <section >
                    <Header />
                    <NavVert />
                </section>
                <section className='flex justify-center '>

                    <div className=' kkk  max-w-6xl p-10 my-10 rounded-3xl'>

                        <div className=' text-center mt-28  max-w-6xl m-auto relative text-gray-900  z-10 '>

                            <h1 className=' text-xl font-bold italic  sm:text-2xl'>Визија школе - слика жељене будућности</h1>
                            <p className='m-6 text-justify sm:text-base'>Наша визија је једнако и квалитетно васпитање и образовање за све ученике. Заједничким радом и трудом желимо да “извучемо” максимални потенцијал из сваког дјетета поштујући индивидуалне карактеристике, а мото свих је: школа за све и снага је у различитости! </p>
                            <p className='m-6 italic text-m sm:text-xl'>Мисија школе - шта радимо да остваримо нашу визију</p>

                            <p className='m-6 text-justify  sm:text-base'>Сарадњом свих актера створити услове у којима ће се свако дјете осјећати безбједно, прихваћено и задовољно и гдје ће имати прилику да учи и развија се сходно својим капацитетима; у средини која ће дјеловати постицајно на сваки аспект развоја, уз поштовање и уважавање индивидуалних карактеристика, и гдје ће се ученик мотивисати да учи због знања а не због оцјене, а све у циљу развоја здраве личности дјетета које ће постати одговоран члан заједнице и друштва. </p>
                            <p className='m-6 italic sm:text-xl'>Вриједности школе - кључне вриједности које школа промовише </p>
                            <p className='m-6 font-semibold sm:text-xl mb-32'>КВАЛИТЕТНО ОБРАЗОВАЊЕ И ВАСПИТАЊЕ; <br />
                                ПРИЈАТЕЉСТВО И ЗАЈЕДНИШТВО; <br />
                                ОДГОВОРНОСТ; <br />
                                ТИМСКИ РАД И СПОРТСКИ ДУХ; <br />
                                ПОШТОВАЊЕ И ТОЛЕРАНЦИЈА. </p>
                        </div>
                        <div className='flex justify-end items-end'>
                            <Image
                                className="  transition duration-300 ease-in-out hover:scale-110     rounded-3xl "
                                alt="logo skole"
                                src={'/Logo,_Os_Vuk_Karadzic_Rocevic.png'}
                                width={250}
                                height={250}
                            />
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