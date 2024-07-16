import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { OutlineBlackButton, SecondPrimaryButton } from "../button";
import { toast } from "react-toastify";
import { prefix, url } from "../../api/domain";
import axios from "axios";
import { useAuth } from "../../context/authContext";

const ForgotPass = () => {


    const { signIn } = useAuth();
    const [showSendCode , setShowSendCode] = useState(false);
    const [errors , setErrors] = useState(null)
    const [phonNumber, setPhoneNumber] = useState({
        type: "forget_password",
        phone: "",
    });
    const [codeData , setCodeData] = useState({
        code: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPhoneNumber({ ...phonNumber, [name]: value });
    };


    const handleCodeChange = (e) => {
        const { name, value } = e.target;
        setCodeData({ ...codeData, [name]: value });
    };







    const handlePhoneSubmit = (e) => {
        e.preventDefault();


        axios.post(url + "/" + prefix + '/auth/send-code', {phone: phonNumber?.phone , type: phonNumber.type})
            .then((response) => {
                setErrors(response?.data?.data?.errors);
                if(response.status === 200){
                    setShowSendCode(true);
                }
            })
            .catch((error) => {
                toast.error(error.response.data.message)
            })
            .finally(() => {
                console.log("final")
            });
    }



    const handleCodeSubmit = (e) => {

        e.preventDefault();


        axios.post(url + "/" + prefix + '/auth/check-code', {phone: phonNumber?.phone , code:codeData?.code, type: "forget_password"})
            .then((response) => {
                setErrors(response?.data?.data?.errors);
                if(errors === undefined){
                    toast.success(response.data.message);
                    
                }
            })
            .catch((error) => {
                setErrors(error.response.data?.errors)
            })
            .finally(() => {
                console.log("final")
            });
    };



    if(showSendCode === true){
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
                        <p className="text-center mb-5">
                            بازیابی رمز عبور
                        </p>
                        <form className="w-1/2 max-md:w-11/12 m-x-auto flex justify-center items-center flex-col gap-4">
                            <div className={styles.formgroup + " relative w-full"}>
                                {errors?.code ? 
                                    <div>
                                        <input
                                            type="text"
                                            name="code"
                                            className={styles.redInput + " placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest"}
                                            placeholder="کد ارسال شده را وارد کنید"
                                            value={codeData.code}
                                            onChange={handleCodeChange}
                                        />
                                        <p className="text-[#EB0E23] text-xs mt-1">{errors?.code}</p>
                                    </div> : 
                                    <input
                                        type="text"
                                        name="code"
                                        className="placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest"
                                        placeholder="کد ارسال شده را وارد کنید"
                                        value={codeData.code}
                                        onChange={handleCodeChange}
                                    />
                                }

                            </div>
                        </form>
                        <div className={styles.button + " w-1/2 max-md:w-11/12 mt-5 flex justify-between items-center flex-col gap-4"}>
                            <div className="grid w-full" onClick={handleCodeSubmit}>
                                <SecondPrimaryButton>
                                    تایید
                                </SecondPrimaryButton>
                            </div>
                            <div className="grid w-full">
                                <Link to={"/login"}>
                                    <OutlineBlackButton>
                                        صفحه ورود
                                    </OutlineBlackButton>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    
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
                    <p className="text-center mb-5">
                        بازیابی رمز عبور
                    </p>
                    <form className="w-1/2 max-md:w-11/12 m-x-auto flex justify-center items-center flex-col gap-4">
                        <div className={styles.formgroup + " relative w-full"}>
                        {errors?.phone ? 
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    className="placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest"
                                    placeholder="شماره تلفن را وارد کنید"
                                    onChange={handleChange}
                                    value={phonNumber.phone}
                                />
                                <p className="text-[#EB0E23] text-xs mt-1">{errors?.code}</p>
                            </div> : 
                            <input
                                type="text"
                                name="phone"
                                className="placeholder-opacity-25 w-full py-4 px-5 text-xs tracking-widest"
                                placeholder="شماره تلفن را وارد کنید"
                                onChange={handleChange}
                                value={phonNumber.phone}
                            />
                        }
                        </div>
                    </form>
                    <div className={styles.button + " w-1/2 max-md:w-11/12 mt-5 flex justify-between items-center flex-col gap-4"}>
                        <div className="grid w-full" onClick={handlePhoneSubmit}>
                            <SecondPrimaryButton>
                                تایید
                            </SecondPrimaryButton>
                        </div>
                        <div className="grid w-full">
                            <Link to={"/login"}>
                                <OutlineBlackButton>
                                    صفحه ورود
                                </OutlineBlackButton>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgotPass;