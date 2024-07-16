import React from "react";
import styles from "./styles.module.scss";
import { LittlePrimaryBtn } from "../button";
import { domain } from "../../api/domain";
import Link from "next/link";

const BlogItem = ({image , title , desc , slug}) => {


    return(
        <Link href={"/blog/" + slug}>
            <div className={styles.blogitem + " h-[372px] duration-300 hover:scale-105 max-md:h-[222px] w-[250px] min-md:min-w-[250px] flex flex-col justify-between"}>
                <div className={styles.image + " max-h-[210px] overflow-hidden rounded-lg"}>
                    <img className="rounded-lg object-cover w-full h-full w-[200px] h-[140px] max-md:w-[140px] max-md:h-[100px]" src={image} alt="image" />
                </div>
                <div className={styles.title}>
                    <p>
                        {title}
                    </p>
                </div>
                <div className={styles.desc}>
                    <p>
                        {desc}
                    </p>
                </div>
                <div className={styles.footer}>
                    <p>
                        ۱۰ آذر ۱۴۰۲
                    </p>
                    <LittlePrimaryBtn>
                        مشاهده
                    </LittlePrimaryBtn>
                </div>
            </div>
        </Link>
    )
}

export default BlogItem;