import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { SecondPrimaryButton } from "../button";

const SendCode = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmed: "",
        phone: "",
    });


    
    return(
        <div className={styles.login + " relative h-screen"}>
            <div className={styles.back + " absolute top-5 left-5 z-50"}>
                <Link to={"/"}>
                    <svg className="w-6 fill-white max-md:fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </Link>
            </div>
            <div className={styles.loginwrapper + " flex items-center h-full"}>
                <div className={styles.login__image + " w-1/2 max-md:hidden overflow-hidden h-full"}>
                    <img className="object-cover w-full h-full" src="../../images/loginimage.png" alt="image" />
                </div>
                <div className={styles.form + " w-1/2 max-md:w-full flex justify-center items-center flex-col"}>
                    <form className="w-1/2 max-md:w-11/12 m-x-auto flex justify-center items-center flex-col gap-4">
                        <div className={styles.formgroup + " relative w-full"}>
                            <input
                                type="text"
                                name="email"
                                className="placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest"
                                placeholder="کد ارسال شده را وارد کنید"
                            />
                        </div>
                    </form>
                    <div className={styles.button + " w-1/2 max-md:w-11/12 mt-5 flex justify-between items-center flex-col gap-4"}>
                        <div className="grid w-full">
                            <Link to={"/panel"}>
                                <SecondPrimaryButton>
                                    تایید
                                </SecondPrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendCode;