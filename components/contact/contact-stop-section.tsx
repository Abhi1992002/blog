"use client"
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export const ContactStopSection = () => {
    const [stopSectionHeight, setStopSectionHeight] = useState(0);
    const [sticky, setSticky] = useState(false);

    const updateStopSectionHeight = () => {
        const stopSection = document.getElementById('stop-section-contact');
        setStopSectionHeight(stopSection ? stopSection.clientHeight : 0);
    };

    useEffect(() => {

        updateStopSectionHeight();

        const handleResize = () => {
            updateStopSectionHeight();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    useEffect(() => {
        console.log(stopSectionHeight)
        const viewPortHeight = window.innerHeight;
        if(stopSectionHeight > viewPortHeight) {

            setSticky(true);
        }
    },[stopSectionHeight])

    return (
        <div
            id={"stop-section-contact"}
            className={
                cn("flex items-center justify-center  pt-[100px] w-full flex-col pb-[100px] sticky top-[100px] -z-1 ",
                    sticky && `-top-[1000px]`)
            }
        >
            <h1 className={"w-[70%] max-w-[900px]"}>Contact me</h1>
        </div>
    );
};