import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"w-[100%] flex justify-center"}>
      <div className={"w-[70%]"}>{children}</div>
    </div>
  );
}
