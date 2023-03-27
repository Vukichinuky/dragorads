import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/Slug.module.css";
import moment from "moment";
import NavVert from '/components/NavVert.jsx'
import Header from '/components/header.js'
import Footer from '/components/footer.js'

export const revalidate = 600;

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cld1yz5560k8j01umg34xfwv5/master");

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datepublish
      author {
        id
        ime
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>

      <nav>
        <Header />

        <NavVert />
      </nav>

      <div className="sm:flex sm:justify-center  max-w-6xl m-auto sm:items-center sm:flex-col ">
        <div className="sm:flex sm:flex-col  sm:justify-evenly sm:mt-20">
          <img
            className=' m-auto w-72 sm:rounded-2xl sm:shadow-2xl '
            src={post.coverPhoto.url}
            alt={post.title}
          />
          <div className=' p-10 m-10'>
            <div className={styles.authdetails}>
              <img src={post.author.avatar.url} alt={post.author.ime} />
              <div className=' '>
                <h6>Od {post.author.ime} </h6>
                <h6 className={styles.date}>
                  {moment(post.datepublish).format("MMMM d, YYYY")}
                </h6>
              </div>
            </div>
          </div>

        </div>
        <div><h2 className="text-center text-xl   max-w-6xl m-auto sm:text-3xl">{post.title}</h2></div>

        <div

          className='  sm:m-28 p-8  sm:text-xl text-m'
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
      <section>

        <Footer />
      </section>
    </main>
  );
}