import React, { useState , useEffect } from "react";
import styles from "./styles.module.scss";
import { getAllProgramItemsCategory, getAllProgramSubCategories } from "../../api/programs";
import Link from "next/link";

const LargeHeader = () => {

    const [showMegaMenu , setShowMegaMenu] = useState(false);
    const [programsList , setProgramsList] = useState(null);
    const [activeProgram , setActiveProgram] = useState(null);
    const [subCategories , setSubCategories] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProgramItemsCategory();
            setProgramsList(data?.data);
            setActiveProgram(data?.data[0])
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProgramSubCategories(activeProgram?.slug);
            setSubCategories(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [activeProgram]);




    return(
        <div className={styles.largeheader}>
            <div className={styles.largeheaderwrapper}>
                <div className={styles.largeheader__links}>
                    <div className={styles.logo}>
                        <Link href={"/"}>
                            <img src="../../images/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <ul style={{listStyle : "none !important"}}>
                        <li>
                            <Link href={'/'}>
                                خانه
                            </Link>
                        </li>
                        <li>
                            <p className="cursor-pointer" onClick={() => setShowMegaMenu(!showMegaMenu)}>
                                برنامه های مهاجرتی  
                            </p>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                درباره ما  
                            </Link>
                        </li>
                        <li>
                            <Link href={'blog'}>
                                مجله کانادا  
                            </Link>
                        </li>
                        <li>
                            <Link href={'/podcast'}>
                                پادکست   
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.largeheader__buttons}>
                    <Link href={"/reserve"}>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
                                <path className="hover:fill-[#EF1B47]" fill-rule="evenodd" clip-rule="evenodd" d="M10.5833 0.833252H16.4167C18.0275 0.833252 19.3333 2.10178 19.3333 3.66659C19.3333 5.23139 18.0275 6.49992 16.4167 6.49992H10.5833C8.9725 6.49992 7.66667 5.23139 7.66667 3.66659C7.66667 2.10178 8.9725 0.833252 10.5833 0.833252ZM5.48985 3.70947C5.48277 3.81245 5.47917 3.91636 5.47917 4.02108C5.47917 6.56389 7.60115 8.62525 10.2188 8.62525H16.7812C19.3989 8.62525 21.5208 6.56389 21.5208 4.02108C21.5208 3.91636 21.5172 3.81246 21.5102 3.70948C24.3928 4.05343 26.625 6.44028 26.625 9.33358V23.5002C26.625 26.6299 24.0133 29.1669 20.7917 29.1669H6.20833C2.98667 29.1669 0.375 26.6299 0.375 23.5002V9.33358C0.375 6.44028 2.60716 4.05343 5.48985 3.70947ZM6.57292 12.1669C6.57292 11.5801 7.0626 11.1044 7.66667 11.1044H19.3333C19.9374 11.1044 20.4271 11.5801 20.4271 12.1669C20.4271 12.7537 19.9374 13.2294 19.3333 13.2294H7.66667C7.0626 13.2294 6.57292 12.7537 6.57292 12.1669ZM7.66667 16.7711C7.0626 16.7711 6.57292 17.2468 6.57292 17.8336C6.57292 18.4204 7.0626 18.8961 7.66667 18.8961H19.3333C19.9374 18.8961 20.4271 18.4204 20.4271 17.8336C20.4271 17.2468 19.9374 16.7711 19.3333 16.7711H7.66667ZM6.57292 23.5003C6.57292 22.9135 7.0626 22.4378 7.66667 22.4378H13.5C14.1041 22.4378 14.5938 22.9135 14.5938 23.5003C14.5938 24.0871 14.1041 24.5628 13.5 24.5628H7.66667C7.0626 24.5628 6.57292 24.0871 6.57292 23.5003Z" fill="black"/>
                            </svg>
                            <p>
                                مشاوره
                            </p>
                        </div>
                    </Link>
                    <Link href={"/smart-form"}>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49085 7.70826C8.9247 6.24211 10.6374 5.07762 12.528 4.28333C14.4187 3.48905 16.4492 3.08102 18.4999 3.08326C25.405 3.08326 31.2449 7.62039 33.2105 13.8749H23.1249C22.716 13.8749 22.3239 14.0374 22.0348 14.3265C21.7457 14.6156 21.5832 15.0077 21.5832 15.4166C21.5832 15.8255 21.7457 16.2176 22.0348 16.5067C22.3239 16.7958 22.716 16.9583 23.1249 16.9583H33.8395C33.8904 17.467 33.9166 17.9804 33.9166 18.4999C33.9166 27.0145 27.0145 33.9166 18.4999 33.9166C16.4491 33.9189 14.4187 33.5109 12.528 32.7166C10.6373 31.9223 8.92465 30.7578 7.49085 29.2916H16.9582C17.3671 29.2916 17.7592 29.1292 18.0484 28.84C18.3375 28.5509 18.4999 28.1588 18.4999 27.7499C18.4999 27.341 18.3375 26.9489 18.0484 26.6598C17.7592 26.3707 17.3671 26.2083 16.9582 26.2083H5.14598C4.58193 25.2334 4.12697 24.1994 3.78931 23.1249H20.0416C20.4504 23.1249 20.8426 22.9625 21.1317 22.6734C21.4208 22.3843 21.5832 21.9921 21.5832 21.5833C21.5832 21.1744 21.4208 20.7823 21.1317 20.4931C20.8426 20.204 20.4504 20.0416 20.0416 20.0416H3.16031C2.8323 16.8259 3.52775 13.5888 5.14752 10.7916H18.4999C18.9088 10.7916 19.3009 10.6292 19.59 10.3401C19.8791 10.0509 20.0416 9.6588 20.0416 9.24993C20.0416 8.84105 19.8791 8.44892 19.59 8.1598C19.3009 7.87069 18.9088 7.70826 18.4999 7.70826H7.49085ZM15.4166 13.8749C15.0077 13.8749 14.6156 14.0374 14.3264 14.3265C14.0373 14.6156 13.8749 15.0077 13.8749 15.4166C13.8749 15.8255 14.0373 16.2176 14.3264 16.5067C14.6156 16.7958 15.0077 16.9583 15.4166 16.9583H18.4999C18.9088 16.9583 19.3009 16.7958 19.59 16.5067C19.8791 16.2176 20.0416 15.8255 20.0416 15.4166C20.0416 15.0077 19.8791 14.6156 19.59 14.3265C19.3009 14.0374 18.9088 13.8749 18.4999 13.8749H15.4166ZM11.8831 16.5081C11.594 16.7971 11.2019 16.9595 10.7931 16.9595C10.3843 16.9595 9.99225 16.7971 9.70314 16.5081C9.41386 16.219 9.24973 15.8269 9.24958 15.4179C9.24951 15.2154 9.28932 15.0149 9.36675 14.8278C9.44417 14.6407 9.5577 14.4706 9.70083 14.3274C9.84397 14.1842 10.0139 14.0705 10.201 13.993C10.388 13.9154 10.5885 13.8755 10.791 13.8754C11.2 13.8752 11.5922 14.0376 11.8815 14.3266C12.0249 14.4698 12.1386 14.6398 12.2162 14.827C12.2937 15.0142 12.3337 15.2148 12.3337 15.4174C12.3337 15.62 12.2937 15.8206 12.2162 16.0077C12.1386 16.1949 12.0249 16.3649 11.8815 16.5081H11.8831ZM23.5781 22.6748C23.7204 22.822 23.8905 22.9395 24.0786 23.0202C24.2667 23.101 24.469 23.1436 24.6737 23.1454C24.8784 23.1471 25.0814 23.1081 25.2708 23.0306C25.4603 22.9531 25.6324 22.8386 25.7772 22.6939C25.9219 22.5491 26.0364 22.377 26.1139 22.1875C26.1914 21.9981 26.2304 21.795 26.2287 21.5903C26.2269 21.3856 26.1844 21.1833 26.1036 20.9953C26.0228 20.8072 25.9053 20.6371 25.7581 20.4948C25.469 20.2056 25.0768 20.0414 24.6679 20.0413C24.2589 20.0411 23.8667 20.2035 23.5774 20.4925C23.2881 20.7816 23.1255 21.1738 23.1254 21.5827C23.1252 21.9917 23.2875 22.3839 23.5766 22.6732L23.5781 22.6748Z" fill="black"/>
                            </svg>
                            <p>
                                فرم  هوشمند 
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            {showMegaMenu === true ?
            <div className={styles.megamenu + " container w-11/12 mx-auto bg-white"} onMouseLeave={() => setShowMegaMenu(false)}>
                <div className={styles.megawrapper + " flex items-start gap-7"}>    
                    <div className="titles border-l border-l-[#EF1B47] w-3/12">
                        {programsList?.map((item) => (
                            <div className="item flex items-center justify-between cursor-pointer py-3 px-3" style={activeProgram === item ? {background : "rgba(239, 27, 71, 0.18)"} : {}} onClick={() => setActiveProgram(item)}>
                                <p>
                                    {item?.category}
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0006 2.45833C11.208 2.6658 11.208 3.00217 11.0006 3.20963L5.70955 8.50066L11.0006 13.7917C11.208 13.9991 11.208 14.3355 11.0006 14.543C10.7931 14.7504 10.4567 14.7504 10.2493 14.543L4.5826 8.87632C4.48297 8.77669 4.427 8.64156 4.427 8.50066C4.427 8.35977 4.48297 8.22464 4.5826 8.12501L10.2493 2.45833C10.4567 2.25087 10.7931 2.25087 11.0006 2.45833Z" fill="black"/>
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div className="programs grid grid-cols-4 gap-5 w-9/12 py-3">
                        {subCategories?.map((item) => (
                            <Link href={"/program/" + item?.category + "/" + item?.slug} className="text-sm" onClick={() => setShowMegaMenu(false)}>
                                {item?.subcategory}
                            </Link>
                        ))}
                    </div>
                </div>
            </div> : ""
            }

        </div>
    )
}

export default LargeHeader;