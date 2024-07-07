import { SubscriptionInput } from "@/components/home/subscription-input";

export const Contact = () => {
  return (
    <div
      className={
        "w-[96%] mt-4 bg-gradient-to-t pt-[80px] border border-neutral-200 dark:border-neutral-900 from-white to-neutral-100  pb-[80px] dark:to-neutral-900  dark:from-black mx-auto z-[52] relative rounded-[30px] flex flex-col items-center "
      }
    >
      <h1 className={"w-[70%] max-w-[900px] mb-12"}>Subscribe for updates</h1>
      <SubscriptionInput />
    </div>
  );
};
