import React from "react";
import styles from "./styles.module.scss";

export const PrimaryBtn = ({children}) => {
    return(
        <button className={styles.primarybtn + " flex justify-center items-center text-center gap-3"}>
            {children}
        </button>
    )
}

export const ArrowBtn = ({children}) => {
    return(
        <button className={styles.arrowbtn}>
            <div className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.36668 10.4869C5.63838 10.2696 5.68243 9.87311 5.46507 9.60141L2.41989 5.79493L5.46507 1.98845C5.68243 1.71675 5.63838 1.32029 5.36668 1.10293C5.09499 0.885575 4.69853 0.929627 4.48117 1.20132L1.12113 5.40137C0.937062 5.63146 0.937062 5.9584 1.12113 6.18849L4.48117 10.3885C4.69853 10.6602 5.09498 10.7043 5.36668 10.4869Z" fill="white"/>
                </svg>
            </div>
            {children}
        </button>
    )
}

export const LittlePrimaryBtn = ({children}) => {
    return(
        <button className={styles.littleprimarybtn}>
            {children}
        </button>
    )
}

export const SecondPrimaryBtn = ({children}) => {
    return(
        <button className={styles.secondprimarybtn + " w-full"}>
            {children}
        </button>
    )
}

export const Tag = ({children}) => {
    return(
        <button className={styles.tag}>
            {children}
        </button>
    )
}


export const GreenButton = ({children}) => {
    return(
        <button className={styles.greenbutton + " bg-[#06E775] py-2 rounded-lg text-center w-full text-sm"}>
            {children}
        </button>
    )
}

export const LoginRedButton = ({children}) => {
    return(
        <button className={styles.loginRedButton + " bg-[#EF1B47] text-white px-4 py-[7px] w-full"}>
            {children}
        </button>
    )
}

export const LoginOutlineButton = ({children}) => {
    return(
        <button className={styles.loginRedButton + " text-black border border-black px-4 py-[7px] w-full"}>
            {children}
        </button>
    )
}