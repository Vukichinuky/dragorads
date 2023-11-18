// components/AllpostsText.js
import styles from "../styles/Home.module.css";
import Link from "next/link";
import BlogCard from "/components/BlogCard";
import Image from "next/image";
//
export default function TwoPostsPic({ coverPhoto, slug, title }) {
  return (
    <div className="flex flex-col p-5 items-center justify-center">
      <Link href={`/posts/` + slug}>
        <Image
          className="rounded-xl"
          src={coverPhoto.url}
          alt={title}
          width={400}
          height={400}
        />
        <h2 className="text-center text-xl p-5 text-[#FEA400] font-bold">
          {title}
        </h2>
      </Link>
    </div>
  );
}
