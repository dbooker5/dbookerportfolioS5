'use client';

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText('booker@studio5ive.org');
      
      setCopied(true);
    }

  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl border border-white-/[0.1] transition duration-200 hover:shadow-xl ",
        className
      )}
      style={{
        background:"rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Main Image */}
        {img && (
          <img
            src={img}
            alt={img}
            className={cn("object-cover object-center absolute h-full w-full ", imgClassName)}
          />
        )}

        {/* Spare Image */}
        {spareImg && (
          <div className={cn("absolute right-0 -bottom-5", id === 5 && "w-full opacity-80")}>
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {/* Animated BG */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute inset-0 z-50 flex items-center justify-center text-white font-bold">
            </div> */}
          </BackgroundGradientAnimation>
        )}

        {/* Text + Content */}
        <div
          className={cn(
            titleClassName,
            "relative z-50 md:h-full min-h-40 flex flex-col px-5 py-5 lg:p-10 transition duration-200 group-hover/bento:translate-x-2"
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="lg:text-3xl max-w-96 z-10 font-sans font-bold text-lg dark:text-neutral-200">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-1">
                {["Typescript", "Flutter", "Angular.js", "React.js", "Dart"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
              </div>
              <div className="flex flex-col gap-3 lg:gap-1">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                {["Azure", "NeonPostgres","Firebase", "Figma", "Adobe"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 &&(
            <div className="mt-5 relative flex flex-col items-center">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div>

               <MagicButton 
                 title={copied ? 'Email copied' : 'Copy my Email'}
                 icon={<IoCopyOutline />}
                 position="left"
                 otherClasses="!bg-[#161a31]"
                 handleClick={handleCopy}
               />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};