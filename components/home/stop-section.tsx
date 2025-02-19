"use client"
import { SubscriptionInput } from "@/components/home/subscription-input";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export const StopSection = () => {
  const [stopSectionHeight, setStopSectionHeight] = useState(0);
  const [sticky, setSticky] = useState(false);

  const updateStopSectionHeight = () => {
    const stopSection = document.getElementById('stop-section');
    setStopSectionHeight(stopSection ? stopSection.clientHeight : 0);
  };

  useEffect(() => {
    setStopSectionHeight(document.getElementById("stop-section")?.clientHeight || 0)

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
    <div id={"stop-section"}
      className={
        cn("flex items-center justify-center  pt-[100px] w-full flex-col  sticky top-[100px] -z-1 ",
            sticky && `-top-[1000px]`)
      }
    >
      <h1 className={"w-[70%] max-w-[900px]"}>
        Sharing my journey of learning and building things in <br />
        <span className={"underline"}>AI and web</span>
      </h1>
      <SubscriptionInput />
    </div>
  );
};
