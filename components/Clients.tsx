import React from "react";
import { InfiniteMovingCards } from "./ui/InfniteMovingCards";
import { testimonials } from "@/data";
import { companies } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from {""}
        <span className="text-purple"> Clients & References</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:max-w-60 max-w-32 gap-2 p-2 rounded-lg hover:bg-white/5 hover:scale-105 transition-all duration-300 group"
            >
              <img
                src={img}
                alt={name}
                className="md:w-10 w-5 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src={nameImg}
                alt={name}
                className="md:w-24 w-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
