import React from "react";
import styles from "./styles.module.scss";

const AboutTeamItem = () => {
    return(
        <div className={styles.aboutteamitem}>
            <div className={styles.image}>
                <img src="../../images/aboutitem.png" alt="image" />
            </div>
            <div className={styles.footer}>
                <p className={styles.name}>
                    اسم و فامیل 
                </p>
                <p className={styles.job}>
                    موقعیت شغلی 
                </p>
            </div>
        </div>
    )
}

export default AboutTeamItem;