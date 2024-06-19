import React from "react";
import styles from "./styles.module.scss";
import BlogItem from "./blogItem";
import Link from "next/link";

const HomeSlider = ({data}) => {
    return(
        <div className={styles.homesliderwrapper}>
            <div className={styles.homeslidervector}>
                <img src="../../images/homevector.png" alt="vector" />
            </div>
            <div className={styles.homeslider}>
                <Link href={"/blog"} className="mr-auto">
                    <div className={styles.homeslider__header}>
                        <p>
                            مجله کانادا
                        </p>
                        <div className={styles.arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41841 16.8171C7.87486 16.4519 7.94887 15.7859 7.58371 15.3294L2.46782 8.93459L7.58371 2.53973C7.94887 2.08328 7.87486 1.41723 7.41841 1.05207C6.96196 0.686909 6.29591 0.760914 5.93075 1.21736L0.28592 8.27341C-0.0233205 8.65995 -0.0233206 9.20922 0.28592 9.59577L5.93075 16.6518C6.29591 17.1083 6.96196 17.1823 7.41841 16.8171Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </Link>
                <div className={styles.homeslider__items}>
                    {data?.map((item) => (
                        <BlogItem banner={item?.banner} content={item?.content} created={item?.created} description={item?.description} id={item?.id} slug={item?.slug} title={item?.title}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeSlider;