import React, { useState , useEffect } from "react";
import styles from "./styles.module.scss";
import { getAllProgramItemsCategory, getAllProgramSubCategories } from "../../api/programs";
import Link from "next/link";
import { getAllCategories } from "../../api/category";
import { getAllPlans } from "../../api/plans";

const LargeHeader = () => {

    const [showMegaMenu , setShowMegaMenu] = useState(false);
    const [programsList , setProgramsList] = useState(null);
    const [activeProgram , setActiveProgram] = useState(null);
    const [subCategories , setSubCategories] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllCategories();
            setProgramsList(data?.data?.data);
            setActiveProgram(data?.data?.data[0])
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);

    // console.log(plans)

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await getAllPlans();
    //         setPlans(data?.data?.data);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    
    //     fetchData();
    // }, []);




    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProgramSubCategories(activeProgram?.slug);
            setSubCategories(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [activeProgram]);


    console.log(programsList)




    return(
        <div className={styles.largeheader + " pb-3"} style={{boxShadow: "0px 10px 22.9px -4px rgba(0, 0, 0, 0.14)" , zIndex: "50"}}>
            <div>
                <div className="flex justify-between items-center container max-w-7xl w-11/12 mx-auto py-2">
                    <div className="flex">
                        <div className="px-2 border-r border-r-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13748 5.28897C6.1208 4.2835 7.29532 3.4849 8.59193 2.94019C9.88853 2.39548 11.281 2.11565 12.6874 2.11719C17.4228 2.11719 21.4277 5.22871 22.7757 9.51801H15.8591C15.5787 9.51801 15.3098 9.6294 15.1116 9.82768C14.9133 10.0259 14.8019 10.2949 14.8019 10.5753C14.8019 10.8557 14.9133 11.1246 15.1116 11.3229C15.3098 11.5211 15.5787 11.6325 15.8591 11.6325H23.2071C23.242 11.9814 23.26 12.3335 23.26 12.6898C23.26 18.529 18.5266 23.2624 12.6874 23.2624C11.281 23.264 9.8885 22.9842 8.59189 22.4395C7.29528 21.8948 6.12076 21.0961 5.13748 20.0906H11.6301C11.9105 20.0906 12.1794 19.9792 12.3777 19.7809C12.576 19.5827 12.6874 19.3137 12.6874 19.0333C12.6874 18.7529 12.576 18.484 12.3777 18.2857C12.1794 18.0875 11.9105 17.9761 11.6301 17.9761H3.52938C3.14257 17.3075 2.83056 16.5984 2.599 15.8616H13.7446C14.025 15.8616 14.294 15.7502 14.4922 15.5519C14.6905 15.3536 14.8019 15.0847 14.8019 14.8043C14.8019 14.5239 14.6905 14.255 14.4922 14.0567C14.294 13.8584 14.025 13.747 13.7446 13.747H2.16763C1.94269 11.5418 2.41962 9.32179 3.53044 7.40349H12.6874C12.9678 7.40349 13.2367 7.2921 13.435 7.09383C13.6332 6.89555 13.7446 6.62664 13.7446 6.34623C13.7446 6.06583 13.6332 5.79691 13.435 5.59864C13.2367 5.40036 12.9678 5.28897 12.6874 5.28897H5.13748ZM10.5729 9.51801C10.2924 9.51801 10.0235 9.6294 9.82525 9.82768C9.62698 10.0259 9.51559 10.2949 9.51559 10.5753C9.51559 10.8557 9.62698 11.1246 9.82525 11.3229C10.0235 11.5211 10.2924 11.6325 10.5729 11.6325H12.6874C12.9678 11.6325 13.2367 11.5211 13.435 11.3229C13.6332 11.1246 13.7446 10.8557 13.7446 10.5753C13.7446 10.2949 13.6332 10.0259 13.435 9.82768C13.2367 9.6294 12.9678 9.51801 12.6874 9.51801H10.5729ZM8.14961 11.3238C7.95134 11.522 7.68247 11.6334 7.40213 11.6334C7.12178 11.6334 6.85291 11.522 6.65464 11.3238C6.45626 11.1256 6.3437 10.8566 6.3436 10.5762C6.34355 10.4373 6.37085 10.2998 6.42395 10.1715C6.47705 10.0431 6.5549 9.92655 6.65306 9.82832C6.75122 9.73009 6.86777 9.65215 6.99605 9.59896C7.12433 9.54578 7.26183 9.51837 7.4007 9.51833C7.68116 9.51823 7.95017 9.62954 8.14855 9.82779C8.24685 9.92598 8.32484 10.0426 8.37804 10.1709C8.43125 10.2993 8.45863 10.4369 8.45863 10.5758C8.45863 10.7147 8.43125 10.8523 8.37804 10.9807C8.32484 11.109 8.24685 11.2256 8.14855 11.3238H8.14961ZM16.17 15.5528C16.2675 15.6538 16.3842 15.7344 16.5132 15.7898C16.6422 15.8452 16.7809 15.8744 16.9213 15.8756C17.0617 15.8768 17.2009 15.85 17.3308 15.7969C17.4607 15.7437 17.5788 15.6652 17.6781 15.566C17.7773 15.4667 17.8558 15.3486 17.909 15.2187C17.9621 15.0888 17.9889 14.9496 17.9877 14.8092C17.9865 14.6688 17.9573 14.5301 17.9019 14.4011C17.8465 14.2721 17.7659 14.1554 17.6649 14.0579C17.4667 13.8595 17.1978 13.7469 16.9173 13.7468C16.6369 13.7467 16.3678 13.8581 16.1695 14.0563C15.9711 14.2545 15.8596 14.5235 15.8595 14.8039C15.8594 15.0844 15.9707 15.3534 16.1689 15.5518L16.17 15.5528Z" fill="#EF1B47"/>
                            </svg>
                        </div>
                        <div className="px-2 border-r border-r-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4738 2.10938H15.7029C16.8707 2.10938 17.8174 3.05608 17.8174 4.22389C17.8174 5.39171 16.8707 6.33841 15.7029 6.33841H11.4738C10.306 6.33841 9.35931 5.39171 9.35931 4.22389C9.35931 3.05608 10.306 2.10938 11.4738 2.10938ZM7.78042 4.25844C7.77528 4.33529 7.77267 4.41284 7.77267 4.49099C7.77267 6.38869 9.31107 7.92708 11.2088 7.92708H15.9664C17.8641 7.92708 19.4025 6.38869 19.4025 4.49099C19.4025 4.41284 19.3999 4.33529 19.3948 4.25844C21.4847 4.51513 23.1029 6.29644 23.1029 8.45571V19.0283C23.1029 21.3639 21.2095 23.2573 18.8739 23.2573H8.3013C5.96567 23.2573 4.07227 21.3639 4.07227 19.0283V8.45571C4.07227 6.29644 5.69053 4.51513 7.78042 4.25844ZM8.56562 10.5702C8.56562 10.1323 8.92063 9.7773 9.35856 9.7773H17.8166C18.2546 9.7773 18.6096 10.1323 18.6096 10.5702C18.6096 11.0082 18.2546 11.3632 17.8166 11.3632H9.35856C8.92063 11.3632 8.56562 11.0082 8.56562 10.5702ZM9.35856 14.0063C8.92063 14.0063 8.56562 14.3614 8.56562 14.7993C8.56562 15.2372 8.92063 15.5922 9.35856 15.5922H17.8166C18.2546 15.5922 18.6096 15.2372 18.6096 14.7993C18.6096 14.3614 18.2546 14.0063 17.8166 14.0063H9.35856ZM8.56562 19.0283C8.56562 18.5904 8.92063 18.2354 9.35856 18.2354H13.5876C14.0255 18.2354 14.3805 18.5904 14.3805 19.0283C14.3805 19.4663 14.0255 19.8213 13.5876 19.8213H9.35856C8.92063 19.8213 8.56562 19.4663 8.56562 19.0283Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="px-2 border-r border-r-black">
                            <Link href={"/signin"}>
                                ثبت نام 
                            </Link>
                        </div>
                        <div className="px-2">
                            <Link href={"/login"}>
                                ورود
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href={"/reserve"} className="px-14 py-2 bg-[#EF1B47] text-white text-xs rounded-lg">
                            رزرو وقت مشاوره
                        </Link>
                        <form>
                            <div className="relative">
                                <input className="w-[400px] bg-[#EDEDED] text-right pr-8 py-[8px] rounded-lg text-xs" type="text" placeholder="جستجو در دیار " />
                                <svg className="absolute right-[3px] top-[5px]" xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                    <path d="M24.084 9.0013H20.584M24.084 2.58464H19.4173M24.084 15.418H19.4173M3.95899 14.543L0.750652 17.7513M1.91732 9.0013C1.91732 13.1895 5.31249 16.5846 9.50065 16.5846C13.6888 16.5846 17.084 13.1895 17.084 9.0013C17.084 4.81314 13.6888 1.41797 9.50065 1.41797C5.31249 1.41797 1.91732 4.81314 1.91732 9.0013Z" stroke="#7E7E7E" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </form>
                        <img src="../../images/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-end container max-w-7xl w-11/12 mx-auto mt-5">
                    <div>
                        <Link href="/about">درباره ما</Link>
                    </div>
                    <div>
                        <Link href="/blog">مجله کانادا </Link>
                    </div>
                    <div>
                        <Link href="/job">فرصت های شغلی</Link>
                    </div>
                    {/* <div>
                        <Link href="/podcast">برنامه های مهاجرتی </Link>
                    </div> */}
                    <div>
                        <Link href="/">خانه </Link>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => setShowMegaMenu(!showMegaMenu)}>
                        <p>دسته بندی </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                            <path d="M3.75 3.36328H20.25M3.75 8.4987H20.25M3.75 13.6341H20.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="relative container max-w-7xl w-11/12 mx-auto">

            {showMegaMenu === true ?
            <div className={styles.megamenu + " container w-6/12 ml-auto bg-white"} onMouseLeave={() => setShowMegaMenu(false)}>
                <div className={styles.megawrapper + " flex items-start gap-7"}>    
                    <div className="titles border-l border-l-[#EF1B47] w-3/12">
                        {programsList?.map((item) => (
                            <div className="item flex items-center justify-between cursor-pointer py-3 px-3" style={activeProgram === item ? {background : "rgba(239, 27, 71, 0.18)"} : {}} onMouseEnter={() => setActiveProgram(item)}>
                                <Link href={"/program/" + item?.id} className="text-white">
                                    {item?.title}
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ffffff">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0006 2.45833C11.208 2.6658 11.208 3.00217 11.0006 3.20963L5.70955 8.50066L11.0006 13.7917C11.208 13.9991 11.208 14.3355 11.0006 14.543C10.7931 14.7504 10.4567 14.7504 10.2493 14.543L4.5826 8.87632C4.48297 8.77669 4.427 8.64156 4.427 8.50066C4.427 8.35977 4.48297 8.22464 4.5826 8.12501L10.2493 2.45833C10.4567 2.25087 10.7931 2.25087 11.0006 2.45833Z" fill="white"/>
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div className="programs grid grid-cols-4 gap-5 w-9/12 py-3">
                        {activeProgram?.plans?.map((item) => (
                            <Link href={"/plan/" + item?.id} className="text-sm text-white" onClick={() => setShowMegaMenu(false)}>
                                {item?.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div> : ""
            }
            </div>

        </div>
    )
}

export default LargeHeader;