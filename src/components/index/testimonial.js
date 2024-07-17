import React from "react";
import styles from "./styles.module.scss";
import Slider1 from "../slider/Slider1";
import { domain } from "../../api/domain";

const Testimonial = ({data}) => {
    return(
        <div className={styles.testimonial}>
            <div className="flex items-center justify-center max-md:max-w-[170px] max-md:overflow-hidden max-md:mx-auto">
                <img className="max-md:object-cover max-md:w-full" src="../../images/testtitle.png" alt="image" />
            </div>
            <div className="grid grid-cols-3 mt-10 max-md:flex" style={{direction: "rtl"}}>
                {data?.map((item) => (
                    <div className={styles.item}>
                        <div className={styles.item__header}>
                            <div className={styles.image}>
                                <img src={data?.profile_img} alt="image" />
                            </div>
                            <div className={styles.headerleft}>
                                <div className={styles.location}>
                                    <p>
                                        {item?.country}
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M15.1834 6.04134C14.3084 2.19134 10.9501 0.458008 8.00008 0.458008C8.00008 0.458008 8.00008 0.458008 7.99175 0.458008C5.05008 0.458008 1.68341 2.18301 0.808413 6.03301C-0.166587 10.333 2.46675 13.9747 4.85008 16.2663C5.73341 17.1163 6.86675 17.5413 8.00008 17.5413C9.13341 17.5413 10.2667 17.1163 11.1417 16.2663C13.5251 13.9747 16.1584 10.3413 15.1834 6.04134ZM8.00008 10.2163C6.55008 10.2163 5.37508 9.04134 5.37508 7.59134C5.37508 6.14134 6.55008 4.96634 8.00008 4.96634C9.45008 4.96634 10.6251 6.14134 10.6251 7.59134C10.6251 9.04134 9.45008 10.2163 8.00008 10.2163Z" fill="#5D5E60" />
                                    </svg>
                                </div>
                                <div className={styles.stars}>
                                    <img src="../../images/stars.png" alt="vector" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.item__body}>
                            <p className={styles.title}>
                                {item?.title}
                            </p>
                            <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.body }}></div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Testimonial;