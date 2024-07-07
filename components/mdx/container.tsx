import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"w-screen flex justify-center"}>
      <div className={"w-[100%]"}>{children}</div>
    </div>
  );
}
