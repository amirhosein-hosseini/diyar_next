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
import { getAllBlogs, getAllMyBlogs, getFavoriteBlogs } from "../../api/blog";
import { getAllProgramItemsCategory } from "../../api/programs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { toast } from "react-toastify";
import IndexBanner from "../banner/indexBanner";
import Link from "next/link";
import SampleItem from "../sample/sampleItem";
import BlogItem from "./blogItem";
import AnimatedNumber from "../animation/animatedNumber";
import { getAllSamples } from "../../api/samples";
import { getAllPlans } from "../../api/plans";

const HomePage = () => {

    const [homeContents , setHomeContents] = useState(null);
    const [homeBenefit , setHomeBenefit] = useState(null);
    const [homePartners , setHomePartners] = useState(null);
    const [feedBack , setFeedBack] = useState(null);
    const [blogs , setBlogs] = useState(null);
    const [programsList , setProgramsList] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [email , setEmail] = useState(null);
    const [samples , setSamples] = useState(null);
    const [plans , setPlans] = useState(null);
    const [onePlan , setOnePlan] = useState(null);
    const [secondPlan , setSecondPlan] = useState(null);
    const [thirdPlan , setThirdPlan] = useState(null);
    const [otherPlans , setOtherPlans] = useState([]);


    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    console.log(blogs)




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

    
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await getAllHomeContents();
    //         setHomeContents(data?.data?.home[0]);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    
    //     fetchData();
    // }, []);




    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllSamples();
            setSamples(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllBlogs();
            setBlogs(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllPlans();
            setPlans(data?.data?.data);
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        plans?.map((item) => {
            if(item?.index_position === "1"){
                setOnePlan(item);
            }
            else if(item?.index_position === "2"){
                setSecondPlan(item)
            }
            else if(item?.index_position === "3"){
                setThirdPlan(item)
            } else{
                otherPlans.push(item)
            }
        })
    } , [plans])




    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await getAllHomeBenefit();
    //         setHomeBenefit(data?.data);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    
    //     fetchData();
    // }, []);


    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await getAllHomePartners();
    //         setHomePartners(data?.data?.partner_logo);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    
    //     fetchData();
    // }, []);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllFeedBacks();
            setFeedBack(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);





    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await getAllProgramItemsCategory();
    //         setProgramsList(data?.data);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    
    //     fetchData();
    // }, []);







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
            <Hero />



            <div className="container max-w-7xl w-11/12 mx-auto flex flex-col items-center justify-center gap-20 mt-20">
                <div className="flex flex-col items-center justify-center gap-5">
                    <p className="font-bold text-3xl max-md:text-xl">
                        رتبه <span className="text-[65px] max-md:text-[40px] text-[#EF1B47]">یک</span> قبولی ویزا 
                    </p>
                    <p className="text-lg">
                        منتظر شما هستیم در کانادا    
                    </p>
                </div>
                <div>
                    {isMobile === false ? 
                        <img src="../../images/rank.png" alt="image" /> : 
                        <img src="../../images/rank.png" alt="image" />
                    }
                    
                </div>
                <div className="flex items-center gap-4">
                    {isMobile === false ? 
                        <button className="px-5 py-3 font-bold text-sm border-2 border-[#EF1B47] rounded-lg">
                            فرم ارزیابی  رایگان
                        </button> : ""
                    }
                    <Link href={"/reserve"}>
                        <button className="px-5 py-3 font-bold text-sm border-2 border-[#EF1B47] rounded-lg">
                            رزرو وقت مشاوره 
                        </button>
                    </Link>
                    <button className="px-5 py-3 font-bold text-sm border-2 border-[#EF1B47] rounded-lg">
                        فرم ارزیابی  هوشمند  
                    </button>
                </div>
            </div>


            <div className="mt-20">
                <p className="text-center font-bold text-2xl mb-10">
                    برنامه های مهاجرتی
                </p>
                {isMobile === false ? 
                    <div className="container max-w-7xl w-11/12 mx-auto">
                        <Link href={"/plan/" + onePlan?.id}>
                            <div className="rounded-xl overflow-hidden" data-aos="zoom-in" data-aos-duration="1500">
                                <div className="w-full overflow-hidden">
                                    <img className="object-cover w-full" src={onePlan?.banner} alt="image" />
                                </div>
                                <div className="bg-[#545454] text-white p-8">
                                    <p className="text-xs leading-5 w-8/12 ml-auto">
                                        {onePlan?.description}
                                    </p>
                                    <div className="mr-auto flex justify-start">
                                        <p className="text-sm mr-auto flex">
                                            اطلاعات بیشتر
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="flex mt-5">
                            <Link href={"/plan/" + secondPlan?.id} className="w-1/2 bg-[#545454] p-6 text-white text-center flex flex-col gap-3 rounded-tl-xl">
                                <p className="text-3xl font-bold">
                                    {secondPlan?.en_title}
                                </p>
                                <p className="text-sm p-1 bg-[#EF1B47] rounded-lg py-2">
                                    بهترین روش های مهاجرت از طریق برنامه {secondPlan?.title}
                                </p>
                                <p className="text-xs leading-5">
                                    {secondPlan?.description}
                                </p>
                            </Link>

                            <Link href={"/plan/" + thirdPlan?.id} className="w-1/2 bg-[#EF1B47] p-6 text-white text-center flex flex-col gap-3 rounded-tr-xl">
                                <div className="flex gap-3 items-center justify-center">
                                    <p className="text-3xl font-bold">
                                        {thirdPlan?.title}
                                    </p>
                                    <p>
                                        برنامه مهاجرتی
                                    </p>
                                </div>
                                <p className="text-xs leading-5">
                                    {thirdPlan?.description}
                                </p>
                            </Link>
                        </div>
                        <div className="bg-[#545454] p-6 rounded-bl-xl rounded-br-xl w-full">
                            <div className="text-white text-center flex justify-between w-10/12 mx-auto">
                                <div className="flex flex-col gap-3 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.291 29.8427L23.9577 36.461V39.7203C23.9577 40.1156 24.3808 40.3668 24.7279 40.1775L29.8481 37.3847C31.354 36.5633 32.291 34.9849 32.291 33.2695V29.8427ZM20.8327 36.3538L13.6461 29.1672H10.2796C7.51224 29.1672 5.75381 26.2051 7.07898 23.7756L9.87183 18.6554C11.2408 16.1455 13.8714 14.5839 16.7304 14.5839H22.7118C28.1474 8.7995 34.217 4.87356 42.0646 4.25319C44.1695 4.08679 45.9131 5.83042 45.7467 7.93532C45.1264 15.7829 41.2004 21.8525 35.416 27.2881V33.2695C35.416 36.1285 33.8544 38.7591 31.3445 40.1281L26.2243 42.9209C23.7948 44.2461 20.8327 42.4877 20.8327 39.7203V36.3538ZM20.1572 17.7089H16.7304C15.015 17.7089 13.4367 18.6459 12.6153 20.1518L9.82241 25.272C9.6331 25.6191 9.8843 26.0422 10.2796 26.0422H13.5389L20.1572 17.7089ZM4.16602 39.9891C4.16602 36.761 6.78287 34.1442 10.0109 34.1442C13.239 34.1442 15.8558 36.761 15.8558 39.9891C15.8558 43.2171 13.239 45.834 10.0109 45.834H7.81185C5.79831 45.834 4.16602 44.2017 4.16602 42.1881V39.9891Z" fill="white" />
                                    </svg>
                                    <p className="text-xs">
                                        شرایط متقاضی ویزای استارت آپ کانادا
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9961 6.34521C28.073 5.38178 28.9164 4.66311 29.8798 4.74002C41.888 5.69861 51.3327 15.7448 51.3327 27.9986C51.3327 40.8852 40.886 51.3319 27.9993 51.3319C15.1127 51.3319 4.66602 40.8852 4.66602 27.9986C4.66602 18.8345 9.94921 10.9076 17.6279 7.09162C18.4935 6.66149 19.5438 7.01445 19.9739 7.87996C20.404 8.74547 20.0511 9.79579 19.1856 10.2259C12.6508 13.4734 8.16602 20.2139 8.16602 27.9986C8.16602 38.9522 17.0457 47.8319 27.9993 47.8319C38.953 47.8319 47.8327 38.9522 47.8327 27.9986C47.8327 17.5844 39.8049 9.04346 29.6013 8.22892C28.6378 8.15201 27.9192 7.30864 27.9961 6.34521ZM28.0056 14.6939C28.1319 13.7357 29.0111 13.0613 29.9693 13.1877C37.29 14.1531 42.9392 20.4147 42.9392 27.9986C42.9392 36.2496 36.2504 42.9384 27.9993 42.9384C19.7483 42.9384 13.0595 36.2496 13.0595 27.9986C13.0595 25.7772 13.5455 23.6646 14.4185 21.7652C14.8222 20.887 15.8613 20.5023 16.7395 20.906C17.6177 21.3097 18.0023 22.3488 17.5987 23.2269C16.9321 24.6771 16.5595 26.292 16.5595 27.9986C16.5595 34.3166 21.6813 39.4384 27.9993 39.4384C34.3174 39.4384 39.4392 34.3166 39.4392 27.9986C39.4392 22.1939 35.1142 17.3965 29.5117 16.6577C28.5535 16.5313 27.8792 15.6521 28.0056 14.6939ZM28.11 22.8926C28.461 21.9921 29.4755 21.5466 30.3761 21.8976C32.8136 22.8477 34.5456 25.2187 34.5456 27.9986C34.5456 31.614 31.6148 34.5449 27.9993 34.5449C24.3839 34.5449 21.4531 31.614 21.4531 27.9986C21.4531 27.0321 22.2366 26.2486 23.2031 26.2486C24.1696 26.2486 24.9531 27.0321 24.9531 27.9986C24.9531 29.681 26.3169 31.0449 27.9993 31.0449C29.6818 31.0449 31.0456 29.681 31.0456 27.9986C31.0456 26.709 30.2437 25.6025 29.105 25.1586C28.2045 24.8076 27.759 23.7931 28.11 22.8926Z" fill="white" />
                                    </svg>
                                    <p className="text-xs">
                                        موفق شدید نامه ساپورت بگیرید؟‌
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                        <path d="M20.9113 7.78456C22.3817 5.65437 24.8383 4.25 27.625 4.25C30.4117 4.25 32.8683 5.65437 34.3387 7.78456C34.7346 8.35812 35.4064 8.69451 35.972 8.67184C36.1109 8.66627 36.2505 8.66346 36.3906 8.66346C42.1224 8.66346 46.75 13.3394 46.75 19.0841C46.75 22.9679 44.6364 26.3579 41.503 28.1493C41.3036 28.2632 41.138 28.4299 41.0262 28.6285C39.251 31.78 35.8811 33.9183 32.0078 33.9183C30.8687 33.9183 29.7695 33.7327 28.7404 33.3889C28.1115 33.1788 27.196 33.383 26.6009 33.9375C25.1463 35.2928 23.1942 36.125 21.0508 36.125C16.5293 36.125 12.8828 32.437 12.8828 27.9111C12.8828 27.6996 12.7841 27.5268 12.6681 27.4397C10.139 25.5408 8.5 22.5032 8.5 19.0841C8.5 13.3394 13.1276 8.66346 18.8594 8.66346C18.9995 8.66346 19.1391 8.66627 19.278 8.67184C19.8436 8.69451 20.5154 8.35812 20.9113 7.78456Z" fill="white" />
                                        <path d="M4.25 40.375C4.25 36.8542 7.10418 34 10.625 34C14.1458 34 17 36.8542 17 40.375C17 43.8958 14.1458 46.75 10.625 46.75C7.10418 46.75 4.25 43.8958 4.25 40.375Z" fill="white" />
                                    </svg>
                                    <p className="text-xs">
                                        ایده عالی و خلاقانه دارید؟
                                    </p>
                                </div>
                            </div>
                        </div>
                        {otherPlans.length > 0 ?
                            <>
                                <div className="flex items-center justify-center mt-20 rounded-tr-xl rounded-tl-xl pb-[30px]" style={{ background: "rgba(217, 217, 217, 0.50)" }}>
                                    <div className="flex items-center gap-2 mt-[-30px]">
                                        {otherPlans?.map((item) => (
                                            <div className="p-6 border border-black rounded-lg flex flex-col gap-2 items-center justify-center relative bg-white">
                                                <p className="text-xl text-[#EF1B47] font-bold">
                                                    {item?.title}
                                                </p>
                                                <p className="text-[7px]">
                                                    {item?.description}
                                                </p>
                                                <p className="absolute bottom-1 left-1 text-[7px] font-bold">
                                                    اطلاعات بیشتر
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </> : ""
                        }


                    </div> : 
                    <div style={{background : "rgba(217, 217, 217, 0.50)"}}>
                        <div className="container w-11/12 mx-auto py-8">
                            <div className="grid grid-cols-2 gap-3">
                                {plans?.slice(0,8)?.map((item) => (
                                    <div className="p-6 border border-black rounded-lg flex flex-col gap-2 items-center justify-center relative bg-white">
                                        <p className="text-xl text-[#EF1B47] font-bold">
                                            {item?.title}
                                        </p>
                                        <p className="text-[7px]">
                                            {item?.description}
                                        </p>
                                        <p className="absolute bottom-1 left-1 text-[7px] font-bold">
                                            اطلاعات بیشتر
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </div>



            <div className="container w-11/12 max-w-7xl mx-auto mt-20">
                <p className="text-center font-bold text-2xl">
                    نمونه های موفق 
                </p>
                <div className="mt-10 flex items-center gap-4" style={{direction:"rtl"}}>
                    {samples?.map((item) => (
                        <SampleItem title={item?.title} desc={item?.description} image={item?.banner} slug={item?.id} />
                    ))}
                </div>
            </div>



            {isMobile === false ? 
                <div className="bg-[#545454] mt-20 py-10">
                    <div className="container max-w-5xl w-11/12 mx-auto flex items-center justify-between">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <p className="font-bold text-[50px] text-white">
                                <AnimatedNumber value={234} />
                            </p>
                            <p className="text-sm text-white">
                                رزرو مشاوره
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <p className="font-bold text-[50px] text-white">
                                <AnimatedNumber value={234} />
                            </p>
                            <p className="text-sm text-white">
                                رزرو مشاوره
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <p className="font-bold text-[50px] text-white">
                                <AnimatedNumber value={234} />
                            </p>
                            <p className="text-sm text-white">
                                رزرو مشاوره
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <p className="font-bold text-[50px] text-white">
                                <AnimatedNumber value={234} />
                            </p>
                            <p className="text-sm text-white">
                                رزرو مشاوره
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <p className="font-bold text-[50px] text-white">
                                <AnimatedNumber value={234} />
                            </p>
                            <p className="text-sm text-white">
                                رزرو مشاوره
                            </p>
                        </div>
                    </div>
                </div> : ""
            }



            <div className="relative">
                <img className="w-full max-md:h-[600px]" src="../../images/indexblogbackground.png" alt="image" />
                <div className="absolute container max-w-7xl w-11/12 mx-auto py-20" style={{left:"50%" , top: "50%" , transform: "translate(-50%,-50%"}}>
                    <p className="text-center font-bold text-2xl max-md:text-lg">
                        مجله کانادا
                    </p>
                    <div className="flex items-center gap-5 mt-20 mx-auto max-md:grid max-md:grid-cols-2 " style={{direction: "rtl" , width: "max-content"}}>
                        {blogs?.slice(0,4)?.map((item) => (
                            <BlogItem image={item?.thumb} title={item?.title} desc={item?.description} slug={item?.id} />
                        ))}
                    </div>
                </div>
            </div>
            

            <div className="container max-w-7xl w-11/12 mx-auto flex items-center max-md:flex-col">
                <div className="flex flex-col gap-2 items-center justify-center mt-14">
                    <p className="font-bold text-2xl tex-center">
                        مارا دنبال کنید 
                    </p>
                    <div className="flex gap-2">
                        <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                            <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </div>
                        <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                        </div>
                        <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </div>
                        <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                        </div>
                    </div>
                </div>
                <div className={styles.emailInput + " max-w-[500px] ml-auto container max-md:mx-auto w-11/12 mt-20 text-right flex flex-col"}>
                    <p className="mb-2">
                        برای اطلاع از آخرین خبر‌های مهاجرتی، ایمیل خود را ثبت نمایید.
                    </p>
                    <form>
                        <div className={styles.formgroup + " relative"}>
                            <input
                                className="w-full bg-[#525252] text-right text-black p-2"
                                type="text"
                                placeholder="ثبت ایمیل "
                                value={email}
                                onChange={handleInputChange}
                            />
                            <div onClick={handleSubmit} className="cursor-pointer absolute left-0 top-0 border-r border-r-[#fff] px-1 py-[3px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path d="M3.077 8.27989C3.06833 8.49118 3.06834 8.72723 3.06836 8.97849V23.9118C3.06834 24.2505 3.06832 24.5616 3.08956 24.8216C3.11247 25.102 3.16491 25.4087 3.31927 25.7116C3.53996 26.1448 3.89212 26.4969 4.32527 26.7176C4.62822 26.872 4.93494 26.9244 5.21529 26.9473C5.47533 26.9686 5.78639 26.9686 6.12509 26.9685H26.32C26.6587 26.9686 26.9697 26.9686 27.2298 26.9473C27.5101 26.9244 27.8168 26.872 28.1198 26.7176C28.5529 26.4969 28.9051 26.1448 29.1258 25.7116C29.2802 25.4087 29.3326 25.102 29.3555 24.8216C29.3767 24.5616 29.3767 24.2505 29.3767 23.9118V8.9786C29.3767 8.7273 29.3767 8.49121 29.3681 8.27989L17.6802 17.8427C16.8323 18.5365 15.6128 18.5365 14.7648 17.8427L3.077 8.27989Z" fill="white"/>
                                    <path d="M28.5152 6.42828C28.3931 6.33035 28.2608 6.24461 28.1198 6.17278C27.8168 6.01842 27.5101 5.96599 27.2298 5.94308C26.9698 5.92184 26.6587 5.92186 26.3201 5.92188H6.12511C5.78646 5.92186 5.4753 5.92184 5.21529 5.94308C4.93494 5.96599 4.62822 6.01842 4.32527 6.17278C4.18431 6.24461 4.05192 6.33035 3.92985 6.42828L16.0143 16.3155C16.1354 16.4147 16.3096 16.4147 16.4308 16.3155L28.5152 6.42828Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



            {isMobile === false ? 
                <div className="container max-w-5xl w-11/12 mx-auto mt-20">
                    <div className="flex gap-5 items-end">
                        <div className="w-4/12 overflow-hidden" data-aos="fade-right" data-aos-duration="1500">
                            <img className="object-cover w-full" src="../../images/hamideh.png" alt="image" />
                        </div>
                        <div className="w-7/12" data-aos="fade-up" data-aos-duration="1500">
                            <p className="text-center mb-10 text-3xl font-bold">
                                مهاجرت آسان و مطمئن
                            </p>
                            <div className="bg-[#6C6C6C] rounded-lg p-6 text-white flex flex-col gap-4">
                                <p className="text-center text-lg">
                                    حمیده سادات سکاک
                                </p>
                                <p className="text-center text-xs leading-5">
                                    بنیان گذار سازمان مهاجرتی دیار و عضو رسمی شورای قانون گذاری امور مهاجرت کانادا و دانش آموخته رشته مهاجرت کانادا است
                                </p>
                                <p className="text-xs mt-3 leading-5">
                                    ما بهترین خدمات را ارائه می دهیم
                                    ما بهترین راه برای موفقیت در مهاجرت شما را ارائه می دهیم
                                    تصمیم به مهاجرت تصمیمی توام با امید و نگرانی است. از این رو سوالات بسیاری در این مسیر برای موکلان ما ایجاد می شود. ما نیز این روزها را سپری کرده ایم و نگرانی های شما را می شناسیم. پرونده شما پس از بررسی و بازنگرهای متعدد و با اطمینان خاطر به اداره مهاجرت ارسال خواهد شد. ما معتقدیم موفقیت شما رمز موفقیت ماست.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-[-8px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="24" viewBox="0 0 1190 24" fill="none">
                            <path d="M1178 12H12" stroke="url(#paint0_linear_1976_6057)" stroke-opacity="0.6" stroke-width="23" stroke-linecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_1976_6057" x1="595" y1="12" x2="595" y2="13" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FB2D2D" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div> : 
                <div className="mt-20">
                    <div>
                        <div className="w-2/3 overflow-hidden mx-auto">
                            <img className="object-cover w-full" src="../../images/hamideh.png" alt="image" />
                        </div>
                        <div className="border-t-[10px] border-t-[#FB2D2D] border-b-[10px] border-b-[#FB2D2D]">
                            <div className="containeir w-11/12 mx-auto flex flex-col gap-1 text-center py-3">
                                <p className="text-sm font-bold">
                                    حمیده سادات سکاک
                                </p>
                                <p className="text-xs">
                                    بنیان گذار سازمان مهاجرتی دیار و عضو رسمی شورای قانون گذاری امور مهاجرت کانادا و دانش آموخته رشته مهاجرت کانادا است
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl font-bold text-center mb-5">
                            مهاجرت آسان و مطمئن
                        </p>
                        <div className="bg-[#5D5D5D] py-8 text-center">
                            <div className="container w-11/12 mx-auto text-white text-xs leading-5">
                                <p>
                                    ما بهترین خدمات را ارائه می دهیم
                                    ما بهترین راه برای موفقیت در مهاجرت شما را ارائه می دهیم
                                    تصمیم به مهاجرت تصمیمی توام با امید و نگرانی است. از این رو سوالات بسیاری در این مسیر برای موکلان ما ایجاد می شود. ما نیز این روزها را سپری کرده ایم و نگرانی های شما را می شناسیم. پرونده شما پس از بررسی و بازنگرهای متعدد و با اطمینان خاطر به اداره مهاجرت ارسال خواهد شد. ما معتقدیم موفقیت شما رمز موفقیت ماست.
                                </p>
                                <div className="flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="58" viewBox="0 0 83 58" fill="none">
                                        <path d="M18.221 21.0909C21.8084 21.0909 25.3152 22.1732 28.298 24.2011C31.2808 26.2289 33.6056 29.1111 34.9785 32.4832C36.3513 35.8553 36.7105 39.5659 36.0106 43.1458C35.3108 46.7256 33.5833 50.0139 31.0466 52.5948C28.5099 55.1757 25.278 56.9333 21.7596 57.6454C18.2411 58.3575 14.5942 57.992 11.2799 56.5952C7.96557 55.1984 5.13278 52.8331 3.13974 49.7982C1.1467 46.7634 0.0829171 43.1954 0.0829171 39.5454L0 36.9091C0 27.1202 3.82195 17.7322 10.6251 10.8104C17.4282 3.88862 26.6552 0 36.2762 0V10.5455C32.872 10.5361 29.4997 11.2136 26.3543 12.5385C23.209 13.8635 20.353 15.8098 17.9515 18.2647C17.0182 19.2126 16.1572 20.2314 15.3759 21.3124C16.3036 21.1647 17.2519 21.0856 18.2158 21.0856L18.221 21.0909ZM64.8619 21.0909C68.4493 21.0909 71.9561 22.1732 74.9389 24.2011C77.9217 26.2289 80.2465 29.1111 81.6193 32.4832C82.9921 35.8553 83.3513 39.5659 82.6515 43.1458C81.9516 46.7256 80.2241 50.0139 77.6875 52.5948C75.1508 55.1757 71.9189 56.9333 68.4005 57.6454C64.882 58.3575 61.235 57.992 57.9207 56.5952C54.6064 55.1984 51.7736 52.8331 49.7806 49.7982C47.7876 46.7634 46.7238 43.1954 46.7238 39.5454L46.6409 36.9091C46.6409 27.1202 50.4628 17.7322 57.2659 10.8104C64.069 3.88862 73.296 0 82.9171 0V10.5455C79.5128 10.5361 76.1405 11.2136 72.9952 12.5385C69.8498 13.8635 66.9939 15.8098 64.5924 18.2647C63.659 19.2126 62.798 20.2314 62.0168 21.3124C62.9444 21.1647 63.8928 21.0856 64.8619 21.0856V21.0909Z" fill="white" fill-opacity="0.3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


            
            <div className={styles.homemain}>

                {isMobile === false ? 
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
                                        <path d="M33.6782 15.8229H30.7946V14.285C30.7946 8.03714 25.7483 2.99034 19.5 2.99034C13.2517 2.99034 8.20536 8.03672 8.20536 14.285V15.8229H5.32178V14.285C5.32178 6.45089 11.6656 0.107178 19.4996 0.107178C27.3336 0.107178 33.6774 6.45131 33.6774 14.285L33.6782 15.8229Z" fill="white" />
                                        <path d="M8.7827 30.0009H5.22627C2.72705 30.0009 0.708496 27.9824 0.708496 25.4831V18.8989C0.708496 16.3997 2.72705 14.3811 5.22627 14.3811H8.7827C9.59978 14.3811 10.2247 15.006 10.2247 15.8231V28.5593C10.2247 29.3764 9.59982 30.001 8.7827 30.001V30.0009Z" fill="white" />
                                        <path d="M33.774 30.0007H30.2175C29.4004 30.0007 28.7755 29.3758 28.7755 28.5586V15.8224C28.7755 15.0054 29.4004 14.3804 30.2175 14.3804H33.774C36.2732 14.3804 38.2917 16.399 38.2917 18.8982V25.4825C38.2917 27.9817 36.2732 30.0002 33.774 30.0002V30.0007Z" fill="white" />
                                        <path d="M28.1514 35.0946H24.3065V32.211H28.1514C30.17 32.211 31.8042 30.5768 31.8042 28.5583H34.6878C34.6878 32.1627 31.7562 35.0946 28.1514 35.0946Z" fill="white" />
                                        <path d="M20.5096 38.893C17.5781 38.893 15.2231 36.538 15.2231 33.6544C15.2231 30.7708 17.5781 28.4158 20.4617 28.4158C23.3453 28.4158 25.7003 30.7708 25.7003 33.6065C25.7482 34.9522 25.2676 36.2979 24.3066 37.2592C23.3453 38.3164 21.9516 38.893 20.5096 38.893V38.893ZM20.4617 31.2994C19.1639 31.2994 18.1067 32.3566 18.1067 33.6544C18.1067 34.9522 19.2123 36.0094 20.5096 36.0094C21.1825 36.0094 21.8074 35.7692 22.2397 35.2886C22.6241 34.8559 22.8646 34.3272 22.8163 33.7027V33.6548C22.8166 32.3567 21.7591 31.2995 20.4616 31.2995L20.4617 31.2994Z" fill="white" />
                                    </svg>
                                    <p>
                                        رزرو وقت مشاوره
                                    </p>
                                </SecondPrimaryBtn>
                            </Link>
                            <Link href={"/"}>
                                <SecondPrimaryBtn>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                        <path d="M15.375 3.41669C10.8991 3.41669 7.26038 7.05544 7.26038 11.5313C7.26038 15.9217 10.6941 19.475 15.17 19.6288C15.3066 19.6117 15.4433 19.6117 15.5458 19.6288C15.58 19.6288 15.597 19.6288 15.6312 19.6288C15.6483 19.6288 15.6483 19.6288 15.6654 19.6288C20.0387 19.475 23.4725 15.9217 23.4895 11.5313C23.4895 7.05544 19.8508 3.41669 15.375 3.41669Z" fill="white" />
                                        <path d="M24.0534 24.1729C19.2871 20.9954 11.5142 20.9954 6.71381 24.1729C4.54422 25.625 3.34839 27.5896 3.34839 29.6908C3.34839 31.7921 4.54422 33.7396 6.69672 35.1746C9.08839 36.7804 12.2317 37.5833 15.3751 37.5833C18.5184 37.5833 21.6617 36.7804 24.0534 35.1746C26.2059 33.7225 27.4017 31.775 27.4017 29.6567C27.3846 27.5554 26.2059 25.6079 24.0534 24.1729Z" fill="white" />
                                        <path d="M34.1496 12.5392C34.4229 15.8533 32.0654 18.7575 28.8025 19.1504C28.7854 19.1504 28.7854 19.1504 28.7684 19.1504H28.7171C28.6146 19.1504 28.5121 19.1504 28.4267 19.1846C26.7696 19.27 25.2492 18.7404 24.1046 17.7667C25.8642 16.195 26.8721 13.8375 26.6671 11.275C26.5475 9.89126 26.0692 8.62709 25.3517 7.55084C26.0009 7.22626 26.7525 7.02126 27.5213 6.95292C30.8696 6.66251 33.8592 9.15667 34.1496 12.5392Z" fill="white" />
                                        <path d="M37.5662 28.3413C37.4295 29.9984 36.3704 31.4334 34.5937 32.4071C32.8854 33.3467 30.7329 33.7909 28.5975 33.7396C29.8275 32.6292 30.545 31.2454 30.6816 29.7763C30.8525 27.6579 29.8445 25.625 27.8287 24.0021C26.6841 23.0967 25.3516 22.3792 23.8995 21.8496C27.675 20.7563 32.4241 21.4909 35.3454 23.8484C36.917 25.1125 37.72 26.7013 37.5662 28.3413Z" fill="white" />
                                    </svg>
                                    <p>
                                        ارتباط با کارشناسان
                                    </p>
                                </SecondPrimaryBtn>
                            </Link>
                        </div>
                    </div> : ""
                }



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