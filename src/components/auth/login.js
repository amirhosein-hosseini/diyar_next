import styles from "./styles.module.scss";
import { LoginOutlineButton, LoginRedButton, OutlineBlackButton, SecondPrimaryButton } from "../button";
import Link from "next/link";
import { useState } from "react";

const Login = () => {

    const [showPass , setShowPass] = useState("password");



    const handleShowPassword = () => {
        if(showPass === "password"){
            setShowPass("text")
        }else if(showPass === "text"){
            setShowPass("password")
        }
    }




    return(
        <div className={styles.login + " relative h-screen"}>
            <div className={styles.back + " absolute top-5 left-5 z-50"}>
                <Link href={"/"}>
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
                                name="phone"
                                className="placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest text-right"
                                placeholder="ایمیل"
                            />
                        </div>
                        <div className={styles.formgroup + " relative w-full"}>
                            <input
                                type={showPass}
                                name="password"
                                className="placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest text-right"
                                placeholder="رمز عبور"
                            />
                            <svg onClick={handleShowPassword} className="absolute left-3 top-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3E3E3E">
                                <path d="M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z" fill="black"/>
                                <path d="M11.9999 9.14C10.4299 9.14 9.1499 10.42 9.1499 12C9.1499 13.57 10.4299 14.85 11.9999 14.85C13.5699 14.85 14.8599 13.57 14.8599 12C14.8599 10.43 13.5699 9.14 11.9999 9.14Z" fill="black"/>
                            </svg>
                        </div>
                        <div className={styles.formgroup + " relative w-full"}>
                            <input
                                type="text"
                                name="phone"
                                className="placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest text-right"
                                placeholder="کد اختصاصی دیار "
                            />
                        </div>
                    </form>
                    <div className={styles.forget + " w-1/2 max-md:w-11/12 mt-4"}>
                        <Link href={"/forgot-pass"}>
                            <p className="text-xs text-right">
                                رمز عبور خود را فراموش کردید؟
                            </p>
                        </Link>
                    </div>
                    <div className={styles.button + " w-1/2 max-md:w-11/12 mt-5 flex justify-between items-center flex-col gap-4"}>
                        <div className="grid w-full">
                            <LoginRedButton>
                                ورود
                            </LoginRedButton>
                        </div>
                        <div className="grid w-full">
                            <Link href={"/signin"}>
                                <LoginOutlineButton>
                                    ثبت نام
                                </LoginOutlineButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;