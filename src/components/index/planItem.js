import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { domain } from "../../api/domain";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const PlanItem = ({data}) => {


    useEffect(() => {
        AOS.init();
    }, [])


    return(
        <Link href={"/program/" + data?.slug} data-aos="zoom-in" data-aos-duration="1500">
            <div className={styles.planitem}>
                <img src={domain + data?.icon.substring(1)} alt="image" />
                <p>
                    {data?.category}
                </p>
            </div>
        </Link>
    )
}

export default PlanItem;