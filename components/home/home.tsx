import { RunSection } from "@/components/home/run-section";
import { StopSection } from "@/components/home/stop-section";

export const HomePage = () => {
  return (
    <div className={"w-full space-y-8"}>
      <StopSection />
      <RunSection />
    </div>
  );
};
