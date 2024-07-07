import {RoadmapTable, RoadmapTable2} from "@/components/home/roadmap-table";

export const Roadmap = () => {
    return (
        <div className={
            "w-[100%]  pt-[80px] px-4 sm:pl-10 md:pl-20 sm:pr-10 md:pr-20 pb-[80px] mx-auto z-[52] relative rounded-[30px] flex flex-col items-center "
        }>
            <h1>Roadmap</h1>
         <div className={" w-[100%] max-w-[1440px] h-[600px] bg-neutral-950 border rounded-2xl "}>
         <RoadmapTable2 />
         </div>
        </div>
    )
}