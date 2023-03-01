import styles from "../styles/BlogCard.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

function BlogPost({ title, author, coverPhoto, datepublish, slug, content}) {
  return (
    <div className=" hover:opacity-70 hover:animate-pulse ">
        <div className="    overflow-hidden hover:sm:w-80     w-72 bg-orange-600  sm:w-96 shadow-xl rounded-3xl m-1 ">
          <Link href={`/posts/`+ slug}>
            <div className={styles.imgContainer}>
              <Image layout="fill" src={coverPhoto.url} alt="ccvb" />
            </div>
          </Link>
          <div className=' text-center my-6 text-xl'>
            <h2>{title}</h2>
            <div className={styles.details}>
              <div className={styles.author}>
                
                <img src={author.avatar.url} alt={author.ime} />
                <h3>{author.name}</h3>
              </div>
              <div className={styles.date}>
                <h3>{moment(datepublish).format(" d MMMM, YYYY.")}</h3>
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