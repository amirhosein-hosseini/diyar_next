import React from "react";
import styles from "./styles.module.scss";

const ProgramList = () => {
    return(
        <div className={styles.programlist}>
            <div className={styles.title}>
                <p>
                    شرایط سنی برای اخذ ویزای تحصیلی کانادا چگونه است؟
                </p>
            </div>
            <ul>
                <li>
                    از یکی از دانشگاه‌ها یا کالج‌های معتبر کانادا دارای شماره DLI پذیرش داشته باشید؛
                </li>
            </ul>
        </div>
    )
}

export default ProgramList;