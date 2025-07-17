"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
/* eslint-disable @next/next/no-img-element */
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const TopStackedCard = () => {
  useGSAP(() => {
    const contents = gsap.utils.toArray(".content") as HTMLElement[];
    const texts = gsap.utils.toArray(".text") as HTMLElement[];
    const imageWrappers = gsap.utils.toArray(".img-wrapper") as HTMLElement[];

    gsap.set(contents, { y: "100vh", opacity: 1 });
    gsap.set(contents[0], { y: 0 });
    gsap.set(texts, { opacity: 0 });
    gsap.set(texts[0], { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        start: "top top",
        end: `${contents.length * 50}%`,
        scrub: 3,
      },
    });

    contents.forEach((content, index) => {
      if (index === 0) return;

      tl.to(texts[index - 1], {
        opacity: 0,
        duration: 0.5,
      })
        .to(
          imageWrappers[index - 1],
          {
            scale: 0.95,
            y: `+=${5 * (contents.length - index)}`,
            x: `-=${5 * (contents.length - index)}`,
            rotate: `-=${(index % 2 === 0 ? 1 : -1) * 2}`,
            duration: 1,
          },
          "<"
        )
        .to(
          content,
          {
            y: 0,
            duration: 1,
          },
          "<"
        )
        .to(
          texts[index],
          {
            opacity: 1,
            duration: 0.5,
          },
          ">-0.25"
        );
    });
  });

  return (
    <div id="container" className="relative w-full h-screen overflow-hidden">
      <div className="content absolute inset-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-center text-center px-4 md:px-24 gap-4 py-24">
        <p className="text text-xl font-light max-w-lg">
          First card. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At deserunt dolor soluta minus aperiam aut.
        </p>
        <div className="img-wrapper md:w-[400px] h-fit w-[250px] aspect-[4/5] p-4 bg-white rounded-lg shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="block w-full h-full object-cover object-center rounded-md"
          />
        </div>
      </div>
      <div className="content absolute inset-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-center text-center px-4 md:px-24 gap-4 py-24">
        <p className="text text-xl font-light max-w-lg">
          Second card. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At deserunt dolor soluta minus aperiam aut.
        </p>
        <div className="img-wrapper md:w-[400px] h-fit w-[250px] aspect-[4/5] p-4 bg-white rounded-lg shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="block w-full h-full object-cover object-center rounded-md"
          />
        </div>
      </div>
      <div className="content absolute inset-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-center text-center px-4 md:px-24 gap-4 py-24">
        <p className="text text-xl font-light max-w-lg">
          Third card. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At deserunt dolor soluta minus.
        </p>
        <div className="img-wrapper md:w-[400px] h-fit w-[250px] aspect-[4/5] p-4 bg-white rounded-lg shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="block w-full h-full object-cover object-center rounded-md"
          />
        </div>
      </div>
      <div className="content absolute inset-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-center text-center px-4 md:px-24 gap-4 py-24">
        <p className="text text-xl font-light max-w-lg">
          Fourth card. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At deserunt dolor soluta minus aperiam aut.
        </p>
        <div className="img-wrapper md:w-[400px] h-fit w-[250px] aspect-[4/5] p-4 bg-white rounded-lg shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="block w-full h-full object-cover object-center rounded-md"
          />
        </div>
      </div>
      <div className="content absolute inset-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-center text-center px-4 md:px-24 gap-4 py-24">
        <p className="text text-xl font-light max-w-lg">
          Fifth card. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At deserunt dolor soluta minus aperiam aut.
        </p>
        <div className="img-wrapper md:w-[400px] h-fit w-[250px] aspect-[4/5] p-4 bg-white rounded-lg shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="block w-full h-full object-cover object-center rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default TopStackedCard;
