import React from "react";
import styles from "./styles.module.scss";
import AboutTeamItem from "./aboutTeamItem";
import AboutSlider from "../slider/aboutSlider";

const About = () => {
    return(
        <div className={styles.about + " mt-20"}>
            <section className="container max-w-5xl w-11/12 mx-auto ">
                <div className="rounded-lg bg-[#3F3F3F] p-5">
                    <div className="flex items-center gap-8 w-full justify-end mb-8">
                        <p className="text-white text-2xl">
                            سازمان مهاجرتی دیار دفتر ایران ، تهران 
                        </p>
                        <div>
                            <img src="../../images/iran.png" alt="image" />
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="w-2/12 flex flex-col gap-3">
                            <div className="w-full overflow-hidden">
                                <img className="object-cover w-full" src="../../images/aboutgalleryitem.png" alt="image" />
                            </div>
                            <div className="w-full overflow-hidden">
                                <img className="object-cover w-full" src="../../images/aboutgalleryitem.png" alt="image" />
                            </div>
                            <div className="w-full overflow-hidden">
                                <img className="object-cover w-full" src="../../images/aboutgalleryitem.png" alt="image" />
                            </div>
                        </div>
                        <div className="w-10/12">
                            <div>
                                <img src="../../images/samplevideo.png" alt="image" />
                            </div>
                            <p className="text-white text-xs leading-5 mt-6">
                                یکی از راه‌های مهاجرت به کانادا اقدام از طریق ویزای ICT کانادا است. ICT مخفف Intra-Company Transfer به معنای انتقال درون شرکتی است. این روش مهاجرتی یکی از زیرگروه‌های برنامه‌ جابجایی بین‌المللی IMP کانادا است.
                                طبق برنامه انتقال درون شرکتی کانادا، کسب‌ و کارهای بین‌المللی که دارای یک شرکت مادر، شعب، شرکت‌های فرعی یا وابسته در کانادا هستند، می‌توانند کارکنان کلیدی خود در خارج از کانادا را از طریق ویزای ICT کانادا یا همان انتقال بین شرکتی به کانادا منتقل کنند.
                                اگر در شرکتی بین‌المللی مشغول به کار هستید و شغلی کلیدی دارید، ویزای انتقال درون‌ شرکتی کانادا می‌تواند مسیر مناسبی برای مهاجرت شما به کانادا باشد.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="px-5 py-3 font-bold text-sm border-2 border-[#EF1B47] rounded-lg">
                        فرم ارزیابی  هوشمند  
                    </button>
                </div>
            </section>
            <div className="mt-20 py-20">
                <p className="font-bold text-2xl text-center mb-10">
                    همکاران ما 
                </p>
                <AboutSlider />
            </div>
        </div>
    )
}

export default About;