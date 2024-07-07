"use client"
import React, {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export const StopSectionMdx = ({ children }: { children: React.ReactNode }) => {
  const [stopSectionHeight, setStopSectionHeight] = useState(0);
  const [sticky, setSticky] = useState(false);

  const updateStopSectionHeight = () => {
    const stopSection = document.getElementById('stop-section-mdx');
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

  return   <div id={"stop-section-mdx"}
                className={
                  cn("w-[90%] mx-auto lg:w-[70%] flex items-center text-center justify-center  pt-[100px]  flex-col pb-[100px] sticky top-[100px] -z-1 ",
                      sticky && `-top-[1000px]`)
                }
  >{children}</div>;
};
