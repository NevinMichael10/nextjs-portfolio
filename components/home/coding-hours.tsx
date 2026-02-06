"use client";
import { useEffect, useState } from "react";
import { ClockIcon } from "lucide-react";

const CodingHours = () => {
  const [time, setTime] = useState<string>("Counting...");

  useEffect(() => {
    const controller = new AbortController();
    const fetchTime = async () => {
      try {
        const res = await fetch("/api/wakatime", {
          signal: controller.signal
        });
        const json = await res.json();
        const newValue = json.errorMsg ?? json.WakaTimeResponse?.data?.text ?? "Unavailable";
        setTime(prev => (prev === newValue ? prev : newValue));
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setTime(prev => (prev === "Unavailable" ? prev : "Unavailable"));
        }
      }
    };

    fetchTime();

    return () => controller.abort();
  }, []);

  return (
    <div className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-4.5" />
        <h2 className="text-sm">Coding hours</h2>
      </div>
      <div className="flex grow items-center justify-center text-4xl font-semibold">
        {time}
      </div>
    </div>
  );
};

export default CodingHours;