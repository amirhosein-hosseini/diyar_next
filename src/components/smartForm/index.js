import React, { useState } from "react";
import styles from "./styles.module.scss";
import { GreenButton } from "../button";
import { Link } from "react-router-dom";
import PlanItem from "../index/planItem";

const SmartForm = () => {

    const [level , setLevel] = useState(0);



    let planitemdata = {
        "icon" : "../../images/planitemimage.png",
        "title_link" : "ویزای تحصیلی"
    }



    return(
        <div className={styles.smartForm + " max-md:mt-20"}>
            <div className={styles.smartformwrapper + " container mx-auto w-11/12"}>
                <div className={styles.smartform__bar + " bg-[#EF1B47] p-3 max-md:p-1 rounded-lg flex justify-between items-center"}>
                    {level >= 1 ? 
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات فردی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="#06E775"/>
                            </svg>
                        </div> :
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات فردی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="white"/>
                            </svg>
                        </div>
                    }
                    {level >= 2 ?
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات شغلی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="#06E775"/>
                            </svg>
                        </div> : 
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات شغلی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="white"/>
                            </svg>
                        </div>
                    }
                    {level >= 3 ? 
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات تحصیلی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="#06E775"/>
                            </svg>
                        </div> : 
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات تحصیلی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="white"/>
                            </svg>
                        </div>
                    }
                    {level >= 4 ?
                        <div className={styles.item + " flex items-center gap-2"}>
                            <p className="text-white text-sm">مشخصات درآمدی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="#06E775"/>
                            </svg>
                        </div> : 
                        <div className={styles.item + " flex items-center gap-2"}>
                            <p className="text-white text-sm">مشخصات درآمدی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="white"/>
                            </svg>
                        </div>
                    }
                    {level >= 5 ?
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات  فنی و مهارتی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="#06E775"/>
                            </svg>
                        </div> : 
                        <div className={styles.item + " flex items-center gap-1"}>
                            <p className="text-white text-sm">مشخصات  فنی و مهارتی</p>
                            <svg className="w-11 h-11 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M34.9997 5.83301C18.9288 5.83301 5.83301 18.9288 5.83301 34.9997C5.83301 51.0705 18.9288 64.1663 34.9997 64.1663C51.0705 64.1663 64.1663 51.0705 64.1663 34.9997C64.1663 18.9288 51.0705 5.83301 34.9997 5.83301ZM43.1372 36.5455L32.8413 46.8413C32.4038 47.2788 31.8497 47.483 31.2955 47.483C30.7413 47.483 30.1872 47.2788 29.7497 46.8413C28.9038 45.9955 28.9038 44.5955 29.7497 43.7497L38.4997 34.9997L29.7497 26.2497C28.9038 25.4038 28.9038 24.0038 29.7497 23.158C30.5955 22.3122 31.9955 22.3122 32.8413 23.158L43.1372 33.4538C44.0122 34.2997 44.0122 35.6997 43.1372 36.5455Z" fill="white"/>
                            </svg>
                        </div>
                    }
                </div>
                {level == 0 ? 
                    <div className={styles.smartform__content + " mt-10 items-end flex flex-col gap-5 text-right"}>
                        <div className={styles.title + " font-bold"}>
                            <p>
                                خوش آمدید به ارزیابی هوشمند سازمان مهاجرتی دیار 
                            </p>
                        </div>
                        <div className={styles.desc + " w-1/2 max-md:w-full"}>
                            <p>
                                با سلام و احترام لطفا به سوالات پاسخ دهید و اگر بین دو گزینه شک دارید گزینه ای که به شما نزدیک تر میباشد از لحاظ صحت آن گزینه را انتحاب کنید .
                            </p>
                        </div>
                        <div className={styles.button + " w-1/2 max-md:w-full"}>
                            <div className="w-2/3 mx-auto" onClick={() => setLevel(level + 1)}>
                                <GreenButton>شروع ارزیابی هوشمند </GreenButton>
                            </div>
                        </div>
                        <div className={styles.danger + " text-center flex items-center gap-1"}>
                            <p className="text-[#EF1B47] text-sm">
                                ارزیابی هوشمند دیار در مدت ۲ تا ۳ دقیقه  زمان میبرد . 
                            </p>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FB2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 8V12" stroke="#FB2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 16H12.01" stroke="#FB2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div> : ""            
                }
                {level >= 1 && level < 5? 
                    <div className={styles.smartform__content + " mt-10"}>
                        <form className="flex flex-col gap-8">
                            <div className={styles.questionbox}>
                                <p className="font-bold mb-4 max-md:text-sm">سن شما بین چه بازه ای میباشد ؟</p>
                                <div className={styles.questionwrapper + " flex gap-5"}>
                                    <div className={styles.item + " flex gap-2 items-center"}>
                                        <input type="radio" id="age1" name="age" value="age1" />
                                        <label className="max-md:text-xs" htmlFor="age1">۲۰ تا ۲۵</label>
                                    </div>
                                    <div className={styles.item + " flex gap-2 items-center"}>
                                        <input type="radio" id="age2" name="age" value="age2" />
                                        <label className="max-md:text-xs" htmlFor="age2">۲۵ تا ۳۵</label>
                                    </div>
                                    <div className={styles.item + " flex gap-2 items-center"}>
                                        <input type="radio" id="age3" name="age" value="age3" />
                                        <label className="max-md:text-xs" htmlFor="age3">۳۵ به بالا</label>                                        
                                    </div>
                                </div>
                            </div>
                            <div className={styles.questionbox}>
                                <p className="font-bold mb-4 max-md:text-sm">آیا تا به حال اقامتی در کشورهایی نظیر آمریکا یا کانادا داشته اید ؟</p>
                                <div className={styles.questionwrapper + " flex gap-5"}>
                                    <div className={styles.item + " flex gap-2 items-center"}>
                                        <input type="radio" id="country1" name="country" value="country1" />
                                        <label className="max-md:text-xs" htmlFor="country1">بله در کشور کانادا</label>
                                    </div>
                                    <div className={styles.item + " flex gap-2 items-center"}>
                                        <input type="radio" id="country2" name="country" value="country2" />
                                        <label className="max-md:text-xs" htmlFor="country2">بله در کشور آمریکا</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="max-w-[100px] mt-5" onClick={() => setLevel(level + 1)}>
                            <GreenButton>مرحله بعد</GreenButton>
                        </div>
                    </div> 

                    : level === 5 ?
                    <div className={styles.smartform__content + " mt-20"}>
                        <div className={styles.final + " flex items-center justify-between max-md:flex-col"}>
                            <div className={styles.desc + " bg-[#D9D9D9] p-4 rounded-lg"}>
                                <p className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 32" fill="none">
                                        <ellipse cx="18.0936" cy="9.05185" rx="1.44519" ry="1.29306" fill="#28303F"/>
                                        <path d="M16.6484 12.2459C16.2704 12.2459 15.9639 12.5523 15.9639 12.9304C15.9639 13.3085 16.2704 13.615 16.6484 13.615V12.2459ZM18.0936 12.9304H18.7782C18.7782 12.5523 18.4717 12.2459 18.0936 12.2459V12.9304ZM17.4091 21.9819C17.4091 22.3599 17.7156 22.6664 18.0936 22.6664C18.4717 22.6664 18.7782 22.3599 18.7782 21.9819H17.4091ZM8.09068 7.03321L8.4112 7.6381L8.09068 7.03321ZM8.09068 24L8.4112 23.3951H8.4112L8.09068 24ZM21.0974 27.7086L20.7769 27.1037L21.0974 27.7086ZM15.0899 27.7086L14.7693 28.3135L15.0899 27.7086ZM28.0966 24L28.4171 24.6049L28.0966 24ZM28.0966 7.03321L27.7761 7.6381L28.0966 7.03321ZM21.0974 3.3246L20.7769 3.92949L21.0974 3.3246ZM15.0899 3.3246L14.7693 2.7197L15.0899 3.3246ZM16.6484 13.615H18.0936V12.2459H16.6484V13.615ZM17.4091 12.9304V21.9819H18.7782V12.9304H17.4091ZM20.7769 3.92949L27.7761 7.6381L28.4171 6.42831L21.4179 2.7197L20.7769 3.92949ZM30.4158 11.808V19.2252H31.7849V11.808H30.4158ZM27.7761 23.3951L20.7769 27.1037L21.4179 28.3135L28.4171 24.6049L27.7761 23.3951ZM15.4104 27.1037L8.4112 23.3951L7.77017 24.6049L14.7693 28.3135L15.4104 27.1037ZM5.77148 19.2252V11.808H4.40235V19.2252H5.77148ZM8.4112 7.6381L15.4104 3.92949L14.7693 2.7197L7.77017 6.42831L8.4112 7.6381ZM5.77148 11.808C5.77148 10.1124 6.75753 8.51432 8.4112 7.6381L7.77017 6.42831C5.70636 7.52185 4.40235 9.56403 4.40235 11.808H5.77148ZM8.4112 23.3951C6.75753 22.5189 5.77148 20.9208 5.77148 19.2252H4.40235C4.40235 21.4691 5.70636 23.5113 7.77017 24.6049L8.4112 23.3951ZM20.7769 27.1037C19.1186 27.9823 17.0686 27.9823 15.4104 27.1037L14.7693 28.3135C16.8286 29.4046 19.3587 29.4046 21.4179 28.3135L20.7769 27.1037ZM30.4158 19.2252C30.4158 20.9208 29.4297 22.5189 27.7761 23.3951L28.4171 24.6049C30.4809 23.5113 31.7849 21.4691 31.7849 19.2252H30.4158ZM27.7761 7.6381C29.4297 8.51432 30.4158 10.1124 30.4158 11.808H31.7849C31.7849 9.56403 30.4809 7.52185 28.4171 6.42831L27.7761 7.6381ZM21.4179 2.7197C19.3587 1.6286 16.8286 1.6286 14.7693 2.7197L15.4104 3.92949C17.0686 3.05084 19.1186 3.05084 20.7769 3.92949L21.4179 2.7197Z" fill="#28303F"/>
                                    </svg>
                                    ممنون بابت پاسخگویی به سوالات 
                                </p>
                                <p className="mt-5">
                                    باتوجه به ارزیابی هوشمند شما میتوانید در برنامه کارآفرینی اقدام به مهاجرت کنید 
                                </p>
                            </div>
                            <div className="max-md:mt-10">
                                <Link to={"/"}>
                                    <div className={styles.planitem}>
                                        <img src={"../../images/planitemimage.png"} alt="image" />
                                        <p>
                                            {"برنامه کارآفرینی"}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div> : ""
                }
            </div>
        </div>
    )
}

export default SmartForm;