import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import PlanItem from "./planItem";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Plans = ({data}) => {



    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <div className={styles.planswrapper}>
            <div className={styles.plans}>
                <div className={styles.plans__title}>
                    <p>
                        برنامه های مهاجرتی
                    </p>
                </div>
                <div className={styles.plans__items}>
                    {data?.map((item) => (
                        <PlanItem data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plans;