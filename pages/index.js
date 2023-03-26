import Header from '/components/header.js'
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import { GraphQLClient, gql } from 'graphql-request'
import BlogCard from '/components/BlogCard'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Footer from '/components/footer.js'
// import required modules
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import Navbar from '/components/Navbar.jsx'
import Meta from '/components/seo-meta.js'
import Image from 'next/image'


const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cld1yz5560k8j01umg34xfwv5/master"
);
const QUERY = gql`
 {
  posts {
    id
    title
    datepublish
    slug
    content{
      html
    }
    author{
      ime
      avatar{
        url
      }
    }
    coverPhoto{
      url
    }
    }
  }
`;
export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 130,
  };
}
export default function Home({ posts }) {

  return (
    <div >
      <Meta />


      <main className='  float-none m-auto shadow-2xl  '>
        <section>
          <Header />
        </section>


        <section>
          <nav className='  w-auto absolute'>



            <Navbar />


          </nav>


          <div>
            <img className='relative  -z-10  ' src="naslovnaslika.jpg" alt="slika skolske torbe na stolu" />
          </div>


          <div className='  text-lg xl:text-2xl sm:opacity-80 cursor-pointer  text sm:flex sm:justify-evenly grid place-items-center'>
            <Link href="https://e-dnevnik.edu.ba/Account/Login?ReturnUrl=%2F" title="">
              <div className=' text-white shadow-2xl shadow-black  circle relative xl:-top-32 sm:-top-20 mt-5 sm:w-56 sm:h-56 xl:w-96 xl:h-96 w-64 h-64 rounded-full grid place-items-center'>
                <img className=' opacity-80 xl:h-72 sm:h-36 h-48   ' src='/student-cap-svgrepo-com.svg' alt='next' />
                <h1 className='mb-10 opacity-70 text-center text-sm font-bold sm:text-xl '>еДневник <br /> за ученике</h1>
              </div>
            </Link>

            <Link href="https://e-dnevnik.edu.ba/Account/Login?ReturnUrl=%2F" title="">
              <div className=' text-white shadow-black  shadow-2xl circle relative xl:-top-32 sm:-top-20 w-64 max-xl:mt-5 sm:w-56 sm:h-56  h-64 xl:w-96 xl:h-96 rounded-full grid place-items-center'>
                <img className=' opacity-70 xl:h-72 sm:h-36 h-48   ' src="family-silhouette-svgrepo-com.svg" alt="" />
                <h1 className='mb-10 opacity-70 text-sm font-bold sm:text-xl text-center '>еДневник <br /> за родитеље</h1>
              </div>
            </Link>

            <Link href="https://e-dnevnik.edu.ba/Account/Login?ReturnUrl=%2F" title="">
              <div className='text-white shadow-black  shadow-2xl circle relative xl:-top-32 w-64 max-xl:mt-5 sm:-top-20 sm:w-56 sm:h-56  h-64 xl:w-96 xl:h-96  rounded-full grid place-items-center'>
                <img className=' opacity-70 mt-1 md:mt-4 xl:h-72 sm:h-36 h-48   ' src="business-person-silhouette-wearing-tie-svgrepo-com.svg" alt="" />
                <h1 href="https://e-dnevnik.edu.ba/Account/Login?ReturnUrl=%2F" className='mb-20 text-center font-bold text-sm sm:text-xl opacity-70 '>еДневник <br /> за наставнике
                </h1>


              </div>
            </Link>
          </div>





        </section>

        <section>
          <h1 className=' text-center m-20 font-bold text-amber-400  text-3xl sm:text-7xl ' >Новости</h1>
          <div className={styles.container}>
            {posts.map((post) => (
              <BlogCard title={post.title}
                author={post.author}
                coverPhoto={post.coverPhoto}
                key={post.id}
                datepublish={post.datepublish}
                content={post.content}
                slug={post.slug} />
            ))}

          </div>
        </section>

        <div className=' bg-amber-400 w-48 text-white  flex justify-center m-auto shadow-2xl p-4  rounded-3xl mt-10 decoration-white'>
          <Link className='text-white' style={{ textDecoration: 'none' }} href={'/obavestenja'}>
            Сва обавјештења</Link>
        </div>

        <section>
          <>
            <Swiper slidesPerView={2}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              speed={5000}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}


              className="mySwiper max-sm:hidden  rounded-3xl shadow-2xl m-40  "
            >
              <SwiperSlide>
                <div className='rounded-t-3xl flex sm:justify-around'>
                  <Link href='https://vladars.net/sr-SP-Cyrl/Vlada/Ministarstva/mpk/Pages/default.aspx'>
                    <img
                      className="  "
                      src="/min-logo.jpg"
                      alt="image slide 2"
                    />
                  </Link>
                  <Link href='https://www.rpz-rs.org/'>
                    <img
                      className="  "
                      src="/rpz-logo.jpg"
                      alt="image slide 2"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=' flex sm:justify-around'>

                  <Link href='https://ucenik.skolers.org/'>
                    <img
                      className="  "
                      src="/eduis-ednevnik.png"
                      alt="image slide 2"
                    />
                  </Link>
                  <Link href='https://enastava.skolers.org/'>
                    <img
                      className="  "
                      src="/eNastava-logo-cyr.png"
                      alt="image slide 2"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=' flex align-middle sm:justify-around'>

                  <Link href='https://skolers.org/materijali/covid-19/'>
                    <img
                      className="  "
                      src="/Covid19.png"
                      alt="image slide 2"
                    />
                  </Link>
                  <Link href='http://eobrazovanje.com/Pages/dositej.aspx'>
                    <img
                      className="  "
                      src="/dositej-logo.png"
                      alt="image slide 2"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          <>
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              speed={5000}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}

              className="mySwiper rounded-3xl shadow-2xl   telefon sm:hidden m-40  "
            >
              <SwiperSlide>
                <div className='  flex justify-center sm:justify-around'>

                  <Link href='https://vladars.net/sr-SP-Cyrl/Vlada/Ministarstva/mpk/Pages/default.aspx'>
                    <img
                      className="  "
                      src="/min-logo.jpg"
                      alt="image slide 2"
                    />
                  </Link>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=' flex justify-center sm:justify-around'>

                  <Link href='https://www.rpz-rs.org/'>
                    <img
                      className="  "
                      src="/rpz-logo.jpg"
                      alt="image slide 2"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=' flex justify-center sm:justify-around'>

                  <Link href='https://ucenik.skolers.org/'>
                    <img
                      className="  "
                      src="/eduis-ednevnik.png"
                      alt="image slide 2"
                    />
                  </Link>

                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className=' flex align-middle	 justify-center sm:justify-around'>
                  <Link href='https://skolers.org/materijali/covid-19/'>
                    <img
                      className="  "
                      src="/Covid19.png"
                      alt="image slide 2"
                    />
                  </Link>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=' flex justify-center sm:justify-around'>

                  <Link href='https://enastava.skolers.org/'>
                    <img
                      className="  "
                      src="/eNastava-logo-cyr.png"
                      alt="image slide 2"
                    />
                  </Link>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=' flex  justify-center sm:justify-around'>
                  <Link href='http://eobrazovanje.com/Pages/dositej.aspx'>
                    <img
                      className="  "
                      src="/dositej-logo.png"
                      alt="image slide 2"
                    />
                  </Link>
                </div></SwiperSlide>
            </Swiper>
          </>
          <div className='flex   items-center justify-center mb-20 m-3'>
            <Link href={'https://www.google.com/maps/place/O%C5%A0+%22Vuk+Karad%C5%BEi%C4%87%22+-+Ro%C4%87evi%C4%87/@44.5359128,19.1415876,17z/data=!4m14!1m7!3m6!1s0x475961b2c4b213a1:0x7f9d16c6ff6ca75e!2zT8WgICJWdWsgS2FyYWTFvmnEhyIgLSBSb8SHZXZpxIc!8m2!3d44.535909!4d19.1437763!16s%2Fg%2F11jjw7kvpz!3m5!1s0x475961b2c4b213a1:0x7f9d16c6ff6ca75e!8m2!3d44.535909!4d19.1437763!16s%2Fg%2F11jjw7kvpz'}>
              <Image
                className="    transition duration-300 ease-in-out hover:scale-110     rounded-3xl "
                alt="Mapa skole "
                src={'/mapa.png'}
                width={700}
                height={250}
              />
            </Link>
          </div>
        </section>

        <section>

          <Footer />
        </section>
      </main>

    </div>
  )
}
