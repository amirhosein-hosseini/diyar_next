import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { ArrowBtn } from "../button";
import { domain } from "../../api/domain";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const Points = ({data , image}) => {


    useEffect(() => {
        AOS.init();
    }, [])



    return(
        <div className={styles.points}>
            <div className={styles.points__title}>
                <p>
                    مهاجرت آسان و مطمئن
                </p>
            </div>
            <div className={styles.pointwrapper}>
                <div className={styles.points__wrapper}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <p>
                                چرا ما را انتخاب می کنید
                            </p>
                        </div>
                        <div className={styles.buttons}>
                            <Link href={"/about"}>
                                <ArrowBtn>
                                    درباره ما 
                                </ArrowBtn>
                            </Link>
                            <ArrowBtn>
                                سوالات متداول 
                            </ArrowBtn>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <p className={styles.title}>
                            چرا سازمان مهاجرتی دیار را انتخاب کنیم؟
                        </p>
                        <ul>
                            {data?.map((item) => (
                                <li>
                                    <div  dangerouslySetInnerHTML={{ __html: item?.row}}></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.image} data-aos="fade-left" data-aos-duration="2000">
                    <img src={domain + image?.substring(1)} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Points