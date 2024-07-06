"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();
  return (
    <div className={"min-h-[350px] pt-20 text-center"}>
      <h1>You are subscribed 🚀</h1>
      <Button onClick={() => router.push("/")}>Go to Home page</Button>
    </div>
  );
};

export default SuccessPage;
