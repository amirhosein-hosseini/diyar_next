import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import BlogItem from "../index/blogItem";
import { Tag } from "../button";
import { getFavoriteBlogs, showBlog } from "../../api/blog";
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
            setData(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [router.query.slug]);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getFavoriteBlogs(3);
            setFavoriteBlogs(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [router.query.slug]);
    



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
            <div className={styles.singleblog}>
                <div className={styles.singleblog__left}>
                    <div className={styles.related}>
                        {favoriteBlogs?.map((item) => (
                            <BlogItem banner={item?.banner} content={item?.content} created={item?.created} id={item?.id} slug={item?.slug} title={item?.title} />
                        ))}
                    </div>
                </div>
                <div className={styles.singleblog__right}>
                    <div className={styles.hero}>
                        <img src={domain + data?.banner.substring(1)} alt="image" />
                    </div>
                    <div className={styles.title}>
                        <p>
                            {data?.title}
                        </p>
                    </div>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.content}}></div>
                    <div className={styles.tags}>
                        {data?.tag?.map((item) => (
                            <Tag>
                                {item}
                            </Tag>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog;