import { SubscriptionInput } from "@/components/home/subscription-input";

export const StopSection = () => {
  return (
    <div
      className={
        "flex items-center justify-center  pt-[100px] w-full flex-col pb-[100px] sticky top-[100px] -z-1"
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
