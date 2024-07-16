import { useEffect, useState } from "react";
import MusicPlayer from "../podcast/musicPlayer";
import SampleItem from "./sampleItem";
import styles from "./styles.module.scss";
import { getSampleById } from "../../api/samples";
import { useRouter } from "next/router";

const SingleSample = () => {

    const route = useRouter()
    const [data , setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getSampleById(route.query.slug);
            setData(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [route.query.slug]);

    console.log(data)



    return(
        <div>
            <div className="w-full">
                <img className="object-cover w-full" src={data?.banner} alt="image" />
            </div>
            <>
                <div className="container max-w-5xl w-11/12 mx-auto mt-20">
                    <p className="mb-5 font-bold text-xl">
                        {data?.title}
                    </p>
                    <p className="mb-5 text-lg">
                        {data?.description} 
                    </p>
                    <div>
                        <div>
                            <img src="../../images/samplevideo.png" alt="image" />
                        </div>
                        <div className="flex items-center gap-4 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path d="M31.8413 3.74609C27.7036 3.74609 24.3493 7.10041 24.3493 11.2382C24.3493 12.0062 24.4648 12.7472 24.6795 13.4448L17.0813 17.7867C15.7082 16.0779 13.6009 14.9842 11.2382 14.9842C7.10041 14.9842 3.74609 18.3385 3.74609 22.4763C3.74609 26.614 7.10041 29.9683 11.2382 29.9683C13.601 29.9683 15.7084 28.8745 17.0816 27.1655L24.6797 31.5073C24.4649 32.205 24.3493 32.9462 24.3493 33.7143C24.3493 37.8521 27.7036 41.2064 31.8413 41.2064C35.9791 41.2064 39.3334 37.8521 39.3334 33.7143C39.3334 29.5766 35.9791 26.2223 31.8413 26.2223C29.4786 26.2223 27.3713 27.316 25.9981 29.0248L18.3999 24.683C18.6146 23.9854 18.7302 23.2443 18.7302 22.4763C18.7302 21.7081 18.6146 20.9669 18.3998 20.2691L25.9979 15.9274C27.371 17.6364 29.4784 18.7302 31.8413 18.7302C35.9791 18.7302 39.3334 15.3759 39.3334 11.2382C39.3334 7.10041 35.9791 3.74609 31.8413 3.74609Z" fill="black"/>
                            </svg>   
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path d="M16.4354 28.565V35.5889C16.4354 37.9163 18.3222 39.8031 20.6496 39.8031H35.6338C37.9613 39.8031 39.8481 37.9163 39.8481 35.5889V20.6047C39.8481 18.2772 37.9613 16.3904 35.6338 16.3904H28.61M24.3957 28.565H9.41155C7.08407 28.565 5.19727 26.6782 5.19727 24.3508V9.36663C5.19727 7.03914 7.08407 5.15234 9.41155 5.15234H24.3957C26.7232 5.15234 28.61 7.03914 28.61 9.36663V24.3508C28.61 26.6782 26.7232 28.565 24.3957 28.565Z" stroke="black" stroke-width="2.80952" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                            <p className="text-sm font-bold">
                                اشتراک گذاری 
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 w-11/12">
                        <MusicPlayer title={data?.voice_title} desc={data?.voice_subtitle} image={data?.voice_profile_img} voice={data?.voice} />
                    </div>
                </div>

                <div className="container max-w-7xl w-11/12 mx-auto flex flex-col gap-5 mt-20 mb-20">
                    <p className="text-center font-bold text-2xl">
                        نمونه های موفق  
                    </p>
                    <div className="flex gap-5 w-1/2 mx-auto">
                        <SampleItem />
                        <SampleItem />
                    </div>
                </div>




                <div className="max-w-3xl mt-20 mb-10 mx-auto">
                    <p className="text-2xl font-bold text-center mb-10">
                        دیدگاه ها :
                    </p>
                    <div className="flex flex-col gap-6">

                        <div className="flex items-center gap-3">
                            <div className="w-11/12" style={{ background: "rgba(228, 228, 228, 0.60)" }}>
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
                                <div style={{ background: "rgba(12, 12, 12, 0.60)" }}>
                                    <p className="p-4 text-white text-xs leading-5">
                                        من تجربه بسیار خوبی را در همه بخش های مجموعه دیار از جمله مشاوره قبل از بستن قرارداد، مسئول ویزا، مسئول استادی پلن، واحد مالی و ... کسب کردم و به تمام سوالات من به بهترین حالت ممکن پاسخ داده شد و خوشبختانه در مدت زمان کمتر از یکماه بعد از سابمیت مدارک، ویزا شدم. قطعاً مجموعه دیار  را به سایر دوستان و آشنایان پیشنهاد خواهم کرد
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/12">
                                <p className="text-center text-[9px] font-bold text-[#EF1B47]">
                                    سازمان مهاجرتی
                                    <br />
                                    دیار
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-11/12" style={{ background: "rgba(228, 228, 228, 0.60)" }}>
                                <p className="p-4 text-black text-xs leading-5">
                                    من تجربه بسیار خوبی را در همه بخش های مجموعه دیار از جمله مشاوره قبل از بستن قرارداد، مسئول ویزا، مسئول استادی پلن، واحد مالی و ... کسب کردم و به تمام سوالات من به بهترین حالت ممکن پاسخ داده شد و خوشبختانه در مدت زمان کمتر از یکماه بعد از سابمیت مدارک، ویزا شدم. قطعاً مجموعه دیار  را به سایر دوستان و آشنایان پیشنهاد خواهم کرد
                                </p>
                            </div>
                            <div className="w-1/12">
                                <img className="object-cover w-full" src="../../images/opinion.png" />
                            </div>
                        </div>


                        <div className="flex items-center gap-3">
                            <div className="w-11/12" style={{ background: "rgba(228, 228, 228, 0.60)" }}>
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



                <div className="container max-w-7xl w-11/12 mx-auto flex items-center">
                    <div className="flex flex-col gap-2 items-center justify-center mt-14">
                        <p className="font-bold text-2xl tex-center">
                            مارا دنبال کنید
                        </p>
                        <div className="flex gap-2">
                            <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                                <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </div>
                            <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </div>
                            <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </div>
                            <div className="bg-[#5C5C5C] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
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
                                />
                                <div className="cursor-pointer absolute left-0 top-0 border-r border-r-[#fff] px-1 py-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                        <path d="M3.077 8.27989C3.06833 8.49118 3.06834 8.72723 3.06836 8.97849V23.9118C3.06834 24.2505 3.06832 24.5616 3.08956 24.8216C3.11247 25.102 3.16491 25.4087 3.31927 25.7116C3.53996 26.1448 3.89212 26.4969 4.32527 26.7176C4.62822 26.872 4.93494 26.9244 5.21529 26.9473C5.47533 26.9686 5.78639 26.9686 6.12509 26.9685H26.32C26.6587 26.9686 26.9697 26.9686 27.2298 26.9473C27.5101 26.9244 27.8168 26.872 28.1198 26.7176C28.5529 26.4969 28.9051 26.1448 29.1258 25.7116C29.2802 25.4087 29.3326 25.102 29.3555 24.8216C29.3767 24.5616 29.3767 24.2505 29.3767 23.9118V8.9786C29.3767 8.7273 29.3767 8.49121 29.3681 8.27989L17.6802 17.8427C16.8323 18.5365 15.6128 18.5365 14.7648 17.8427L3.077 8.27989Z" fill="white" />
                                        <path d="M28.5152 6.42828C28.3931 6.33035 28.2608 6.24461 28.1198 6.17278C27.8168 6.01842 27.5101 5.96599 27.2298 5.94308C26.9698 5.92184 26.6587 5.92186 26.3201 5.92188H6.12511C5.78646 5.92186 5.4753 5.92184 5.21529 5.94308C4.93494 5.96599 4.62822 6.01842 4.32527 6.17278C4.18431 6.24461 4.05192 6.33035 3.92985 6.42828L16.0143 16.3155C16.1354 16.4147 16.3096 16.4147 16.4308 16.3155L28.5152 6.42828Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </div>
    )
}

export default SingleSample;