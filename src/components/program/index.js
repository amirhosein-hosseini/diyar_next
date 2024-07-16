import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getAllProgramSubCategories, showProgram } from "../../api/programs";
import SubProgramItem from "./subProgramItem";
import RedSubProgramItem from "./redSubProgramItem";
import { domain } from "../../api/domain";
import { PrimaryBtn } from "../button";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { getPlanById } from "../../api/plans";

const Program = () => {
    const router = useRouter();
    const [programData, setProgramData] = useState(null);
    const [subCategories, setSubCategories] = useState(null);
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setExpandedQuestion(expandedQuestion === index ? null : index);
    };

    const questions = [
        { question: "چگونه به کانادا برویم", answer: "به راحتی" },
        { question: "سوال دوم", answer: "جواب دوم" },
        { question: "سوال سوم", answer: "جواب سوم" }
    ];

    useEffect(() => {
        if (router.query.secslug) {
            const fetchData = async () => {
                try {
                    const data = await getPlanById(router.query.secslug);
                    setProgramData(data?.data?.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }
    }, [router.query.secslug]);

    useEffect(() => {
        if (router.query.slug) {
            const fetchData = async () => {
                try {
                    const data = await getAllProgramSubCategories(router.query.slug);
                    setSubCategories(data?.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }
    }, [router.query.slug]);

    const handleGo = (category, slug) => {
        router.push("/program/" + category + "/" + slug);
        window.location.reload();
    };

    return (
        <>
            {/* <Head>
                {
                    programData?.follow === false && programData?.index === false ? <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" /> :
                    programData?.follow === false && programData?.index === true ? <meta name="robots" content="follow, noindex" /> : 
                    programData?.follow === true && programData?.index === false ? <meta name="robots" content="nofollow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" /> :
                    programData?.follow === true && programData?.index === true ? <meta name="robots" content="nofollow, noindex" /> : ""
                }
                <link rel="canonical" href={programData?.canonical === "" ? "https://hamidehsakak.com/program/" + programData?.category + programData?.slug : programData?.canonical} />
                <meta property="article:modified_time" content={programData?.updated} />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={programData?.subcategory} />
                <meta property="og:url" content={"https://hamidehsakak.com/program/" + programData?.category + programData?.slug} />
                <meta name="description" content={programData?.meta_description} />
                <meta name="title" content={programData?.meta_title} />
            </Head> */}
            <div className={styles.program + " max-md:mt-20 flex flex-col gap-10"}>
                {/* <div className={styles.header}>
                    <div className={styles.banner + " relative w-full overflow-hidden max-h-[300px]"}>
                        <img className="object-cover w-full grayscale-[50%] blur-[4px] max-h-[300px]" src={domain + programData?.banner.substring(1)} alt="banner" />
                        <p className="text-white font-bold absolute text-3xl text-center max-md:text-2xl">
                            {programData?.subcategory}
                        </p>
                    </div>
                </div> */}
                <div className={styles.descwrapper + " flex gap-3 items-start flex-row-reverse"}>
                    <div className={styles.right + " w-4/5 p-5 rounded-xl"}>
                        {/* <div className="breadCrump flex items-center mb-4" style={{ direction: "rtl" }}>
                            <Link href={"/"} className="text-[#EF1B47]">
                                خانه
                            </Link>
                            <p>/</p>
                            <Link href={"/program/" + programData?.category} className="text-[#EF1B47]">
                                {programData?.category}
                            </Link>
                            <p>/</p>
                            <p>{programData?.subcategory}</p>
                        </div> */}
                        <div className="max-md:text-sm" dangerouslySetInnerHTML={{ __html: programData?.body }}></div>
                        {/* <div className={styles.action + " mt-10 p-4 rounded-lg bg-[#E0E0E0]"}>
                            <div className={styles.item + " flex flex-col gap-3"}>
                                <div className={styles.top + " flex gap-4 w-full items-center"}>
                                    <div className={styles.image + " w-1/2 overflow-hidden"}>
                                        <img className="object-cover w-full rounded-lg" src="../../images/archiveimage.webp" />
                                    </div>
                                    <div className={styles.desc + " w-1/2 flex flex-col gap-3"}>
                                        <p className={styles.title}>
                                            برای مهاجرت به کانادا نیاز به کمک دارید؟
                                        </p>
                                        <div className={styles.description}>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                            </p>
                                        </div>
                                        <div className={styles.buttons + " flex gap-3 items-center flex-row-reverse"}>
                                            <Link href={"/reserve"}>
                                                <PrimaryBtn>
                                                    رزرو وقت مشاوره
                                                </PrimaryBtn>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-1/5">
                        <div className={styles.left + " p-5 rounded-xl flex flex-col gap-3"}>
                            <p className="text-lg font-bold">مطالب مرتبط</p>
                            {subCategories?.map((item) => (
                                <p key={item.slug} className="text-[#EF1B47] text-right cursor-pointer" style={{ direction: "rtl" }} onClick={() => handleGo(item?.category, item?.slug)}>
                                    {item?.subcategory}
                                </p>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-full overflow-hidden">
                                <img className="object-cover w-full" src="../../images/1.png" />
                            </div>
                            <div className="w-full overflow-hidden">
                                <img className="object-cover w-full" src="../../images/2.png" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-20 container max-w-3xl w-11/12 mx-auto grid grid-cols-2 gap-4">
                <div className="bg-[#E9E9E9] py-3">
                    <p className="text-center">
                        مهاجرت استارتاپی 
                    </p>
                </div>
                <div className="bg-[#E9E9E9] py-3">
                    <p className="text-center">
                        مهاجرت استارتاپی 
                    </p>
                </div>
                <div className="bg-[#E9E9E9] py-3">
                    <p className="text-center">
                        مهاجرت استارتاپی 
                    </p>
                </div>
                <div className="bg-[#E9E9E9] py-3">
                    <p className="text-center">
                        مهاجرت استارتاپی 
                    </p>
                </div>
                <div className="bg-[#E9E9E9] py-3">
                    <p className="text-center">
                        مهاجرت استارتاپی 
                    </p>
                </div>
                <div className="bg-[#E9E9E9] py-3">
                    <p className="text-center">
                        مهاجرت استارتاپی 
                    </p>
                </div>
          </div>


          <div className="max-w-3xl mt-20 mx-auto">
              <div className="flex items-center justify-center flex-col gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <path d="M4.25 23.9062C4.25 21.4332 6.12764 19.3986 8.53512 19.1504C9.10679 10.7405 16.5836 4.25 25.5 4.25C34.4164 4.25 41.8932 10.7405 42.4649 19.1504C44.8724 19.3986 46.75 21.4332 46.75 23.9062V31.3438C46.75 33.6219 45.1567 35.5279 43.0237 36.0082C42.8057 41.9776 37.8977 46.75 31.875 46.75H27.625C25.5712 46.75 23.9062 45.0851 23.9062 43.0312V41.7411C23.9062 40.8609 24.6198 40.1473 25.5 40.1473C26.3802 40.1473 27.0938 40.8609 27.0938 41.7411V43.0312C27.0938 43.3246 27.3316 43.5625 27.625 43.5625H31.875C36.0975 43.5625 39.5529 40.2783 39.8263 36.125H38.7812C37.901 36.125 37.1875 35.4115 37.1875 34.5312V20.7188C37.1875 19.8385 37.901 19.125 38.7812 19.125H39.2647C38.6821 12.6676 32.839 7.4375 25.5 7.4375C18.161 7.4375 12.3179 12.6676 11.7353 19.125H12.2188C13.099 19.125 13.8125 19.8385 13.8125 20.7188V34.5312C13.8125 35.4115 13.099 36.125 12.2188 36.125H9.03125C6.39064 36.125 4.25 33.9844 4.25 31.3438V23.9062Z" fill="black" />
                </svg>
                <p className="font-bold text-2xl">
                  سوالات متداول 
                </p>
              </div>

              <div className="mt-10">
                <div>
                  <div className="flex items-center px-2 py-3 gap-2 justify-end rounded-[30px] mb-2" style={{background: "rgba(239, 27, 71, 0.78)"}}>
                    <p className="text-xs text-white">
                      راه آسان برای مهاجرت خانوادگی به کانادا چی هست ؟
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 9L13.4142 15.5858C12.6332 16.3668 11.3669 16.3668 10.5858 15.5858L4 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-5 p-3">
                      یکی از راه‌های مهاجرت به کانادا اقدام از طریق ویزای ICT کانادا است. ICT مخفف Intra-Company Transfer به معنای انتقال درون شرکتی است. این روش مهاجرتی یکی از زیرگروه‌های برنامه‌ جابجایی بین‌المللی IMP کانادا است.
                      طبق برنامه انتقال درون شرکتی کانادا، کسب‌ و کارهای بین‌المللی که دارای یک شرکت مادر، شعب، شرکت‌های فرعی یا وابسته در کانادا هستند، می‌توانند کارکنان کلیدی خود در خارج از کانادا را از طریق ویزای ICT کانادا یا همان انتقال بین شرکتی به کانادا منتقل کنند.
                      اگر در شرکتی بین‌المللی مشغول به کار هستید و شغلی کلیدی دارید، ویزای انتقال درون‌ شرکتی کانادا می‌تواند مسیر مناسبی برای مهاجرت شما به کانادا باشد.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center px-2 py-3 gap-2 justify-end rounded-[30px] mb-2" style={{background: "rgba(239, 27, 71, 0.78)"}}>
                    <p className="text-xs text-white">
                      راه آسان برای مهاجرت خانوادگی به کانادا چی هست ؟
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 9L13.4142 15.5858C12.6332 16.3668 11.3669 16.3668 10.5858 15.5858L4 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center px-2 py-3 gap-2 justify-end rounded-[30px] mb-2" style={{background: "rgba(239, 27, 71, 0.78)"}}>
                    <p className="text-xs text-white">
                      راه آسان برای مهاجرت خانوادگی به کانادا چی هست ؟
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 9L13.4142 15.5858C12.6332 16.3668 11.3669 16.3668 10.5858 15.5858L4 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center px-2 py-3 gap-2 justify-end rounded-[30px] mb-2" style={{background: "rgba(239, 27, 71, 0.78)"}}>
                    <p className="text-xs text-white">
                      راه آسان برای مهاجرت خانوادگی به کانادا چی هست ؟
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 9L13.4142 15.5858C12.6332 16.3668 11.3669 16.3668 10.5858 15.5858L4 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
          </div>

          <div className="max-w-3xl mt-20 mx-auto">
            <p className="text-2xl font-bold text-center mb-10">
              دیدگاه ها :
            </p>
            <div className="flex flex-col gap-6">

              <div className="flex items-center gap-3">
                <div className="w-11/12" style={{background : "rgba(228, 228, 228, 0.60)"}}>
                  <p className="p-4 text-black text-xs leading-5">
                    من تجربه بسیار خوبی را در همه بخش های مجموعه دیار از جمله مشاوره قبل از بستن قرارداد، مسئول ویزا، مسئول استادی پلن، واحد مالی و ... کسب کردم و به تمام سوالات من به بهترین حالت ممکن پاسخ داده شد و خوشبختانه در مدت زمان کمتر از یکماه بعد از سابمیت مدارک، ویزا شدم. قطعاً مجموعه دیار  را به سایر دوستان و آشنایان پیشنهاد خواهم کرد  
                  </p>
                </div>
                <div className="w-1/12">
                  <img className="object-cover w-full" src="../../images/opinion.png" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11/12 py-2 pr-1 border-r-2 border-[#EF1B47]">
                  <div style={{background : "rgba(12, 12, 12, 0.60)"}}>
                    <p className="p-4 text-white text-xs leading-5">
                      من تجربه بسیار خوبی را در همه بخش های مجموعه دیار از جمله مشاوره قبل از بستن قرارداد، مسئول ویزا، مسئول استادی پلن، واحد مالی و ... کسب کردم و به تمام سوالات من به بهترین حالت ممکن پاسخ داده شد و خوشبختانه در مدت زمان کمتر از یکماه بعد از سابمیت مدارک، ویزا شدم. قطعاً مجموعه دیار  را به سایر دوستان و آشنایان پیشنهاد خواهم کرد  
                    </p>
                  </div>
                </div>
                <div className="w-1/12">
                  <p className="text-center text-[9px] font-bold text-[#EF1B47]">
                    سازمان مهاجرتی 
                    <br/>
                    دیار 
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11/12" style={{background : "rgba(228, 228, 228, 0.60)"}}>
                  <p className="p-4 text-black text-xs leading-5">
                    من تجربه بسیار خوبی را در همه بخش های مجموعه دیار از جمله مشاوره قبل از بستن قرارداد، مسئول ویزا، مسئول استادی پلن، واحد مالی و ... کسب کردم و به تمام سوالات من به بهترین حالت ممکن پاسخ داده شد و خوشبختانه در مدت زمان کمتر از یکماه بعد از سابمیت مدارک، ویزا شدم. قطعاً مجموعه دیار  را به سایر دوستان و آشنایان پیشنهاد خواهم کرد  
                  </p>
                </div>
                <div className="w-1/12">
                  <img className="object-cover w-full" src="../../images/opinion.png" />
                </div>
              </div>


              <div className="flex items-center gap-3">
                <div className="w-11/12" style={{background : "rgba(228, 228, 228, 0.60)"}}>
                  <p className="p-4 text-black text-xs leading-5">
                    من تجربه بسیار خوبی را در همه بخش های مجموعه دیار از جمله مشاوره قبل از بستن قرارداد، مسئول ویزا، مسئول استادی پلن، واحد مالی و ... کسب کردم و به تمام سوالات من به بهترین حالت ممکن پاسخ داده شد و خوشبختانه در مدت زمان کمتر از یکماه بعد از سابمیت مدارک، ویزا شدم. قطعاً مجموعه دیار  را به سایر دوستان و آشنایان پیشنهاد خواهم کرد  
                  </p>
                </div>
                <div className="w-1/12">
                  <img className="object-cover w-full" src="../../images/opinion.png" />
                </div>
              </div>



            </div>
          </div>
            </div>
        </>
    );
};

export default Program;
