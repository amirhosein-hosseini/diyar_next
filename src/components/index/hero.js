import React from "react";
import styles from "./styles.module.scss";
import { PrimaryBtn } from "../button";
import AnimatedNumber from "../animation/animatedNumber";
import ParticlesAnimation from "../animation/Particles";
import Link from "next/link";

const Hero = ({data}) => {
    return(
        <>
        <div className={styles.hero}>
            <ParticlesAnimation />
            <div className={styles.herowrapper}>
                <div className={styles.herodescwrapper}>
                    <div className={styles.hero__desc}>
                        <p className={styles.title}>
                            سازمان مهاجرتی دیار 
                        </p>
                    </div>
                    <div className={styles.hero__benefits}>
                        <div className={styles.item}>
                            <p className={styles.number}>
                                <AnimatedNumber value={data?.user_count} />
                            </p>
                            <p className={styles.desc}>
                                کاربران
                            </p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.number}>
                                <AnimatedNumber value={data?.success_visa} />
                            </p>
                            <p className={styles.desc}>
                                ویزای موفق
                            </p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.number}>
                                <AnimatedNumber value={data?.fix_rejection} />
                            </p>
                            <p className={styles.desc}>
                                رفع ریجکتی
                            </p>
                        </div>
                    </div>
                    <div className={styles.hero__btn}>
                        <Link href={"/smart-form"}>
                            <PrimaryBtn>
                                فرم ارزیابی  
                            </PrimaryBtn>
                        </Link>
                    </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Hero;