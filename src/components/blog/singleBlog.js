import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import BlogItem from "../index/blogItem";
import { Tag } from "../button";
import { getAllBlogs, getFavoriteBlogs, showBlog } from "../../api/blog";
import { domain } from "../../api/domain";
import { useRouter } from "next/router";
import Head from "next/head";

const SingleBlog = () => {

    const router = useRouter();
    const [data , setData] = useState(null);
    const [favoriteBlogs , setFavoriteBlogs] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await showBlog(router.query.slug);
            setData(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [router.query.slug]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllBlogs();
            setFavoriteBlogs(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    const handleGo = (slug) => {
        router.push("/blog/" + slug);
        window.location.reload();
    };

    



    return(
        <>
            <Head>
                {
                    data?.follow === false && data?.index === false ? <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" /> :
                    data?.follow === false && data?.index === true ? <meta name="robots" content="follow, noindex" /> : 
                    data?.follow === true && data?.index === false ? <meta name="robots" content="nofollow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" /> :
                    data?.follow === true && data?.index === true ? <meta name="robots" content="nofollow, noindex" /> : ""
                }
                <link rel="canonical" href={data?.canonical === "" ? "https://hamidehsakak.com/program/" + data?.category + data?.slug : data?.canonical} />
                <meta property="article:modified_time" content={data?.updated} />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={data?.subcategory} />
                <meta property="og:url" content={"https://hamidehsakak.com/program/" + data?.category + data?.slug} />
                <meta name="description" content={data?.meta_description} />
                <meta name="title" content={data?.meta_title} />
            </Head>
            <div className={styles.singleblog + " mt-10"} style={{marginTop: "50px"}}>
                <div className={styles.singleblog__left}>
                    <div className={styles.left + " p-5 rounded-xl flex flex-col gap-3"}>
                        <p className="text-lg font-bold">آخرین مطالب</p>
                        {favoriteBlogs?.map((item) => (
                            <p key={item.slug} className="text-[#EF1B47] text-right cursor-pointer" style={{ direction: "rtl" }} onClick={() => handleGo(item?.id)}>
                                {item?.title}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.singleblog__right}>
                    <div className={styles.hero}>
                        <img src={data?.thumb} alt="image" />
                    </div>
                    <div className={styles.title}>
                        <p>
                            {data?.title}
                        </p>
                    </div>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.body}}></div>
                    {/* <div className={styles.tags}>
                        {data?.tag?.map((item) => (
                            <Tag>
                                {item}
                            </Tag>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SingleBlog;