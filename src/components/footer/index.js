import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { getAllProgramItemsCategory } from "../../api/programs";
import Link from "next/link";

const Footer = () => {

    const [email , setEmail] = useState(null);
    const [programsList , setProgramsList] = useState(null);


    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://api.hamidehsakak.com/api/accounts/newsletter_subscription/", { "email": email })
            .then((response) => {
                toast.success("با موفقیت ثبت شد");
            })
            .catch((error) => {
                toast.error("لطفا دوباره تلاش کنید");
            })
            .finally(() => {
              
            });
      };


      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProgramItemsCategory();
            setProgramsList(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);




    
    return(
        <div className={styles.footer}>
            {/* <div className={styles.computerfootervector}>
                <img src="../../images/computerfootervector.png" alt="image" />
            </div> */}
            <div className={styles.footertop}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <p>
                            هــــمــــراه با شمـــا تـا دیـــار نـــو
                        </p>
                    </div>
                    <div className={styles.logo}>
                        <img src="../../images/footerlogo.png" alt="logo" />
                    </div>
                </div>
                <div className={styles.bottom + " flex items-center justify-between"}>
                    <div className={styles.emailInput + " max-w-[500px] mr-auto container max-md:mx-auto w-11/12 mt-20 text-right flex flex-col"}>
                        <p className="mb-2 text-white">
                            برای اطلاع از آخرین خبر‌های مهاجرتی، ایمیل خود را ثبت نمایید.
                        </p>
                        <form>
                            <div className={styles.formgroup + " relative"}>
                                <input 
                                    className="w-full bg-white text-right text-black p-2" 
                                    type="text" 
                                    placeholder="ثبت ایمیل " 
                                    value={email}
                                    onChange={handleInputChange}
                                />                                
                                <div onClick={handleSubmit} className="cursor-pointer absolute left-0 top-0 border-r border-r-[#444444] px-1 py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                        <path d="M3.07627 8.27989C3.0676 8.49118 3.06761 8.72723 3.06763 8.97849V23.9118C3.06761 24.2505 3.06759 24.5616 3.08883 24.8216C3.11174 25.102 3.16417 25.4087 3.31853 25.7116C3.53923 26.1448 3.89139 26.4969 4.32454 26.7176C4.62748 26.872 4.9342 26.9244 5.21456 26.9473C5.4746 26.9686 5.78566 26.9686 6.12436 26.9686H26.3192C26.6579 26.9686 26.969 26.9686 27.229 26.9473C27.5094 26.9244 27.8161 26.872 28.1191 26.7176C28.5522 26.4969 28.9044 26.1448 29.1251 25.7116C29.2794 25.4087 29.3319 25.102 29.3548 24.8216C29.376 24.5616 29.376 24.2505 29.376 23.9118V8.9786C29.376 8.7273 29.376 8.49121 29.3673 8.27989L17.6795 17.8427C16.8315 18.5365 15.6121 18.5365 14.7641 17.8427L3.07627 8.27989Z" fill="#444444"/>
                                        <path d="M28.5145 6.42828C28.3924 6.33035 28.26 6.24461 28.1191 6.17278C27.8161 6.01842 27.5094 5.96599 27.229 5.94308C26.969 5.92184 26.658 5.92186 26.3194 5.92188H6.12437C5.78572 5.92186 5.47457 5.92184 5.21456 5.94308C4.9342 5.96599 4.62748 6.01842 4.32454 6.17278C4.18357 6.24461 4.05119 6.33035 3.92912 6.42828L16.0136 16.3155C16.1347 16.4147 16.3089 16.4147 16.43 16.3155L28.5145 6.42828Z" fill="#444444"/>
                                    </svg>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.links + " flex gap-12 items-start"}>
                        <div>
                            <p className="text-lg text-white mb-5">
                                دسترسی سریع 
                            </p>
                            <div className="flex flex-col gap-3 text-right">
                                {programsList?.map((item) => (
                                    <Link className="text-white text-xs" href={"/program/" + item?.slug}>
                                        {item?.title_link}  
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-lg text-white mb-5">
                                درباره سازمان دیار  
                            </p>
                            <div className="flex flex-col gap-3 text-right">
                                <Link className="text-white text-xs" href={"/about"}>
                                    درباره ما 
                                </Link>
                                {/* <Link className="text-white text-xs" href={"/contact"}>
                                    تماس با ما  
                                </Link> */}
                                <Link className="text-white text-xs" href={"/smart-form"}>
                                    فرم هوشمند 
                                </Link>
                                <Link className="text-white text-xs" href={"/reserve"}>
                                    مشاوره مهاجرت
                                </Link>
                                {/* <Link className="text-white text-xs" href={"/"}>
                                    فرم ارزیابی  
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerbottom}>
                <div className={styles.footerbottom__left}>
                    <p>
                        © 2023 All rights reserved
                    </p>
                </div>
                <div className={styles.footerbottom__center}>
                    <p>
                        Terms
                    </p>
                    <p>
                        Privacy
                    </p>
                    <p>
                        Cookies
                    </p>
                </div>
                <div className={styles.footerbottom__right}>
                    <a target="_blank" href="https://www.instagram.com/diyar_immigration">
                        <div className={styles.item + " flex items-center justify-center"}>
                            <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000000" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/diyar_immigration">
                        <div className={styles.item + " flex items-center justify-center"}>
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/diyar_immigration">
                        <div className={styles.item + " flex items-center justify-center"}>
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/diyar_immigration">
                        <div className={styles.item + " flex items-center justify-center"}>
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;