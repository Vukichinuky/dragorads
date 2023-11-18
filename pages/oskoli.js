import NavVert from "../components/NavVert.jsx";
import Header from "/components/header.js";
import Footer from "/components/footer.js";
import Head from "next/head";
import Image from "next/image.js";
export default function Oskoli() {
  return (
    <div>
      <Head></Head>
      <main>
        <section className=" ">
          <Header />
          <NavVert />
        </section>
        <section>
          <div className="">
            <img
              className=" h-full max-xl:hidden -top-22 md:-top-28 opacity-20 w-full  absolute md:h-fit
   -z-30  md:object-cover"
              fill
              src="/Image (7).jpeg"
              alt=""
            />

            <div className="  mt-10 text-justify text-slate-700  max-w-6xl m-auto relative   z-10 ">
              <h1 className=" text-4xl font-bold text-[#FEA400] italic  text-center  sm:text-4xl">
                Основни подаци о школи
              </h1>
              <p className="m-4 italic text-m sm:text-xl">
                Карактеристике заједнице у којој се налази школа
              </p>
              <p className="m-4 sm:text-base">
                Према подацима из матичних књига у Роћевићу живи 1300
                становника. Роћевић је смјештен поред магистралног пута
                Бијељина-Сарајево. Налази се у близини границе са Републиком
                Србијом. У наведеном мјесту већина становника бави се
                пољопривредом, због повољног географског терена. Један мали дио
                становника ради у зворничким фабрикама, које су под стечајем.
                Расположиви ресурси Роћевића су: обрадиве површине (ратарско
                земљиште, погодни услови за развој сточарства), природна
                богаства (близина ријеке Дрине и разноврсне шуме). Због природне
                љепоте и повољних услова за живот, већина становника се одлучује
                да остане на свом имању, не показују велику заинтересованост за
                живот у граду.{" "}
              </p>
              <p className="m-4 sm:text-base">
                Када су школе у Шепку и Скочићу постале претијесне, а у Роћевићу
                било довољно дјеце за формирање одјељења, власти су одобриле
                оснивање одјељења првог разреда у Роћевићу. Адаптирана је једна
                просторија у тек изграђеном Задружном дому и ту се у септембру
                1952/53. школске године отвара одјељење првог разреда. Први пут
                у историји Роћевић има своју школу. Први учитељ звао се Никола
                Симић, родом из Пилице. Тада је уписано 34 ђака, од чега 18
                дјевојчица, што је за то вријеме било неуобичајено, јер су
                дјевојчице ријетко ишле у школу. Већ сљедеће школске 1953/54. у
                Роћевићу имамо три разреда. После завршена четири разреда у
                Роћевићу ученици су настављали школовање у Козлуку, у којој је
                од 1950. године уведено осмогодишње образованје. Пошто се
                путовало пјешке већина ђака није могла завршити потпуну основну
                школу. Од 1961/62. школске године у адаптираној учионици
                Задружног дома почела је настава за пети разред. Наставу су
                углавном изводили учитељи. Пошто је стара школа већ сасвим
                дотрајала, а простор у дому није био адекватан, почело се
                размишљати о градњи нове школе. У зиму 1964. године школа је
                била озидана. Наредне 1966/67. школске године дјеца у шести
                разред иду у школу Роћевић, а не у Козлук.
              </p>
              <p className="m-4 sm:text-base">
                У нову 1967/68. школску годину школа улази са седам разреда и
                престаје да буде подручно одјељење Основне школе “Петар Кочић”
                Козлук, а постаје Основна школа “Братство-јединство” Роћевић. У
                школи повремено излази лист “Пчелица”. Школске 2005/06.
                обиљежено је 40 година рада школе, издата монографија “Првих 40
                година рада школе”. 2015/16. школа је прославила 50 година рада.{" "}
              </p>
              <p className="m-4 sm:text-base">
                Данас Основна школа “Вук Караџић” Роћевић броји преко 480
                ученика и преко 60 запослених лица. Основна школа Роћевић
                поседује два подручна одјељења, подручно одјељење у Брањеву и
                подручно одјељење у Кисељаку.{" "}
              </p>
              <div className="flex justify-end items-end">
                <Image
                  className="  transition duration-300 ease-in-out hover:scale-110     rounded-3xl "
                  alt="ilustracija masine za stampanje "
                  src={"/Logo,_Os_Vuk_Karadzic_Rocevic.png"}
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
