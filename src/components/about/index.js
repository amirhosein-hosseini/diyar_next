import React from "react";
import styles from "./styles.module.scss";
import AboutTeamItem from "./aboutTeamItem";

const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.about__hero}>
                <div className={styles.herowrapper}>
                    <div className={styles.image}>
                        <img src="../../images/aboutheroimage.png" alt="image" />
                    </div>
                </div>
            </div>
            <div className={styles.about__desc}>
                <div className={styles.descwrapper}>
                    <div className={styles.aboutvector}>
                        <img src="../../images/aboutvector.png" alt="vector" />
                    </div>
                    <p className={styles.title}>
                        ما بهترین خدمات را ارائه می دهیم
                    </p>
                    <p className={styles.desc}>
                        تصمیم به مهاجرت تصمیمی توام با امید و نگرانی است. از این رو سوالات بسیاری در این مسیر برای موکلان ما ایجاد می شود. ما نیز این روزها را سپری کرده ایم و نگرانی های شما را می شناسیم. پرونده شما پس از بررسی و بازنگرهای متعدد و با اطمینان خاطر به اداره مهاجرت ارسال خواهد شد. ما معتقدیم موفقیت شما رمز موفقیت ماست.
                    </p>
                </div>
            </div>
            <div className={styles.about__team}>
                <AboutTeamItem />
                <AboutTeamItem />
                <AboutTeamItem />
                <AboutTeamItem />
                <AboutTeamItem />
                <AboutTeamItem />
                <AboutTeamItem />
                <AboutTeamItem />
            </div>
            <div className={styles.about__video + " flex justify-center items-center"}>
                <a target="_blank" href="https://maps.google.com/maps?ll=43.838839,-79.381471&z=16&t=m&hl=en&gl=US&mapclient=embed&q=55%20Commerce%20Valley%20Dr%20W%20Thornhill%2C%20ON%20L3T%207V9%20Canada">
                    <img src="../../images/map.png" alt="map" />
                </a>
            </div>
        </div>
    )
}

export default About;