import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getAllProgramItemsCategory } from "../../api/programs";
import Link from "next/link";

const MobileHeader = () => {

    const [openCategory , setOpenCategory] = useState(false);
    const [programsList , setProgramsList] = useState(null);


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
        <>
            <div style={openCategory === true ? {transform : "translateY(0%)"} : {transform : "translateY(100%)"}} className={styles.mobileHeaderCategory + " pt-5 pb-[150px] w-full fixed bottom-10 z-20 bg-white flex flex-col gap-10 rounded-tl-2xl rounded-tr-2xl duration-300"}>
                    <div className={styles.container + " container w-11/12 mx-auto flex flex-col gap-5"}>
                        <div className={styles.header + " flex items-center justify-between"}>
                            <div>
                                <svg onClick={() => setOpenCategory(!openCategory)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="#110000"/>
                                </svg>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99908 3.96961L5.99909 7.96961L9.99908 3.96961L10.5294 4.49994L5.99909 9.03027L1.46875 4.49994L1.99908 3.96961Z" fill="black"/>
                                </svg>  
                                <p className="font-bold text-lg">
                                    دسته بندی 
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end text-right gap-4">
                            {programsList?.map((item) => (
                                <Link onClick={() => setOpenCategory(!openCategory)} className="text-sm" href={"/program/" + item?.slug}>
                                    {item?.title_link}
                                </Link>
                            ))}
                        </div>
                    </div>
            </div>
            <div className={styles.mobileheader}>
                <div className={styles.footerCom + " relative z-10 w-full"}>
                    <a target="_blank" href="https://www.instagram.com/diyar_immigration">
                        <img className="object-cover w-full" src="../../images/footercom.png" alt="image" />
                    </a>
                </div>
                <div className={styles.mobileheaderwrapper}>
                    <div className={styles.mobileheader__item}>
                        <Link href={"/smart-form"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 11L12 14L22 4" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>
                                فرم ارزیابی  
                            </p>
                        </Link>
                    </div>
                    <div className={styles.mobileheader__item}>
                        <Link href={'/podcast'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>
                                پادکست  
                            </p>
                        </Link>
                    </div>
                    <div className={styles.mobileheader__item}>
                        <Link href={'/blog'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 5.25H14C13.59 5.25 13.25 4.91 13.25 4.5C13.25 4.09 13.59 3.75 14 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill="#292D32"/>
                            <path d="M21 10.25H14C13.59 10.25 13.25 9.91 13.25 9.5C13.25 9.09 13.59 8.75 14 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z" fill="#292D32"/>
                            <path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill="#292D32"/>
                            <path d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z" fill="#292D32"/>
                            <path d="M7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58V8.43C3 9.83 3.68 10.51 5.08 10.51H7.93C9.33 10.51 10.01 9.83 10.01 8.43V5.58C10 4.18 9.32 3.5 7.92 3.5Z" fill="#292D32"/>
                        </svg>
                            <p>
                                مجله کانادا
                            </p>
                        </Link>
                    </div>
                    <div onClick={() => setOpenCategory(!openCategory)} className={styles.mobileheader__item + " flex flex-col items-center justify-between"}>
                        {openCategory === true ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 19 19" fill="none">
                                <path d="M5.82445 2.02926e-07C4.96645 -7.59866e-06 4.27441 -1.39516e-05 3.71401 0.0457729C3.137 0.0929161 2.63019 0.192518 2.16129 0.431433C1.41648 0.810932 0.810932 1.41648 0.431433 2.16129C0.192518 2.63019 0.0929161 3.137 0.0457729 3.71401C-1.39516e-05 4.27441 -7.59866e-06 4.96645 2.02926e-07 5.82445L4.5459e-07 7.65278C4.5459e-07 8.09 0.354442 8.44444 0.791667 8.44444H7.65278C8.09 8.44444 8.44444 8.09 8.44444 7.65278V0.791667C8.44444 0.354442 8.09 4.5459e-07 7.65278 4.5459e-07L5.82445 2.02926e-07Z" fill="#EF1B47"/>
                                <path d="M16.8387 0.431433C16.3698 0.192518 15.863 0.0929161 15.286 0.0457729C14.7256 -1.39516e-05 14.0336 -7.59866e-06 13.1756 2.02926e-07L11.3472 4.5459e-07C10.91 4.5459e-07 10.5556 0.354442 10.5556 0.791667V7.65278C10.5556 8.09 10.91 8.44444 11.3472 8.44444H18.2083C18.6456 8.44444 19 8.09 19 7.65278V5.82443C19 4.96644 19 4.27441 18.9542 3.71401C18.9071 3.137 18.8075 2.63019 18.5686 2.16129C18.1891 1.41648 17.5835 0.810932 16.8387 0.431433Z" fill="#EF1B47"/>
                                <path d="M0.791667 10.5556C0.354442 10.5556 4.5459e-07 10.91 4.5459e-07 11.3472L2.02926e-07 13.1756C-7.59866e-06 14.0336 -1.39516e-05 14.7256 0.0457729 15.286C0.0929161 15.863 0.192518 16.3698 0.431433 16.8387C0.810932 17.5835 1.41648 18.1891 2.16129 18.5686C2.63019 18.8075 3.137 18.9071 3.71401 18.9542C4.27441 19 4.96644 19 5.82443 19H7.65278C8.09 19 8.44444 18.6456 8.44444 18.2083V11.3472C8.44444 10.91 8.09 10.5556 7.65278 10.5556H0.791667Z" fill="#EF1B47"/>
                                <path d="M11.3472 10.5556C10.91 10.5556 10.5556 10.91 10.5556 11.3472V18.2083C10.5556 18.6456 10.91 19 11.3472 19H13.1756C14.0336 19 14.7256 19 15.286 18.9542C15.863 18.9071 16.3698 18.8075 16.8387 18.5686C17.5835 18.1891 18.1891 17.5835 18.5686 16.8387C18.8075 16.3698 18.9071 15.863 18.9542 15.286C19 14.7256 19 14.0336 19 13.1756V11.3472C19 10.91 18.6456 10.5556 18.2083 10.5556H11.3472Z" fill="#EF1B47"/>
                            </svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 19 19" fill="none">
                                <path d="M5.82445 2.02926e-07C4.96645 -7.59866e-06 4.27441 -1.39516e-05 3.71401 0.0457729C3.137 0.0929161 2.63019 0.192518 2.16129 0.431433C1.41648 0.810932 0.810932 1.41648 0.431433 2.16129C0.192518 2.63019 0.0929161 3.137 0.0457729 3.71401C-1.39516e-05 4.27441 -7.59866e-06 4.96645 2.02926e-07 5.82445L4.5459e-07 7.65278C4.5459e-07 8.09 0.354442 8.44444 0.791667 8.44444H7.65278C8.09 8.44444 8.44444 8.09 8.44444 7.65278V0.791667C8.44444 0.354442 8.09 4.5459e-07 7.65278 4.5459e-07L5.82445 2.02926e-07Z" fill="black"/>
                                <path d="M16.8387 0.431433C16.3698 0.192518 15.863 0.0929161 15.286 0.0457729C14.7256 -1.39516e-05 14.0336 -7.59866e-06 13.1756 2.02926e-07L11.3472 4.5459e-07C10.91 4.5459e-07 10.5556 0.354442 10.5556 0.791667V7.65278C10.5556 8.09 10.91 8.44444 11.3472 8.44444H18.2083C18.6456 8.44444 19 8.09 19 7.65278V5.82443C19 4.96644 19 4.27441 18.9542 3.71401C18.9071 3.137 18.8075 2.63019 18.5686 2.16129C18.1891 1.41648 17.5835 0.810932 16.8387 0.431433Z" fill="black"/>
                                <path d="M0.791667 10.5556C0.354442 10.5556 4.5459e-07 10.91 4.5459e-07 11.3472L2.02926e-07 13.1756C-7.59866e-06 14.0336 -1.39516e-05 14.7256 0.0457729 15.286C0.0929161 15.863 0.192518 16.3698 0.431433 16.8387C0.810932 17.5835 1.41648 18.1891 2.16129 18.5686C2.63019 18.8075 3.137 18.9071 3.71401 18.9542C4.27441 19 4.96644 19 5.82443 19H7.65278C8.09 19 8.44444 18.6456 8.44444 18.2083V11.3472C8.44444 10.91 8.09 10.5556 7.65278 10.5556H0.791667Z" fill="black"/>
                                <path d="M11.3472 10.5556C10.91 10.5556 10.5556 10.91 10.5556 11.3472V18.2083C10.5556 18.6456 10.91 19 11.3472 19H13.1756C14.0336 19 14.7256 19 15.286 18.9542C15.863 18.9071 16.3698 18.8075 16.8387 18.5686C17.5835 18.1891 18.1891 17.5835 18.5686 16.8387C18.8075 16.3698 18.9071 15.863 18.9542 15.286C19 14.7256 19 14.0336 19 13.1756V11.3472C19 10.91 18.6456 10.5556 18.2083 10.5556H11.3472Z" fill="black"/>
                            </svg>
                        }
                        <p>
                            دسته بندی 
                        </p>
                    </div>
                    <div className={styles.mobileheader__item}>
                        <Link href={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 22V12H15V22" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>
                                خانه 
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MobileHeader;