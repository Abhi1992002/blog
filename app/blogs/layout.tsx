import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={
        "prose prose-neutral prose-h1:text-neutral-800 dark:prose-h1:text-neutral-200 prose-h2:text-neutral-800 dark:prose-h2:text-neutral-200 prose-h3:text-neutral-800 dark:prose-h3:text-neutral-200 dark:prose-invert w-[100vw] max-w-none prose-p:text-[16px] lg:prose-p:text-[17px] prose-h1:text-[88px] prose-h2:text-[60px] prose-h1:text-center prose-h1:font-normal prose-h2:font-normal prose-h3:font-normal prose-h4:font-normal prose-h3:text-[40px] prose-h4:text-[25px] flex flex-col items-center"
      }
    >
      {children}
    </main>
  );
}
