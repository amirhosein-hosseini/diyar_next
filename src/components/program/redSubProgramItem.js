import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const RedSubProgramItem = ({slug , category , subCategory , desc , categorySlug}) => {
    return(
        <Link href={"/program/" + categorySlug + "/" + slug} className={styles.RedSubProCatItem + " rounded-xl bg-[#EF1B47] p-5 max-md:p-3 flex flex-col gap-5 max-md:gap-2"}>
            <div className={styles.title + " text-center"}>
                <p className="text-xl font-bold text-white max-md:text-lg">
                    {subCategory}
                </p>
            </div>
            <div className={styles.desc + " text-center"}>
                <div className={styles.desc + " text-white max-md:text-xs"} dangerouslySetInnerHTML={{ __html: desc}}></div>
            </div>
            <div className={styles.footer}>
                <svg className="max-md:w-[40px]" xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
                    <g clip-path="url(#clip0_1825_3760)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1492 44.0769C10.9896 36.9173 10.9896 25.3093 18.1492 18.1497C25.3088 10.99 36.9168 10.99 44.0764 18.1497C51.236 25.3093 51.236 36.9173 44.0764 44.0769C36.9168 51.2365 25.3088 51.2365 18.1492 44.0769ZM21.7142 32.0856C21.1772 31.5486 21.1772 30.678 21.7142 30.141L28.8442 23.011C29.3811 22.474 30.2517 22.474 30.7887 23.011C31.3257 23.548 31.3257 24.4186 30.7887 24.9556L26.006 29.7383L39.5391 29.7383C40.2985 29.7383 40.9141 30.3539 40.9141 31.1133C40.9141 31.8727 40.2985 32.4883 39.5391 32.4883L26.006 32.4883L30.7887 37.271C31.3257 37.808 31.3257 38.6786 30.7887 39.2155C30.2517 39.7525 29.3811 39.7525 28.8442 39.2155L21.7142 32.0856Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1825_3760">
                    <rect width="44" height="44" fill="white" transform="translate(0 31.1133) rotate(-45)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </Link>
    )
}

export default RedSubProgramItem;