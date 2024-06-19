import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import BlogItem from "../index/blogItem";
import { getAllBlogs } from "../../api/blog";
import Link from "next/link";

const Blog = () => {

    const [blogs , setBlogs] = useState(null);




    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllBlogs();
            setBlogs(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);







    return(
        <div className={styles.blog + " max-md:mt-20"}>
            <div className={styles.blog__hero}>
                <div className={styles.banner}>
                    <img src="../../images/blogarchivehero.png" alt="image" />
                </div>
                <div className={styles.desc}>
                    <p className={styles.title}>
                        مجله خبری کانادا 
                    </p>
                    <p className={styles.info}>
                        جدیدترین اخبار هفته کانادا 
                    </p>
                </div>
            </div>
            <div className={styles.blog__archive}>
                <div className={styles.blog__archive__body}>
                    {blogs && blogs.slice(0).map(blog => (
                        <Link href={"/blog/" + blog?.slug}>
                            <div className={styles.item}>
                                <div className={styles.arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="104" viewBox="0 0 103 104" fill="none">
                                        <g filter="url(#filter0_d_971_2176)">
                                            <circle cx="51.5" cy="49.5" r="24.5" fill="#EF1B47"/>
                                        </g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1997 58.6472C55.8286 58.144 55.9306 57.2263 55.4275 56.5974L48.3785 47.7862L55.4275 38.975C55.9306 38.3461 55.8286 37.4283 55.1997 36.9252C54.5708 36.4221 53.6531 36.524 53.1499 37.153L45.3721 46.8752C44.9461 47.4078 44.9461 48.1646 45.3721 48.6972L53.1499 58.4194C53.6531 59.0483 54.5708 59.1503 55.1997 58.6472Z" fill="white"/>
                                        <defs>
                                            <filter id="filter0_d_971_2176" x="0.0500011" y="0.628948" width="102.9" height="102.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="2.57895"/>
                                            <feGaussianBlur stdDeviation="13.475"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.82 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_971_2176"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_971_2176" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={styles.desc}>
                                    <p>
                                        {blog?.description}
                                    </p>
                                </div>
                                <div className={styles.index}>
                                    <BlogItem banner={blog?.banner} content={blog?.content} created={blog?.created} id={blog?.id} slug={blog?.slug} title={blog?.title}/>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog;