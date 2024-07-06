"use client";
import { useSearchParams } from "next/navigation";

const EmailInvalidPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (error == "expire") {
    return (
      <div className={"min-h-[350px] pt-20 text-center"}>
        <h1>Token already expired</h1>
        <p className={"text-[20px]"}>Please send email again</p>
      </div>
    );
  }

  if (error == "verified") {
    return (
      <div className={"min-h-[350px] pt-20 text-center"}>
        <h1>Email already verified</h1>
        <p className={"text-[20px]"}>Please go to Home page</p>
      </div>
    );
  }
  return (
    <div className={"min-h-[350px] pt-20 text-center"}>
      <h1>Email/Token Invalid</h1>
      <p className={"text-[20px]"}>Please send email again</p>
    </div>
  );
};

export default EmailInvalidPage;
