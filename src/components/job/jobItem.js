import { useState } from "react";
import JobPage from "../../pages/job";
import styles from "./styles.module.scss";
import axios from "axios";
import { domain, prefix } from "../../api/domain";
import { toast } from "react-toastify";

const JobItem = ({body , country , salary , title , tag , type , id}) => {


    // State to store files with their corresponding IDs
    const [files, setFiles] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0); // State for upload progress


    const handleFileChange = (event, inputId) => {
        const file = event.target.files[0];
        // Update the state with the new file
        setFiles((prevFiles) => ({
            ...prevFiles,
            [inputId]: file,
        }));
    };


    const handleSubmit = (id) => {
        setIsLoading(true)

        axios.post(domain + prefix + "website/" + 'submit-resume', { career_opportunity_id : id , cv_file: files[id] }, {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                const percentCompleted = Math.round((loaded * 100) / total);
                setUploadProgress(percentCompleted);
            },
        })
            .then((response) => {
                toast.success("با موفقیت ثبت شد");
                
            })
            .catch((error) => {
                toast.error("لطفا دوباره تلاش کنید");
                
            })
            .finally(() => {
                setIsLoading(false);
                setUploadProgress(0); // Reset progress
            });
      };





    return(
        <div className="bg-white relative p-4 rounded-xl" style={{boxShadow: "0px 4px 38px 8px rgba(0, 0, 0, 0.10)"}}>
            <div className="absolute left-0 top-0 bg-[#EF1B47] rounded-tr-xl w-[54px]">
                <p className="text-white font-bold text-xs p-2">
                    {tag}
                </p>
            </div>
            <p className="font-bold text-2xl mb-5">
                {title}
            </p>
            <div className="flex flex-col gap-2 mb-5">
                <div className="flex items-center justify-end gap-1">
                    <p className="font-bold">
                        {country}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.16602 7.91536C3.16602 4.41756 6.00155 1.58203 9.49935 1.58203C12.9972 1.58203 15.8327 4.41756 15.8327 7.91536C15.8327 10.0939 14.7624 12.1079 13.5782 13.6794C12.3865 15.2607 11.0255 16.4651 10.3291 17.0367C9.84299 17.4357 9.15571 17.4357 8.66959 17.0367C7.97317 16.4651 6.61215 15.2607 5.42049 13.6794C4.23631 12.1079 3.16602 10.0939 3.16602 7.91536ZM7.02539 7.91536C7.02539 6.54904 8.13302 5.44141 9.49935 5.44141C10.8657 5.44141 11.9733 6.54904 11.9733 7.91536C11.9733 9.28169 10.8657 10.3893 9.49935 10.3893C8.13302 10.3893 7.02539 9.28169 7.02539 7.91536Z" fill="black" />
                    </svg>
                </div>
                <div className="flex items-center justify-end gap-1">
                    <p>
                        {type}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74197 5.54167V4.15625C5.74197 3.17249 6.53947 2.375 7.52322 2.375H11.4816C12.4653 2.375 13.2628 3.17249 13.2628 4.15625V5.54167H15.2402C16.4426 5.54167 17.4173 6.51638 17.4173 7.71875V9.5H1.58398V7.71875C1.58398 6.51638 2.5587 5.54167 3.76107 5.54167H5.74197ZM6.92947 4.15625C6.92947 3.82833 7.1953 3.5625 7.52322 3.5625H11.4816C11.8095 3.5625 12.0753 3.82833 12.0753 4.15625V5.54167H6.92947V4.15625Z" fill="black" />
                        <path d="M1.58398 14.4479V10.6875H8.90742L8.90864 12.0734C8.90893 12.4014 9.17499 12.667 9.50291 12.6667C9.83083 12.6664 10.0964 12.4003 10.0961 12.0724L10.0949 10.6875H17.4173V14.4479C17.4173 15.6503 16.4426 16.625 15.2402 16.625H3.76107C2.5587 16.625 1.58398 15.6503 1.58398 14.4479Z" fill="black" />
                    </svg>
                </div>
                <div className="flex items-center justify-end gap-1">
                    <p>
                        {salary}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.791016 5.73958C0.791016 4.53721 1.76573 3.5625 2.9681 3.5625H16.0306C17.233 3.5625 18.2077 4.53721 18.2077 5.73958V13.2604C18.2077 14.4628 17.233 15.4375 16.0306 15.4375H2.9681C1.76573 15.4375 0.791016 14.4628 0.791016 13.2604V5.73958ZM2.9681 5.54167C2.64018 5.54167 2.37435 5.8075 2.37435 6.13542C2.37435 6.46334 2.64018 6.72917 2.9681 6.72917H3.75977C4.08769 6.72917 4.35352 6.46334 4.35352 6.13542C4.35352 5.8075 4.08769 5.54167 3.75977 5.54167H2.9681ZM14.6452 12.8646C14.6452 12.5367 14.911 12.2708 15.2389 12.2708H16.0306C16.3585 12.2708 16.6244 12.5367 16.6244 12.8646C16.6244 13.1925 16.3585 13.4583 16.0306 13.4583H15.2389C14.911 13.4583 14.6452 13.1925 14.6452 12.8646ZM7.52018 9.5C7.52018 8.40694 8.40629 7.52083 9.49935 7.52083C10.5924 7.52083 11.4785 8.40694 11.4785 9.5C11.4785 10.5931 10.5924 11.4792 9.49935 11.4792C8.40629 11.4792 7.52018 10.5931 7.52018 9.5Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className="text-xs leading-5" dangerouslySetInnerHTML={{ __html: body}}></div>
            <div className="mt-10">
                <form>
                    <input
                        type="file"
                        id={`fileInput-${id}`}
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileChange(e, id)} // Pass ID dynamically
                    />
                </form>
                <label
                    htmlFor={`fileInput-${id}`}
                    className="cursor-pointer flex items-center"
                >
                    {isLoading && (
                        <div className="flex items-center gap-2 mt-2 relative">
                            <div className="bg-black h-2 w-[60px] rounded-full overflow-hidden">
                                <div
                                    className="bg-[#06E775] h-full"
                                    style={{ width: `${uploadProgress}%` }}
                                ></div>
                            </div>
                            <span className="text-xs">{uploadProgress}%</span>
                        </div>
                    )}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M12.5007 2.08203H7.0319C5.44984 2.08203 4.16732 3.36455 4.16732 4.94661V10.2851C4.81301 10.0329 5.51567 9.89453 6.25065 9.89453C9.41478 9.89453 11.9798 12.4596 11.9798 15.6237V18.7487C11.9798 20.3904 11.2893 21.8708 10.1829 22.9154H17.9694C19.5515 22.9154 20.834 21.6328 20.834 20.0508V10.4154H15.3652C13.7832 10.4154 12.5007 9.13285 12.5007 7.55078V2.08203Z" fill="#595959" />
                        <path d="M20.3721 8.85286C20.3489 8.82682 20.3249 8.80139 20.3001 8.77659L14.1394 2.61595C14.1146 2.59115 14.0892 2.56715 14.0632 2.54394V7.55078C14.0632 8.2699 14.6461 8.85286 15.3652 8.85286H20.3721Z" fill="#595959" />
                        <path d="M3.64648 15.6237C3.64648 14.1855 4.81241 13.0195 6.25065 13.0195C7.68889 13.0195 8.85482 14.1855 8.85482 15.6237C8.85482 16.0552 9.2046 16.4049 9.63607 16.4049C10.0675 16.4049 10.4173 16.0552 10.4173 15.6237C10.4173 13.3225 8.55184 11.457 6.25065 11.457C3.94946 11.457 2.08398 13.3225 2.08398 15.6237C2.08398 16.0552 2.43376 16.4049 2.86523 16.4049C3.29671 16.4049 3.64648 16.0552 3.64648 15.6237Z" fill="#595959" />
                        <path d="M7.0319 16.4049C7.0319 15.9735 6.68212 15.6237 6.25065 15.6237C5.81918 15.6237 5.4694 15.9735 5.4694 16.4049V17.9674C5.4694 18.3989 5.81918 18.7487 6.25065 18.7487C6.68212 18.7487 7.0319 18.3989 7.0319 17.9674V16.4049Z" fill="#595959" />
                        <path d="M3.64648 18.7487C3.64648 18.3172 3.29671 17.9674 2.86523 17.9674C2.43376 17.9674 2.08398 18.3172 2.08398 18.7487C2.08398 21.0499 3.94946 22.9154 6.25065 22.9154C8.55184 22.9154 10.4173 21.0499 10.4173 18.7487C10.4173 18.3172 10.0675 17.9674 9.63607 17.9674C9.2046 17.9674 8.85482 18.3172 8.85482 18.7487C8.85482 20.1869 7.68889 21.3529 6.25065 21.3529C4.81241 21.3529 3.64648 20.1869 3.64648 18.7487Z" fill="#595959" />
                    </svg>
                    {files[id] ?
                        <p className="text-xs">
                            {files[id]?.name}
                        </p> : ''
                    }

                </label>

            </div>
            <div className="flex items-center justify-between mt-3 flex-row-reverse">
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M17.3547 2.04297C15.0994 2.04297 13.2711 3.87128 13.2711 6.12663C13.2711 6.54525 13.3341 6.94917 13.4511 7.32941L9.30958 9.69599C8.56112 8.7646 7.41251 8.16845 6.12467 8.16845C3.86933 8.16845 2.04102 9.99677 2.04102 12.2521C2.04102 14.5075 3.86933 16.3358 6.12467 16.3358C7.41259 16.3358 8.56126 15.7396 9.30972 14.8081L13.4512 17.1746C13.3341 17.5549 13.2711 17.9589 13.2711 18.3776C13.2711 20.6329 15.0994 22.4613 17.3547 22.4613C19.6101 22.4613 21.4384 20.6329 21.4384 18.3776C21.4384 16.1223 19.6101 14.2939 17.3547 14.2939C16.0669 14.2939 14.9183 14.8901 14.1698 15.8215L10.0283 13.4549C10.1453 13.0747 10.2083 12.6708 10.2083 12.2521C10.2083 11.8334 10.1453 11.4294 10.0282 11.0491L14.1697 8.68256C14.9181 9.61406 16.0668 10.2103 17.3547 10.2103C19.6101 10.2103 21.4384 8.38197 21.4384 6.12663C21.4384 3.87128 19.6101 2.04297 17.3547 2.04297Z" fill="black" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <path d="M9.74658 15.57V19.3985C9.74658 20.6671 10.775 21.6955 12.0436 21.6955H20.211C21.4796 21.6955 22.508 20.6671 22.508 19.3985V11.2311C22.508 9.96251 21.4796 8.93408 20.211 8.93408H16.3825M14.0855 15.57H5.91815C4.64952 15.57 3.62109 14.5416 3.62109 13.273V5.10565C3.62109 3.83702 4.64952 2.80859 5.91815 2.80859H14.0855C15.3541 2.80859 16.3825 3.83702 16.3825 5.10565V13.273C16.3825 14.5416 15.3541 15.57 14.0855 15.57Z" stroke="black" stroke-width="1.53137" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[10px] font-bold">
                        اشتراک گذاری
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-[#EF1B47] px-3 py-1 text-white flex gap-3 text-sm items-center justify-center" onClick={() => handleSubmit(id)}>
                        <span>
                            ارسال رزومه
                        </span>
                        <span>
                            Apply Now
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JobItem;