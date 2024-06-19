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
                    const data = await showProgram(router.query.secslug);
                    setProgramData(data?.data);
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
            <Head>
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
            </Head>
            <div className={styles.program + " max-md:mt-20 flex flex-col gap-10"}>
                <div className={styles.header}>
                    <div className={styles.banner + " relative w-full overflow-hidden max-h-[300px]"}>
                        <img className="object-cover w-full grayscale-[50%] blur-[4px] max-h-[300px]" src={domain + programData?.banner.substring(1)} alt="banner" />
                        <p className="text-white font-bold absolute text-3xl text-center max-md:text-2xl">
                            {programData?.subcategory}
                        </p>
                    </div>
                </div>
                <div className={styles.descwrapper + " flex gap-3 items-start flex-row-reverse"}>
                    <div className={styles.right + " w-4/5 p-5 rounded-xl"}>
                        <div className="breadCrump flex items-center mb-4" style={{ direction: "rtl" }}>
                            <Link href={"/"} className="text-[#EF1B47]">
                                خانه
                            </Link>
                            <p>/</p>
                            <Link href={"/program/" + programData?.category} className="text-[#EF1B47]">
                                {programData?.category}
                            </Link>
                            <p>/</p>
                            <p>{programData?.subcategory}</p>
                        </div>
                        <div className="max-md:text-sm" dangerouslySetInnerHTML={{ __html: programData?.content }}></div>
                        <div className={styles.action + " mt-10 p-4 rounded-lg bg-[#E0E0E0]"}>
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
                        </div>
                    </div>
                    <div className={styles.left + " w-1/5 p-5 rounded-xl flex flex-col gap-3"}>
                        <p className="text-lg font-bold">مطالب مرتبط</p>
                        {subCategories?.map((item) => (
                            <p key={item.slug} className="text-[#EF1B47] text-right cursor-pointer" style={{ direction: "rtl" }} onClick={() => handleGo(item?.category, item?.slug)}>
                                {item?.subcategory}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.faq + " container w-11/12 mx-auto max-w-5xl"}>
                    <p className="text-xl max-md:text-lg my-4 text-center font-bold">سوالات متداول</p>
                    <div className={styles.items + " flex flex-col gap-3"}>
                        {questions.map((item, index) => (
                            <div key={index} className={styles.item + " flex flex-col gap-3 bg-[#bdbdbd] rounded-lg p-4"}>
                                <div className={styles.question + " cursor-pointer flex items-center justify-between"} onClick={() => toggleQuestion(index)}>
                                    {expandedQuestion === index ?
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
                                        :
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                    }
                                    <p>{item.question}</p>
                                </div>
                                {expandedQuestion === index && (
                                    <div className={styles.answer}>
                                        <p className="text-white">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Program;
