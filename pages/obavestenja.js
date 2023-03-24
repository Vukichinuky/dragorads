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
import NavVert from '/components/NavVert.js'
import Meta from '/components/seo-meta.js'



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




        <NavVert />



        <section>
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
        </section>

        <section>

          <Footer />
        </section>
      </main>

    </div>
  )
}
