import styles from "../styles/BlogCard.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

function BlogPost({ title, author, coverPhoto, datepublish, slug, content }) {
  return (
    <div className=" ">
      <div className=" p-10    overflow-hidden hover:animate-pulse  shadow-black w-72 mb-10 md:w-96 bg-[#FFBC42]  shadow-lg rounded-3xl m-1 ">
        <div className="">
          <Link href={`/posts/` + slug}>
            <div className={styles.imgContainer}>
              <Image layout="fill" src={coverPhoto.url} className={'rounded-3xl shadow-black shadow-lg'} alt="ccvb" />
            </div>
          </Link>
        </div>
        <div className=' text-center my-6 text-xl'>
          <div className=" bg-[#fea400] z-10 relative  rounded-3xl px-5 py-14 shadow-black shadow-lg">
            <h2>{title}</h2>
          </div>
          <div className="bg-[#FFD892] -z-10 rounded-3xl px-5 py-10 shadow-black shadow-2xl ">
            <div className={styles.details}>
              <div className={styles.author}>
                <img src={author.avatar.url} alt={author.ime} />
                <h3>{author.name}</h3>
              </div>
              <div className={styles.date}>
                <h3>{moment(datepublish).format(" DD MMMM YYYY")}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default BlogPost;