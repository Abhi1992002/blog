import { SubscriptionInput } from "@/components/home/subscription-input";

export const Contact = () => {
  return (
    <div
      className={
        "w-[96%] mt-4 bg-gradient-to-t pt-[80px] border border-neutral-800 pb-[80px] to-neutral-900  from-black mx-auto z-[52] relative rounded-[30px] flex flex-col items-center "
      }
    >
      <h1 className={"w-[70%] max-w-[900px] mb-12"}>Subscribe for updates</h1>
      <SubscriptionInput />
    </div>
  );
};
