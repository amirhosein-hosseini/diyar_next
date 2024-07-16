import { useEffect, useState } from "react";
import SampleItem from "../sample/sampleItem";
import JobItem from "./jobItem";
import styles from "./styles.module.scss";
import { getAllCarreers } from "../../api/carreer";
import { getAllSamples } from "../../api/samples";

const Job = () => {


    const [carreers , setCarrers] = useState(null);
    const [samples , setSamples] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllCarreers();
            setCarrers(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


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




    return(
        <>
            <div className="w-full overflow-hidden">
                <img className="object-cover w-full" src="../../images/jobhero.png" alt="image" />
            </div>


            <div className="container max-w-5xl w-11/12 mx-auto mt-20">
                {/* <div>
                    <div className="w-full relative bg-[#EDEDED] rounded-lg">
                        <input className="w-full bg-[#EDEDED] h-[50px] rounded-lg text-right pr-10" type="text" placeholder="جستجو موقعیت شغلی در دیار " />
                        <svg className="absolute right-2 top-[15px]" xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                            <path d="M24.084 9.0013H20.584M24.084 2.58464H19.4173M24.084 15.418H19.4173M3.95899 14.543L0.750652 17.7513M1.91732 9.0013C1.91732 13.1895 5.31249 16.5846 9.50065 16.5846C13.6888 16.5846 17.084 13.1895 17.084 9.0013C17.084 4.81314 13.6888 1.41797 9.50065 1.41797C5.31249 1.41797 1.91732 4.81314 1.91732 9.0013Z" stroke="#7E7E7E" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex gap-1 mt-4" style={{direction: "rtl"}}>
                        <div className="border border-black rounded-lg p-1">
                            <p className="text-xs">
                                گرافیک ، دیزاین    
                            </p>
                        </div>
                        <div className="border bg-[#D9D9D9] border-black rounded-lg p-1">
                            <p className="text-xs">
                                گرافیک ، دیزاین    
                            </p>
                        </div>
                        <div className="border border-black rounded-lg p-1">
                            <p className="text-xs">
                                گرافیک ، دیزاین    
                            </p>
                        </div>
                        <div className="border border-black rounded-lg p-1">
                            <p className="text-xs">
                                گرافیک ، دیزاین    
                            </p>
                        </div>
                    </div>
                </div> */}


                <div className="grid grid-cols-2 gap-5 mt-20" style={{direction: "rtl"}}>
                    {carreers?.map((item) => (
                        <JobItem body={item?.body} country={item?.country} id={item?.id} salary={item?.salary} tag={item?.tag} title={item?.title} type={item?.type} />
                    ))}
                </div>
            </div>


            <div className="w-full overflow-hidden mt-20">
                <img className="object-cover w-full" src="../../images/jobsecbanner.png" alt="image" />
            </div>


            <div className="container w-11/12 max-w-5xl mx-auto mt-20">
                <div className="mt-10 flex items-center gap-4" style={{direction: "rtl"}}>
                    {samples?.map((item) => (
                        <SampleItem title={item?.title} desc={item?.description} image={item?.banner} slug={item?.id} />
                    ))}
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
        </>
    )
}

export default Job;