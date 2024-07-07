import React from "react";

export const RunSectionMdx = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "w-[96%] pb-[80px] border border-neutral-200 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-900 mx-auto z-[52] relative rounded-[30px] dark:drop-shadow-[0_0_200px_black] "
      }
    >
      {children}
    </div>
  );
};
