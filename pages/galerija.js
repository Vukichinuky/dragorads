"use client";
import NavVert from "/components/NavVert.jsx";
import Header from "/components/header.js";
import Footer from "/components/footer.js";
import Head from "next/head";
import Image from "next/image";

export default function Galerija() {
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
            <h1 className="text-[#FEA400] text-center text-4xl font-bold m-8">
              {" "}
              Галерија
            </h1>
            <div className="  mt-28 text-justify p-8  max-w-6xl m-auto   z-10 ">
              <h1 className=" mb-10 font-bold text-white bg-[#f37748] py-4 rounded-xl px-3  text-left sm:text-2xl">
                Новогодишње чаролије - 25.11.2021 - 01.01.2022
              </h1>
              <div className=" md:flex flex-wrap   ">
                <Image
                  width={400}
                  height={600}
                  className="m-2 h-96"
                  src="/325591657_3371335779799594_8455277550985690747_n.jpg"
                  alt=""
                />

                <img
                  className="m-2 h-96"
                  src="/326795598_915356876138603_4396425158505957261_n.jpg"
                  alt=""
                />

                <img
                  className="m-2 h-96"
                  src="/326802203_714838903358346_6275484961395910159_n.jpg"
                  alt=""
                />

                <img
                  className="m-2 h-96"
                  src="/328320934_516951200525055_3775321121430441807_n.jpg"
                  alt=""
                />

                <img
                  className="m-2 h-96"
                  src="/328468034_1771102369957166_9032641668976728861_n.jpg"
                  alt=""
                />
              </div>

              <h1 className=" mb-10 font-bold mt-10 text-white bg-[#f37748] py-4 rounded-xl px-3  text-left sm:text-2xl">
                Мала матура - 03.06.2021
              </h1>
              <div className=" md:flex flex-wrap   ">
                <img
                  className="m-2 h-96"
                  src="/325860251_1134331167281611_6600092385945959450_n.jpg"
                  alt=""
                />
                <img
                  className="m-2 h-96"
                  src="/327590849_948292409913811_7235699669446097449_n.jpg"
                  alt=""
                />
                <img
                  className="m-2 h-96"
                  src="/327728311_842946900102455_6709622399947185957_n.jpg"
                  alt=""
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
