import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SubProgramItem from "./subProgramItem";
import { getAllProgramSubCategories, showProgramCategory } from "../../api/programs";
import RedSubProgramItem from "./redSubProgramItem";
import { domain } from "../../api/domain";
import Link from "next/link";
import { useRouter } from "next/router";

const ProgramSubCategory = () => {


    const router = useRouter()
    const [data , setData] = useState(null);
    const [subCategories , setSubCategories] = useState(null);




    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await showProgramCategory(router.query.slug);
            setData(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [router.query.slug]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProgramSubCategories(router.query.slug);
            setSubCategories(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [router.query.slug]);


    return(
        <div className={styles.proSubCat + " max-md:mt-20"}>
            <div className={styles.header}>
                <div className={styles.banner + " relative w-full overflow-hidden max-h-[300px]"}>
                    <img className="object-cover w-full grayscale-[50%] blur-[4px] max-h-[300px]" src={domain + data?.banner.substring(1)} alt="banner" />
                    <p className="text-white font-bold absolute text-3xl text-center max-md:text-2xl">
                        {data?.category}
                    </p>
                </div>
            </div>
            <div className={styles.proSubCatWrapper + " mt-10 flex flex-col gap-10"}>
                <div className={styles.content + " p-5 rounded-xl"}>
                  <div className="breadCrump flex items-center mb-4" style={{direction : "rtl"}}>
                      <Link href={"/"} className="text-[#EF1B47]">
                        خانه
                      </Link>
                      <p>
                        /
                      </p>
                      <p>
                        {data?.category}
                      </p>
                  </div>
                    {/* <div className={styles.desc + " max-md:text-sm"} dangerouslySetInnerHTML={{ __html: data?.description}}></div> */}
                    <div className={styles.subItems + " flex flex-col gap-10"}>
                      {subCategories?.map((item) => (
                        <Link href={"/program/" + router.query.slug + "/" + item?.slug} className={styles.item + " flex flex-col gap-3"}>
                          <div className={styles.top + " flex gap-4 w-full flex-row-reverse items-center"}>
                            <div className={styles.image + " w-1/2 overflow-hidden"}>
                              <img className="object-cover w-full rounded-lg" src={domain + item?.media.substring(1)} />
                            </div>
                            <div className={styles.desc + " w-1/2 flex flex-col gap-3"}>
                              <p className={styles.title}>
                                {item?.subcategory}
                              </p>
                              <p className={styles.description}>
                                <div dangerouslySetInnerHTML={{ __html: item?.title}}></div>
                              </p>
                              <div className={styles.buttons + " flex gap-3 items-center flex-row-reverse"}>
                                <div className={styles.button + " flex flex-row-reverse items-center gap-1"}>
                                  <div className="flex items-center justify-center w-8 h-8 bg-[#EF1B47] rounded-full">
                                    <svg className="w-2/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8h39.1c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5h47.1c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8h39.1c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8H279.6zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5H200.5c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8H129.3c5.3-31.4 25.8-57.6 53.7-70.8zM352 192A128 128 0 1 0 96 192a128 128 0 1 0 256 0zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"/></svg>
                                  </div>
                                  <p>
                                    پرونده موفق
                                  </p>
                                </div>
                                <div className={styles.button + " flex flex-row-reverse items-center gap-1"}>
                                  <div className="flex items-center justify-center w-8 h-8 bg-[#EF1B47] rounded-full">
                                    <svg className="w-2/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>                                
                                  </div>
                                  <p>
                                    شانس موفقیت
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className={styles.bottom}>
                            <div className={styles.action}>
                              
                            </div>
                          </div> */}
                        </Link>
                      ))}
                    </div>
                </div>
                {/* <div className={styles.subList + " grid grid-cols-2 gap-5 max-md:grid-cols-1"}>
                  {subCategories?.map((item, index) => {
                    if (index < 4) {
                        return (
                          <RedSubProgramItem
                              categorySlug={params.slug}
                              category={item?.category}
                              subCategory={item?.subcategory}
                              slug={item?.slug}
                              desc={item?.title}
                          />
                        );
                    } else {
                        return (
                          <SubProgramItem
                              categorySlug={params.slug}
                              category={item?.category}
                              subCategory={item?.subcategory}
                              slug={item?.slug}
                              desc={item?.title}
                          />
                        );
                    }
                })}
                </div> */}
            </div>
        </div>
    )
}

export default ProgramSubCategory;