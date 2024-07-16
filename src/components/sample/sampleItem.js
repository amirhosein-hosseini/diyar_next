import Link from "next/link";
import styles from "./styles.module.scss";

const SampleItem = ({image , title , desc , slug}) => {
    return(
        <Link href={'/sample/' + slug}>
            <div className={styles.sampleItem + " p-3 rounded-xl duration-300 max-w-[250px] hover:scale-105"}>
                <div className="w-full max-h-[400px] overflow-hidden">
                    <img className="object-cover w-full h-full rounded-lg min-h-[300px]" src={image} alt="image" />
                </div>
                <div className="flex flex-col gap-3 mt-2">
                    <p className="font-bold text-sm">
                        {title}
                    </p>
                    <p className={styles.lineclamp2 + " text-xs"}>
                        {desc}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <p className="font-bold text-xs">
                            مشاهده 
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M17.3547 2.04297C15.0994 2.04297 13.2711 3.87128 13.2711 6.12663C13.2711 6.54525 13.3341 6.94917 13.4511 7.32941L9.30958 9.69599C8.56112 8.7646 7.41251 8.16845 6.12467 8.16845C3.86933 8.16845 2.04102 9.99677 2.04102 12.2521C2.04102 14.5075 3.86933 16.3358 6.12467 16.3358C7.41259 16.3358 8.56126 15.7396 9.30972 14.8081L13.4512 17.1746C13.3341 17.5549 13.2711 17.9589 13.2711 18.3776C13.2711 20.6329 15.0994 22.4613 17.3547 22.4613C19.6101 22.4613 21.4384 20.6329 21.4384 18.3776C21.4384 16.1223 19.6101 14.2939 17.3547 14.2939C16.0669 14.2939 14.9183 14.8901 14.1698 15.8215L10.0283 13.4549C10.1453 13.0747 10.2083 12.6708 10.2083 12.2521C10.2083 11.8334 10.1453 11.4294 10.0282 11.0491L14.1697 8.68256C14.9181 9.61406 16.0668 10.2103 17.3547 10.2103C19.6101 10.2103 21.4384 8.38197 21.4384 6.12663C21.4384 3.87128 19.6101 2.04297 17.3547 2.04297Z" fill="black"/>
                        </svg> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                            <path d="M9.74658 15.57V19.3985C9.74658 20.6671 10.775 21.6955 12.0436 21.6955H20.211C21.4796 21.6955 22.508 20.6671 22.508 19.3985V11.2311C22.508 9.96251 21.4796 8.93408 20.211 8.93408H16.3825M14.0855 15.57H5.91815C4.64952 15.57 3.62109 14.5416 3.62109 13.273V5.10565C3.62109 3.83702 4.64952 2.80859 5.91815 2.80859H14.0855C15.3541 2.80859 16.3825 3.83702 16.3825 5.10565V13.273C16.3825 14.5416 15.3541 15.57 14.0855 15.57Z" stroke="black" stroke-width="1.53137" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="text-[10px] font-bold">
                            اشتراک گذاری
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SampleItem;