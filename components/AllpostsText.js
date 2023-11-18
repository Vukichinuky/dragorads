// components/AllpostsText.js
import styles from "../styles/Home.module.css";
import Link from "next/link";
import BlogCard from "/components/BlogCard";

export default function AllpostsText({ slug, title }) {
  return (
    <div>
      <main>
        <ul className="">
          <li className="text-xl text-center py-4 max-w-xs font-bold opacity-70">
            <Link href={`/posts/` + slug}>{title} </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
