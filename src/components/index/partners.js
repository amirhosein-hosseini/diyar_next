import React from "react";
import { domain } from "../../api/domain";
import styles from "./styles.module.scss";

const Partners = ({data}) => {
    return(
        <div className={styles.partners}>
            <div className={styles.partners__title}>
                <p>
                    مورد اعتماد بیش از ۵۰۰+ شرکت در سراسر جهان
                </p>
            </div>
            <div className={styles.partners__body}>
                <div className={styles.items}>
                    {data?.map((item) =>(
                        <div className={styles.item}>
                            <img src={domain + item?.logo.substring(1)} alt="image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners;