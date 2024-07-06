"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { subscription } from "@/actions/subscription";

export const SubscriptionInput = () => {
  const [email, setEmail] = useState<string>("");

  const submitHandler = async () => {
    const id = toast.loading("Subscribing...");
    const { message, error } = await subscription(email);

    if (error) {
      toast.error("Subscription failed", { id });
      setEmail("");
      return;
    }
    if (message) {
      setEmail("");
      toast.success(message, { id });
    }
  };
  return (
    <>
      <div className={"w-[50%] flex max-w-[700px]"}>
        <Input
          placeholder={"Enter your email address"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            "bg-neutral-700 rounded-2xl rounded-r-none text-[17px] p-6 focus:outline-none focus-visible:ring-0"
          }
        />
        <Button
          className={"rounded-2xl relative text-[17px] left-[-15px] p-6 px-12"}
          onClick={submitHandler}
        >
          Subscribe
        </Button>
      </div>
      <p className={"text-sm"}>No spam, just certified good stuff</p>
    </>
  );
};
