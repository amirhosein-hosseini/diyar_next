import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import Hero from "./hero";
import Points from "./points";
import HomeSlider from "./homeSlider";
import Plans from "./plans";
import { PrimaryBtn, SecondPrimaryBtn } from "../button";
import Partners from "./partners";
import Testimonial from "./testimonial";
import { getAllFeedBacks, getAllHomeBenefit, getAllHomeContents, getAllHomePartners } from "../../api";
import { domain } from "../../api/domain";
import { getFavoriteBlogs } from "../../api/blog";
import { getAllProgramItemsCategory } from "../../api/programs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { toast } from "react-toastify";
import IndexBanner from "../banner/indexBanner";
import Link from "next/link";

const HomePage = () => {

    const [homeContents , setHomeContents] = useState(null);
    const [homeBenefit , setHomeBenefit] = useState(null);
    const [homePartners , setHomePartners] = useState(null);
    const [feedBack , setFeedBack] = useState(null);
    const [favoriteBlogs , setFavoriteBlogs] = useState(null);
    const [programsList , setProgramsList] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [email , setEmail] = useState(null);


    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };




    useEffect(() => {
        AOS.init();
    }, [])



    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      };
  
      // Initial check on component mount
      handleResize();
  
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the resize event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllHomeContents();
            setHomeContents(data?.data?.home[0]);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllHomeBenefit();
            setHomeBenefit(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllHomePartners();
            setHomePartners(data?.data?.partner_logo);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllFeedBacks();
            setFeedBack(data?.data?.feedback);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getFavoriteBlogs(4);
            setFavoriteBlogs(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


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


    
 

    return(
        <>
            {isMobile === false ? <Hero data={homeContents} /> : ""}
            {isMobile === true ?
            <>
                <Plans data={programsList} />
                {/* <HomeSlider data={favoriteBlogs} /> */}
                <Points data={homeBenefit} image={homeContents?.founder_image} />
                <div className={styles.smartstart}>
                    <div className={styles.smartstart__desc}>
                        <div className={styles.desc}>
                            <div className={styles.image}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                    <path d="M51.0141 0.166664H20.9858C7.94246 0.166664 0.166626 7.9425 0.166626 20.9858V50.9783C0.166626 64.0575 7.94246 71.8333 20.9858 71.8333H50.9783C64.0216 71.8333 71.7975 64.0575 71.7975 51.0142V20.9858C71.8333 7.9425 64.0575 0.166664 51.0141 0.166664ZM59.3275 40.2642C59.3275 42.4142 57.6791 43.4892 55.7083 42.6292L43.7041 37.4692C42.3066 36.8958 41.1958 37.6125 41.1958 39.1175V45.7467C41.1958 46.32 41.5183 47.1442 41.9483 47.5742L47.825 53.4867C48.4341 54.0958 48.7208 55.3142 48.4341 56.1383L47.2875 59.5783C46.7858 61.0833 45.0658 61.8 43.6683 61.0833L37.6841 55.995C36.7525 55.2425 35.2475 55.2425 34.3516 55.995L28.3316 61.0833C26.8983 61.8 25.2141 61.0833 24.7125 59.5425L23.5658 56.1025C23.2791 55.2783 23.5658 54.06 24.175 53.4508L30.1591 47.5742C30.5533 47.18 30.9116 46.3558 30.9116 45.7467V39.1175C30.9116 37.6125 29.765 36.86 28.4033 37.4692L16.3991 42.6292C14.3925 43.4892 12.78 42.4142 12.78 40.2642V36.9317C12.78 35.2117 14.1058 33.205 15.6825 32.5242L29.8008 26.4325C30.3741 26.1817 30.8758 25.4292 30.8758 24.7842V17.3667C30.8758 14.93 32.6316 12.0275 34.8175 10.9525C35.6058 10.5583 36.5016 10.5583 37.29 10.9525C39.44 12.0633 41.2316 14.93 41.2316 17.3667V24.7842C41.2316 25.4292 41.6975 26.1817 42.3066 26.4325L56.425 32.5242C58.0375 33.205 59.3275 35.2117 59.3275 36.9317V40.2642Z" fill="#292D32"/>
                                </svg>
                            </div>
                            <p>
                                شروعی هوشمند 
                            </p>
                        </div>
                        <div className={styles.btn}>
                            <Link herf={"/smart-form"}>
                                <PrimaryBtn>
                                    فرم ارزیابی  رایگان 
                                </PrimaryBtn>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.smartstart__video}>
                        {homeContents?.founder_video && (
                            <video controls>
                                <source src={domain + homeContents?.founder_video.substring(1)} type="video/mp4" />
                            </video>
                        )}
                    </div>
                </div>
                <div className={styles.emailInput + " container w-11/12 mx-auto mt-20 text-right flex flex-col justify-end"}>
                    <p className="mb-2">
                        برای اطلاع از آخرین خبر‌های مهاجرتی، ایمیل خود را ثبت نمایید.
                    </p>
                    <form>
                        <div className={styles.formgroup + " max-w-[500px] ml-auto relative"}>
                            <input className="w-full bg-[#EF1B47] text-right text-white p-2" type="text" placeholder="ثبت ایمیل " />
                            <div onClick={handleSubmit} className="absolute left-0 top-0 border-r border-r-white px-1 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path d="M3.07627 8.27989C3.0676 8.49118 3.06761 8.72723 3.06763 8.97849V23.9118C3.06761 24.2505 3.06759 24.5616 3.08883 24.8216C3.11174 25.102 3.16417 25.4087 3.31853 25.7116C3.53923 26.1448 3.89139 26.4969 4.32454 26.7176C4.62748 26.872 4.9342 26.9244 5.21456 26.9473C5.4746 26.9686 5.78566 26.9686 6.12436 26.9686H26.3192C26.6579 26.9686 26.969 26.9686 27.229 26.9473C27.5094 26.9244 27.8161 26.872 28.1191 26.7176C28.5522 26.4969 28.9044 26.1448 29.1251 25.7116C29.2794 25.4087 29.3319 25.102 29.3548 24.8216C29.376 24.5616 29.376 24.2505 29.376 23.9118V8.9786C29.376 8.7273 29.376 8.49121 29.3673 8.27989L17.6795 17.8427C16.8315 18.5365 15.6121 18.5365 14.7641 17.8427L3.07627 8.27989Z" fill="white"/>
                                    <path d="M28.5145 6.42828C28.3924 6.33035 28.26 6.24461 28.1191 6.17278C27.8161 6.01842 27.5094 5.96599 27.229 5.94308C26.969 5.92184 26.658 5.92186 26.3194 5.92188H6.12437C5.78572 5.92186 5.47457 5.92184 5.21456 5.94308C4.9342 5.96599 4.62748 6.01842 4.32454 6.17278C4.18357 6.24461 4.05119 6.33035 3.92912 6.42828L16.0136 16.3155C16.1347 16.4147 16.3089 16.4147 16.43 16.3155L28.5145 6.42828Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
            </> : 
            <>
                <Points data={homeBenefit} image={homeContents?.founder_image} />
                <Plans data={programsList} />
                <div className={styles.smartstart}>
                    <div className={styles.smartstart__desc}>
                        <div className={styles.desc}>
                            <div className={styles.image}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                    <path d="M51.0141 0.166664H20.9858C7.94246 0.166664 0.166626 7.9425 0.166626 20.9858V50.9783C0.166626 64.0575 7.94246 71.8333 20.9858 71.8333H50.9783C64.0216 71.8333 71.7975 64.0575 71.7975 51.0142V20.9858C71.8333 7.9425 64.0575 0.166664 51.0141 0.166664ZM59.3275 40.2642C59.3275 42.4142 57.6791 43.4892 55.7083 42.6292L43.7041 37.4692C42.3066 36.8958 41.1958 37.6125 41.1958 39.1175V45.7467C41.1958 46.32 41.5183 47.1442 41.9483 47.5742L47.825 53.4867C48.4341 54.0958 48.7208 55.3142 48.4341 56.1383L47.2875 59.5783C46.7858 61.0833 45.0658 61.8 43.6683 61.0833L37.6841 55.995C36.7525 55.2425 35.2475 55.2425 34.3516 55.995L28.3316 61.0833C26.8983 61.8 25.2141 61.0833 24.7125 59.5425L23.5658 56.1025C23.2791 55.2783 23.5658 54.06 24.175 53.4508L30.1591 47.5742C30.5533 47.18 30.9116 46.3558 30.9116 45.7467V39.1175C30.9116 37.6125 29.765 36.86 28.4033 37.4692L16.3991 42.6292C14.3925 43.4892 12.78 42.4142 12.78 40.2642V36.9317C12.78 35.2117 14.1058 33.205 15.6825 32.5242L29.8008 26.4325C30.3741 26.1817 30.8758 25.4292 30.8758 24.7842V17.3667C30.8758 14.93 32.6316 12.0275 34.8175 10.9525C35.6058 10.5583 36.5016 10.5583 37.29 10.9525C39.44 12.0633 41.2316 14.93 41.2316 17.3667V24.7842C41.2316 25.4292 41.6975 26.1817 42.3066 26.4325L56.425 32.5242C58.0375 33.205 59.3275 35.2117 59.3275 36.9317V40.2642Z" fill="#292D32"/>
                                </svg>
                            </div>
                            <p>
                                شروعی هوشمند 
                            </p>
                        </div>
                        <div className={styles.btn + " flex flex-col gap-2"}>
                            <Link href={"/smart-form"}>
                                <PrimaryBtn>
                                    فرم ارزیابی 
                                </PrimaryBtn>
                            </Link>
                            <Link href={"/smart-form"}>
                                <PrimaryBtn>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20.3672 9.72188H18.6379V8.79958C18.6379 5.05263 15.6115 2.02597 11.8643 2.02597C8.11708 2.02597 5.09067 5.05238 5.09067 8.79958V9.72188H3.36133V8.79958C3.36133 4.10133 7.16583 0.296875 11.864 0.296875C16.5622 0.296875 20.3667 4.10158 20.3667 8.79958L20.3672 9.72188Z" fill="white"/>
                                        <path d="M5.4365 18.2249H3.30363C1.8048 18.2249 0.594238 17.0144 0.594238 15.5155V11.5668C0.594238 10.068 1.8048 8.85742 3.30363 8.85742H5.4365C5.92652 8.85742 6.3013 9.23218 6.3013 9.72222V17.3604C6.3013 17.8504 5.92654 18.225 5.4365 18.225V18.2249Z" fill="white"/>
                                        <path d="M20.4244 18.2252H18.2916C17.8015 18.2252 17.4268 17.8504 17.4268 17.3604V9.72222C17.4268 9.2322 17.8015 8.85742 18.2916 8.85742H20.4244C21.9232 8.85742 23.1338 10.068 23.1338 11.5668V15.5155C23.1338 17.0144 21.9232 18.2249 20.4244 18.2249V18.2252Z" fill="white"/>
                                        <path d="M17.0525 21.2793H14.7466V19.55H17.0525C18.263 19.55 19.2431 18.5699 19.2431 17.3594H20.9724C20.9724 19.521 19.2143 21.2793 17.0525 21.2793Z" fill="white"/>
                                        <path d="M12.4697 23.5578C10.7116 23.5578 9.29932 22.1454 9.29932 20.4161C9.29932 18.6867 10.7116 17.2744 12.441 17.2744C14.1703 17.2744 15.5827 18.6867 15.5827 20.3873C15.6114 21.1944 15.3232 22.0014 14.7469 22.5779C14.1703 23.212 13.3345 23.5578 12.4697 23.5578V23.5578ZM12.441 19.0038C11.6627 19.0038 11.0286 19.6378 11.0286 20.4161C11.0286 21.1944 11.6917 21.8284 12.4697 21.8284C12.8732 21.8284 13.248 21.6844 13.5073 21.3961C13.7378 21.1366 13.882 20.8196 13.8531 20.4451V20.4163C13.8533 19.6378 13.219 19.0038 12.4409 19.0038L12.441 19.0038Z" fill="white"/>
                                    </svg>
                                    رزرو وقت مشاوره 
                                </PrimaryBtn>
                            </Link>
                            <Link href={"/smart-form"}>
                                <PrimaryBtn>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <path d="M9.95534 2.81348C7.2711 2.81348 5.08887 4.99571 5.08887 7.67995C5.08887 10.313 7.14816 12.444 9.8324 12.5362C9.91436 12.5259 9.99632 12.5259 10.0578 12.5362C10.0783 12.5362 10.0885 12.5362 10.109 12.5362C10.1193 12.5362 10.1193 12.5362 10.1295 12.5362C12.7523 12.444 14.8116 10.313 14.8218 7.67995C14.8218 4.99571 12.6396 2.81348 9.95534 2.81348Z" fill="white"/>
                                        <path d="M15.1599 15.2622C12.3015 13.3566 7.63989 13.3566 4.76098 15.2622C3.45984 16.1331 2.74268 17.3113 2.74268 18.5714C2.74268 19.8316 3.45984 20.9995 4.75074 21.8601C6.18507 22.8232 8.07019 23.3047 9.9553 23.3047C11.8404 23.3047 13.7255 22.8232 15.1599 21.8601C16.4508 20.9893 17.1679 19.8213 17.1679 18.5509C17.1577 17.2908 16.4508 16.1228 15.1599 15.2622Z" fill="white"/>
                                        <path d="M21.2151 8.28487C21.379 10.2724 19.9652 12.0141 18.0084 12.2498C17.9981 12.2498 17.9981 12.2498 17.9879 12.2498H17.9571C17.8957 12.2498 17.8342 12.2498 17.783 12.2703C16.7892 12.3215 15.8773 12.0039 15.1909 11.4199C16.2462 10.4773 16.8506 9.06351 16.7277 7.52673C16.656 6.69686 16.3691 5.93872 15.9388 5.29327C16.3281 5.09861 16.7789 4.97567 17.24 4.93469C19.248 4.76052 21.0409 6.25632 21.2151 8.28487Z" fill="white"/>
                                        <path d="M23.264 17.761C23.1821 18.7548 22.5469 19.6154 21.4814 20.1994C20.4569 20.7629 19.166 21.0292 17.8853 20.9985C18.623 20.3326 19.0533 19.5027 19.1352 18.6216C19.2377 17.3512 18.6332 16.132 17.4243 15.1587C16.7378 14.6157 15.9387 14.1854 15.0679 13.8678C17.3321 13.2121 20.1802 13.6527 21.9322 15.0665C22.8747 15.8247 23.3562 16.7775 23.264 17.761Z" fill="white"/>
                                    </svg>
                                    ارتباط با کارشناسان 
                                </PrimaryBtn>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.smartstart__video}>
                        {homeContents?.founder_video && (
                            <video controls>
                                <source src={domain + homeContents?.founder_video.substring(1)} type="video/mp4" />
                            </video>
                        )}
                    </div>
                </div>
                <HomeSlider data={favoriteBlogs} />
                <div className={styles.emailInput + " container w-11/12 mx-auto mt-20 text-right flex flex-col justify-end"}>
                    <p className="mb-2">
                        برای اطلاع از آخرین خبر‌های مهاجرتی، ایمیل خود را ثبت نمایید.
                    </p>
                    <form>
                        <div className={styles.formgroup + " cursor-pointer max-w-[500px] ml-auto relative"}>
                            <input 
                                className="w-full bg-[#EF1B47] text-right text-white p-2" 
                                type="text" 
                                placeholder="ثبت ایمیل " 
                                value={email}
                                onChange={handleInputChange}
                            />
                            <div onClick={handleSubmit} className="cursor-pointer absolute left-0 top-0 border-r border-r-white px-1 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path d="M3.07627 8.27989C3.0676 8.49118 3.06761 8.72723 3.06763 8.97849V23.9118C3.06761 24.2505 3.06759 24.5616 3.08883 24.8216C3.11174 25.102 3.16417 25.4087 3.31853 25.7116C3.53923 26.1448 3.89139 26.4969 4.32454 26.7176C4.62748 26.872 4.9342 26.9244 5.21456 26.9473C5.4746 26.9686 5.78566 26.9686 6.12436 26.9686H26.3192C26.6579 26.9686 26.969 26.9686 27.229 26.9473C27.5094 26.9244 27.8161 26.872 28.1191 26.7176C28.5522 26.4969 28.9044 26.1448 29.1251 25.7116C29.2794 25.4087 29.3319 25.102 29.3548 24.8216C29.376 24.5616 29.376 24.2505 29.376 23.9118V8.9786C29.376 8.7273 29.376 8.49121 29.3673 8.27989L17.6795 17.8427C16.8315 18.5365 15.6121 18.5365 14.7641 17.8427L3.07627 8.27989Z" fill="white"/>
                                    <path d="M28.5145 6.42828C28.3924 6.33035 28.26 6.24461 28.1191 6.17278C27.8161 6.01842 27.5094 5.96599 27.229 5.94308C26.969 5.92184 26.658 5.92186 26.3194 5.92188H6.12437C5.78572 5.92186 5.47457 5.92184 5.21456 5.94308C4.9342 5.96599 4.62748 6.01842 4.32454 6.17278C4.18357 6.24461 4.05119 6.33035 3.92912 6.42828L16.0136 16.3155C16.1347 16.4147 16.3089 16.4147 16.43 16.3155L28.5145 6.42828Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
            </>
            }
            



            <Partners data={homePartners} />


            <div className={styles.homemain}>
                <div className={styles.indexcontact}>
                    <div className={styles.indexcontact__items}>
                        <Link href={"/blog"}>
                            <div className={styles.item}>
                                <div className={styles.image}>
                                    <img src="../../images/indexcontactimage.png" alt="image" />
                                </div>
                                <div className={styles.desc}>
                                    <p>
                                        مجله کانادا 
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/podcast"}>
                            <div className={styles.item}>
                                <div className={styles.image}>
                                    <img src="../../images/cast.png" alt="image" />
                                </div>
                                <div className={styles.desc}>
                                    <p>
                                        دیار کست پادکست مهاجران 
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img src="../../images/indexcontactimage.png" alt="image" />
                            </div>
                            <div className={styles.desc}>
                                <p>
                                    برنامه های مهاجرتی 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.indexcontact__buttons}>
                        <Link href={"/reserve"}>
                            <SecondPrimaryBtn>
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                    <path d="M33.6782 15.8229H30.7946V14.285C30.7946 8.03714 25.7483 2.99034 19.5 2.99034C13.2517 2.99034 8.20536 8.03672 8.20536 14.285V15.8229H5.32178V14.285C5.32178 6.45089 11.6656 0.107178 19.4996 0.107178C27.3336 0.107178 33.6774 6.45131 33.6774 14.285L33.6782 15.8229Z" fill="white"/>
                                    <path d="M8.7827 30.0009H5.22627C2.72705 30.0009 0.708496 27.9824 0.708496 25.4831V18.8989C0.708496 16.3997 2.72705 14.3811 5.22627 14.3811H8.7827C9.59978 14.3811 10.2247 15.006 10.2247 15.8231V28.5593C10.2247 29.3764 9.59982 30.001 8.7827 30.001V30.0009Z" fill="white"/>
                                    <path d="M33.774 30.0007H30.2175C29.4004 30.0007 28.7755 29.3758 28.7755 28.5586V15.8224C28.7755 15.0054 29.4004 14.3804 30.2175 14.3804H33.774C36.2732 14.3804 38.2917 16.399 38.2917 18.8982V25.4825C38.2917 27.9817 36.2732 30.0002 33.774 30.0002V30.0007Z" fill="white"/>
                                    <path d="M28.1514 35.0946H24.3065V32.211H28.1514C30.17 32.211 31.8042 30.5768 31.8042 28.5583H34.6878C34.6878 32.1627 31.7562 35.0946 28.1514 35.0946Z" fill="white"/>
                                    <path d="M20.5096 38.893C17.5781 38.893 15.2231 36.538 15.2231 33.6544C15.2231 30.7708 17.5781 28.4158 20.4617 28.4158C23.3453 28.4158 25.7003 30.7708 25.7003 33.6065C25.7482 34.9522 25.2676 36.2979 24.3066 37.2592C23.3453 38.3164 21.9516 38.893 20.5096 38.893V38.893ZM20.4617 31.2994C19.1639 31.2994 18.1067 32.3566 18.1067 33.6544C18.1067 34.9522 19.2123 36.0094 20.5096 36.0094C21.1825 36.0094 21.8074 35.7692 22.2397 35.2886C22.6241 34.8559 22.8646 34.3272 22.8163 33.7027V33.6548C22.8166 32.3567 21.7591 31.2995 20.4616 31.2995L20.4617 31.2994Z" fill="white"/>
                                </svg>
                                <p>
                                    رزرو وقت مشاوره 
                                </p>
                            </SecondPrimaryBtn>
                        </Link>
                        <Link href={"/"}>
                            <SecondPrimaryBtn>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <path d="M15.375 3.41669C10.8991 3.41669 7.26038 7.05544 7.26038 11.5313C7.26038 15.9217 10.6941 19.475 15.17 19.6288C15.3066 19.6117 15.4433 19.6117 15.5458 19.6288C15.58 19.6288 15.597 19.6288 15.6312 19.6288C15.6483 19.6288 15.6483 19.6288 15.6654 19.6288C20.0387 19.475 23.4725 15.9217 23.4895 11.5313C23.4895 7.05544 19.8508 3.41669 15.375 3.41669Z" fill="white"/>
                                    <path d="M24.0534 24.1729C19.2871 20.9954 11.5142 20.9954 6.71381 24.1729C4.54422 25.625 3.34839 27.5896 3.34839 29.6908C3.34839 31.7921 4.54422 33.7396 6.69672 35.1746C9.08839 36.7804 12.2317 37.5833 15.3751 37.5833C18.5184 37.5833 21.6617 36.7804 24.0534 35.1746C26.2059 33.7225 27.4017 31.775 27.4017 29.6567C27.3846 27.5554 26.2059 25.6079 24.0534 24.1729Z" fill="white"/>
                                    <path d="M34.1496 12.5392C34.4229 15.8533 32.0654 18.7575 28.8025 19.1504C28.7854 19.1504 28.7854 19.1504 28.7684 19.1504H28.7171C28.6146 19.1504 28.5121 19.1504 28.4267 19.1846C26.7696 19.27 25.2492 18.7404 24.1046 17.7667C25.8642 16.195 26.8721 13.8375 26.6671 11.275C26.5475 9.89126 26.0692 8.62709 25.3517 7.55084C26.0009 7.22626 26.7525 7.02126 27.5213 6.95292C30.8696 6.66251 33.8592 9.15667 34.1496 12.5392Z" fill="white"/>
                                    <path d="M37.5662 28.3413C37.4295 29.9984 36.3704 31.4334 34.5937 32.4071C32.8854 33.3467 30.7329 33.7909 28.5975 33.7396C29.8275 32.6292 30.545 31.2454 30.6816 29.7763C30.8525 27.6579 29.8445 25.625 27.8287 24.0021C26.6841 23.0967 25.3516 22.3792 23.8995 21.8496C27.675 20.7563 32.4241 21.4909 35.3454 23.8484C36.917 25.1125 37.72 26.7013 37.5662 28.3413Z" fill="white"/>
                                </svg>
                                <p>
                                    ارتباط با کارشناسان 
                                </p>
                            </SecondPrimaryBtn>
                        </Link>
                    </div>
                </div>




                <div className={styles.indexdesc}>
                    <div className={styles.indexdesc__vector}>
                        <p>
                            دیار
                        </p>
                    </div>
                    <div className={styles.indexdesc__desc} dangerouslySetInnerHTML={{ __html: homeContents?.content_bottom }}></div>
                </div>


                <IndexBanner />



                <div className={styles.indexapp}>
                    <div className={styles.indexapp__title}>
                        <p>
                            اپلیکیشن هوشمند دیار  
                        </p>
                    </div>
                    <div className={styles.indexapp__image} data-aos="zoom-in" data-aos-duration="1500">
                        <img src="../../images/indexappimage.png" alt="image" />
                    </div>
                </div>




                <Testimonial data={feedBack} />
            </div>




        </>
    )
}

export default HomePage;