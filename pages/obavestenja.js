// pages/obavestenja.js
import Header from "/components/header.js";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// Import Swiper styles
import Footer from "/components/footer.js";
// import required modules
import Meta from "/components/seo-meta.js";
import TwoPostsPic from "/components/TwoPostsPic.js";
import AllpostsText from "/components/AllpostsText.js";
import { GraphQLClient, gql } from "graphql-request";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("/components/NavVert"), { ssr: false });

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cld1yz5560k8j01umg34xfwv5/master"
);
const QUERY = gql`
  {
    posts(orderBy: datepublish_DESC) {
      id
      title
      datepublish
      slug
      content {
        html
      }
      author {
        ime
        avatar {
          url
        }
      }
      coverPhoto {
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
// pages/obavestenja.js
export default function Obavestenja({ posts }) {
  return (
    <div>
      <Meta />

      <main className="  float-none m-auto shadow-2xl  ">
        <section>
          <Header />
        </section>

        <NoSSR />
        <section className="flex sm:flex-row flex-col justify-evenly mt-10">
          <div>
            <h1 className="text-[#F37748] text-center text-4xl font-bold py-10">
              Најновија обавјештења
            </h1>
            {posts.slice(0, 2).map((post) => (
              <TwoPostsPic
                coverPhoto={post.coverPhoto}
                slug={post.slug}
                title={post.title}
              />
            ))}
          </div>
          <div className=" bg-[#f37748] text-center p-5  m-20 mt-20 rounded-xl">
            <h1 className=" text-center text-2xl font-bold text-white opacity-60">
              Сва обавјештења
            </h1>
            {posts.map((post) => (
              <AllpostsText title={post.title} slug={post.slug} />
            ))}
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
