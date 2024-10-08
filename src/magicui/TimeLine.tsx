import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  img:string;
  company: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4  dark:text-white max-w-4xl font-semibold">
          My Journey in Frontend Development
        </h2>
        <p className=" text-sm md:text-base max-w-xl font-semibold">
          With over 1.6 years of experience in frontend development, I have a
          strong foundation in creating user-friendly web applications and
          interfaces.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 h-fit">
  {data.map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
    >
      <div className="sticky flex flex-col md:flex-row  items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
         <img className="rounded h-5 w-5" src={item.img}/>
        </div>
        <div className="flex lg:flex-col ">
          <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold">
            {item.title}
          </h3>
          <p className="text-center underline relative left-20 w-fit ">
            {item.company}
          </p>
        </div>
      </div>

      <div className="relative pl-4 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-xl mb-4 text-left font-bold ms-10">
          {item.title}
        </h3>
        <div>
          <p className=" text-white p-4 rounded-md m-4">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  ))}
  <div
    style={{
      height: height + "px",
    }}
    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
  >
    <motion.div
      style={{
        height: heightTransform,
        opacity: opacityTransform,
      }}
      className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
    />
  </div>
</div>

    </div>
  );
};
