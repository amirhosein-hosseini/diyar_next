import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getCategoryById } from "../../api/category";
import { useRouter } from "next/router";

const ProgramSubCategory = () => {


    const route = useRouter();
    const [data , setData] = useState(null);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getCategoryById(route.query.slug);
          setData(data?.data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
  }, [route.query.slug]);

  console.log(data)

    return(
      <>
        <div className="container max-w-7xl w-11/12 mx-auto mt-10">


          <div className="flex items-center gap-3">
            <div className="w-1/2">
              <p className="text-xl font-bold mb-1">
                {data?.title}
              </p>
              <p className="text-sm leading-6">
                {data?.description}
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-3">
                  <button className="text-xs font-bold text-white bg-[#EF1B47] px-5 py-3 rounded-lg">
                    رزرو وقت مشاوره
                  </button>
                  <button className="text-xs font-bold border border-[#EF1B47] text-black px-5 py-3 rounded-lg">
                    فرم ارزیابی  هوشمند
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="39.9032" cy="39.9032" r="39.6076" stroke="url(#paint0_linear_2184_6090)" stroke-width="0.591158" />
                      <defs>
                        <linearGradient id="paint0_linear_2184_6090" x1="40.1987" y1="23.0552" x2="39.9032" y2="58.5246" gradientUnits="userSpaceOnUse">
                          <stop />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute" style={{top: "50%" , left: "50%" , transform: "translate(-50%,-50%)"}}>
                      <p className="text-[10px] text-center font-bold">
                        ۸۰٪
                      </p>
                      <p className="text-[10px] text-center font-bold" style={{textWrap: "nowrap"}}>
                        شانس موفقیت
                      </p>
                      <svg className="text-center mx-auto" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M11.0961 2.14025C10.963 1.70754 10.4128 1.57896 10.1016 1.90785L8.6918 3.39826C8.30241 3.80991 8.08543 4.35503 8.08543 4.92167V6.42631L6.88518 7.62655C6.71204 7.7997 6.71204 8.08042 6.88518 8.25357C7.05833 8.42672 7.33905 8.42672 7.5122 8.25357L8.71244 7.05332H10.2171C10.7837 7.05332 11.3288 6.83634 11.7405 6.44695L13.2309 5.0371C13.5598 4.72599 13.4312 4.17577 12.9985 4.04263L11.5437 3.59501L11.0961 2.14025Z" fill="black" />
                        <path d="M2.17385 7.94021C2.17385 5.16506 4.42355 2.91536 7.19869 2.91536C7.28999 2.91536 7.38067 2.91779 7.47069 2.92259C7.71521 2.93561 7.92399 2.74795 7.93701 2.50343C7.95003 2.25891 7.76237 2.05013 7.51785 2.03711C7.41214 2.03148 7.30572 2.02863 7.19869 2.02863C3.93381 2.02863 1.28711 4.67533 1.28711 7.94021C1.28711 11.2051 3.93381 13.8518 7.19869 13.8518C10.4636 13.8518 13.1103 11.2051 13.1103 7.94021C13.1103 7.83317 13.1074 7.72676 13.1018 7.62105C13.0888 7.37653 12.88 7.18886 12.6355 7.20189C12.3909 7.21491 12.2033 7.42369 12.2163 7.66821C12.2211 7.75823 12.2235 7.84891 12.2235 7.94021C12.2235 10.7154 9.97383 12.9651 7.19869 12.9651C4.42355 12.9651 2.17385 10.7154 2.17385 7.94021Z" fill="black" />
                        <path d="M6.69238 5.31345C6.93272 5.26659 7.08957 5.03377 7.04271 4.79343C6.99585 4.55309 6.76302 4.39624 6.52268 4.4431C4.88665 4.76209 3.65174 6.20233 3.65174 7.93197C3.65174 9.89514 5.24321 11.4866 7.20638 11.4866C8.936 11.4866 10.3762 10.2517 10.6952 8.61573C10.7421 8.37539 10.5853 8.14256 10.3449 8.0957C10.1046 8.04883 9.87175 8.20568 9.82489 8.44602C9.58553 9.67351 8.50365 10.5999 7.20638 10.5999C5.73294 10.5999 4.53848 9.40541 4.53848 7.93197C4.53848 6.63468 5.46486 5.55279 6.69238 5.31345Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="39.9032" cy="39.9032" r="39.6076" stroke="url(#paint0_linear_2184_6090)" stroke-width="0.591158" />
                      <defs>
                        <linearGradient id="paint0_linear_2184_6090" x1="40.1987" y1="23.0552" x2="39.9032" y2="58.5246" gradientUnits="userSpaceOnUse">
                          <stop />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute" style={{top: "50%" , left: "50%" , transform: "translate(-50%,-50%)"}}>
                      <p className="text-[10px] text-center font-bold">
                        ۸۰٪
                      </p>
                      <p className="text-[10px] text-center font-bold" style={{textWrap: "nowrap"}}>
                        پرونده موفق 
                      </p>
                      <svg className="text-center mx-auto" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3849 2.61719C11.6093 2.61719 12.6018 3.6097 12.6018 4.83403V11.4846C12.6018 12.464 11.8078 13.258 10.8283 13.258H9.35041C9.18717 13.258 9.05483 13.1257 9.05483 12.9625C9.05483 12.7992 8.9225 12.6669 8.75926 12.6669H5.80347C5.64022 12.6669 5.50789 12.7992 5.50789 12.9625C5.50789 13.1257 5.37555 13.258 5.21231 13.258H3.73441C2.75495 13.258 1.96094 12.464 1.96094 11.4846V4.83403C1.96094 3.6097 2.95345 2.61719 4.17778 2.61719H10.3849ZM9.50163 6.52951C9.64141 6.32846 9.59174 6.05217 9.39069 5.91239C9.18964 5.77261 8.91334 5.82228 8.77356 6.02333L6.74767 8.93727L5.80097 8.10324C5.61724 7.94137 5.33707 7.9591 5.17521 8.14284C5.01334 8.32657 5.03107 8.60673 5.2148 8.7686L6.53469 9.93141C6.62956 10.015 6.75558 10.0541 6.88109 10.0389C7.0066 10.0237 7.11965 9.95562 7.19181 9.85182L9.50163 6.52951Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 overflow-hidden max-h-[400px]">
              <img className="object-cover w-full rounded-lg max-h-[400px]" src={data?.banner} alt="image" />
            </div>
          </div>


          <div className="w-8/12 bg-[#5C5C5C] ml-auto mt-20 flex items-center gap-3 p-5 rounded-bl-[60px]">
            <div>
              <p className="text-white text-xs leading-5">
                یکی از راه‌های مهاجرت به کانادا اقدام از طریق ویزای ICT کانادا است. ICT مخفف Intra-Company Transfer به معنای انتقال درون شرکتی است. این روش مهاجرتی یکی از زیرگروه‌های برنامه‌ جابجایی بین‌المللی IMP کانادا است.
              </p>
            </div>
            <div className="px-3 border-r-2 border-r-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                  <path d="M21.3631 10.055C13.1142 14.1544 7.44531 22.6667 7.44531 32.503C7.44531 46.3389 18.6615 57.5551 32.4974 57.5551C46.3333 57.5551 57.5495 46.3389 57.5495 32.503C57.5495 19.3475 47.4092 8.56031 34.5184 7.53125M18.5796 26.1161C17.686 28.0601 17.1878 30.2234 17.1878 32.503C17.1878 40.9583 24.0421 47.8126 32.4974 47.8126C40.9527 47.8126 47.807 40.9583 47.807 32.503C47.807 24.7328 42.0184 18.3147 34.5184 17.3256M26.9303 32.503C26.9303 35.5776 29.4228 38.0701 32.4974 38.0701C35.572 38.0701 38.0645 35.5776 38.0645 32.503C38.0645 30.1413 36.5939 28.123 34.5184 27.3141" stroke="#EF1B47" stroke-width="4.375" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          </div>


          <div className="flex items-center justify-center mt-20 w-11/12 mx-auto rounded-tr-xl rounded-tl-xl pb-[30px]" style={{background: "rgba(217, 217, 217, 0.50)"}}>
            <div className="flex items-center gap-2 mt-[-30px] w-full mx-auto px-10 justify-center">
              {data?.plans?.map((item) => (
                <div className="p-6 w-1/5 border border-black rounded-lg flex flex-col gap-2 items-center justify-center relative bg-white">
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

          <div className="mt-20 w-11/12 mx-auto">
            <div className="text-sm leading-6 text-right" style={{fontFamily: "Yekan Bakh"}}  dangerouslySetInnerHTML={{ __html: data?.body}}></div>
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
    )
}

export default ProgramSubCategory;