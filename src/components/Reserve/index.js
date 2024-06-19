import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { PrimaryBtn } from "../button";
import { toast } from "react-toastify";
import axios from "axios";

const Reserve = () => {

    const [data, setData] = useState(null);


    const handleInputChange = (event) => {
        setData(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://api.hamidehsakak.com/api/home/reserve/", { "phone_number": data })
            .then((response) => {
                toast.success("با موفقیت ثبت شد");
            })
            .catch((error) => {
                toast.error("لطفا دوباره تلاش کنید");
            })
            .finally(() => {
              
            });
      };
    


    return(
        <div className={styles.reserve + " h-[60vh] max-md:h-[50vh] flex items-center justify-center"}>
            <div className={styles.reservewrapper + " flex items-center justify-center"}>
                <div className={styles.form + " flex flex-col gap-6 py-10 px-20 max-md:py-0 max-md:px-0"}>
                    <div className={styles.title + " flex flex-col gap-5"}>
                        <div  className="flex items-center justify-between gap-2">
                            <p className="text-sm text-[#FF0000]">
                                لطفا جهت رزرو وقت مشاوره فرم ارزیابی را پر نمایید 
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31 31" fill="none">
                                <path d="M13.6667 11.5833C13.2525 11.5833 12.9167 11.9191 12.9167 12.3333C12.9167 12.7475 13.2525 13.0833 13.6667 13.0833V11.5833ZM15.25 12.3333H16C16 11.9191 15.6642 11.5833 15.25 11.5833V12.3333ZM14.5 22.25C14.5 22.6642 14.8358 23 15.25 23C15.6642 23 16 22.6642 16 22.25H14.5ZM4.2909 5.87238L4.64205 6.53509L4.2909 5.87238ZM4.2909 24.461L4.64205 23.7982L4.2909 24.461ZM18.5409 28.5241L18.1897 27.8613L18.5409 28.5241ZM11.9591 28.5241L11.608 29.1868L11.9591 28.5241ZM26.2091 24.461L26.5603 25.1237L26.2091 24.461ZM26.2091 5.87238L25.858 6.53509L26.2091 5.87238ZM18.5409 1.80927L18.1897 2.47198L18.5409 1.80927ZM11.9591 1.80927L11.608 1.14655V1.14655L11.9591 1.80927ZM13.6667 13.0833H15.25V11.5833H13.6667V13.0833ZM14.5 12.3333V22.25H16V12.3333H14.5ZM18.1897 2.47198L25.858 6.53509L26.5603 5.20966L18.892 1.14655L18.1897 2.47198ZM28.75 11.1036V19.2298H30.25V11.1036H28.75ZM25.858 23.7982L18.1897 27.8613L18.892 29.1868L26.5603 25.1237L25.858 23.7982ZM12.3103 27.8613L4.64205 23.7982L3.93975 25.1237L11.608 29.1868L12.3103 27.8613ZM1.75 19.2298V11.1036H0.25V19.2298H1.75ZM4.64205 6.53509L12.3103 2.47198L11.608 1.14655L3.93975 5.20966L4.64205 6.53509ZM1.75 11.1036C1.75 9.24591 2.83031 7.49507 4.64205 6.53509L3.93975 5.20966C1.67866 6.40773 0.25 8.64511 0.25 11.1036H1.75ZM4.64205 23.7982C2.83031 22.8383 1.75 21.0874 1.75 19.2298H0.25C0.25 21.6882 1.67866 23.9256 3.93975 25.1237L4.64205 23.7982ZM18.1897 27.8613C16.373 28.824 14.127 28.824 12.3103 27.8613L11.608 29.1868C13.864 30.3822 16.636 30.3822 18.892 29.1868L18.1897 27.8613ZM28.75 19.2298C28.75 21.0874 27.6697 22.8383 25.858 23.7982L26.5603 25.1237C28.8213 23.9256 30.25 21.6882 30.25 19.2298H28.75ZM25.858 6.53509C27.6697 7.49507 28.75 9.24591 28.75 11.1036H30.25C30.25 8.64511 28.8213 6.40773 26.5603 5.20966L25.858 6.53509ZM18.892 1.14655C16.636 -0.0488498 13.864 -0.0488501 11.608 1.14655L12.3103 2.47198C14.127 1.50934 16.373 1.50934 18.1897 2.47198L18.892 1.14655Z" fill="#EF1B47"/>
                            </svg>
                        </div>
                        <p>
                            رزرو وقت مشاوره 
                        </p>
                    </div>
                    <form>
                        <div className={styles.formgroup}>
                            <input 
                                type="text" 
                                placeholder="شماره تماس " 
                                className="w-full text-right p-2 border border-[#303030] rounded-lg"
                                value={data}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.sendbutton + " flex items-center justify-center mt-8"}>
                            <button onClick={handleSubmit} className="border border-[#303030] p-1">
                                ارسال
                            </button>
                        </div>
                    </form>
                    <div className={styles.button + " flex items-center justify-center"}>
                        <Link href={"/smart-form"}>
                            <PrimaryBtn>
                                فرم ارزیابی 
                            </PrimaryBtn>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserve;