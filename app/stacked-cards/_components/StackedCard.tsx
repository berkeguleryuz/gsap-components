"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
/* eslint-disable @next/next/no-img-element */
import React from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const StackedCard = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });

    const cards = gsap.utils.toArray("#card") as Element[];

    gsap.set("#img-wrapper img", {
      clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
      autoAlpha: 0,
    });

    gsap.set("#card-content h1, #card-content p", {
      y: 0,
      autoAlpha: 0,
    });

    cards.forEach((card, i) => {
      const img = card.querySelector("img");
      const textEls = card.querySelectorAll(
        "#card-content h1, #card-content p",
      );

      gsap.to(card, {
        scale: 0.8 + 0.2 * (i / (cards.length - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top " + (15 + 35 * i),
          end: "bottom bottom",
          endTrigger: "#container",
          scrub: true,
          pin: card,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.create({
        trigger: card,
        start: "bottom bottom",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(img, {
            clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
            autoAlpha: 1,
            duration: 2,
            delay: 0.2,
            ease: "power2.out",
          });

          tl.to(
            textEls,
            {
              y: -10,
              autoAlpha: 1,
              duration: 0.6,
              ease: "power2.in",
              stagger: 0.4,
            },
            "-=1.5",
          );
        },
      });
    });
  });
  return (
    <div id="smooth-wrapper" className="overflow-hidden h-full">
      <div id="smooth-content" className="transform">
        <div id="spacer" className="w-full min-h-screen">
          <div
            id="container"
            className="flex min-h-screen flex-col items-center">
            <div
              id="stacked-cards"
              className="w-[70%] flex flex-col items-center">
              <div
                id="card"
                className="w-full h-[75vh] flex md:flex-row flex-col-reverse rounded-lg shadow-[rgba(0,0,0,0.2)_0_10px_20px, rgba(0,0,0,0.3)_0_6px_6px] mb-[75vh] bg-white">
                <div
                  id="card-content"
                  className="md:w-1/2 w-full md:h-full h-[20%] flex flex-col items-center justify-center md:px-6">
                  <h1 className="text-2xl font-bold text-black">Card 1</h1>
                  <p className="hidden md:block w-[80%] font-thin text-black/80 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore nam eos doloribus voluptatem voluptate quas earum
                    laudantium dolorem alias fugiat.
                  </p>
                </div>
                <div
                  id="img-wrapper"
                  className="md:w-1/2 w-full h-full rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card-1"
                    className="w-full h-full object-cover block rounded-lg will-change-[clip-path] max-w-[1200px]"
                  />
                </div>
              </div>

              <div
                id="card"
                className="w-full h-[75vh] flex md:flex-row flex-col-reverse rounded-lg shadow-[rgba(0,0,0,0.2)_0_10px_20px, rgba(0,0,0,0.3)_0_6px_6px] mb-[75vh] bg-white">
                <div
                  id="card-content"
                  className="md:w-1/2 w-full md:h-full h-[20%] flex flex-col items-center justify-center md:px-6">
                  <h1 className="text-2xl font-bold text-black">Card 2</h1>
                  <p className="hidden md:block w-[80%] font-thin text-black/80 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore nam eos doloribus voluptatem voluptate quas earum
                    laudantium dolorem alias fugiat.
                  </p>
                </div>
                <div
                  id="img-wrapper"
                  className="md:w-1/2 w-full h-full rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card-2"
                    className="w-full h-full object-cover block rounded-lg will-change-[clip-path] max-w-[1200px]"
                  />
                </div>
              </div>

              <div
                id="card"
                className="w-full h-[75vh] flex md:flex-row flex-col-reverse rounded-lg shadow-[rgba(0,0,0,0.2)_0_10px_20px, rgba(0,0,0,0.3)_0_6px_6px] mb-[75vh] bg-white">
                <div
                  id="card-content"
                  className="md:w-1/2 w-full md:h-full h-[20%] flex flex-col items-center justify-center md:px-6">
                  <h1 className="text-2xl font-bold text-black">Card 3</h1>
                  <p className="hidden md:block w-[80%] font-thin text-black/80 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore nam eos doloribus voluptatem voluptate quas earum
                    laudantium dolorem alias fugiat.
                  </p>
                </div>
                <div
                  id="img-wrapper"
                  className="md:w-1/2 w-full h-full rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card-3"
                    className="w-full h-full object-cover block rounded-lg will-change-[clip-path] max-w-[1200px]"
                  />
                </div>
              </div>

              <div
                id="card"
                className="w-full h-[75vh] flex md:flex-row flex-col-reverse rounded-lg shadow-[rgba(0,0,0,0.2)_0_10px_20px, rgba(0,0,0,0.3)_0_6px_6px] mb-[75vh] bg-white">
                <div
                  id="card-content"
                  className="md:w-1/2 w-full md:h-full h-[20%] flex flex-col items-center justify-center md:px-6">
                  <h1 className="text-2xl font-bold text-black">Card 4</h1>
                  <p className="hidden md:block w-[80%] font-thin text-black/80 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore nam eos doloribus voluptatem voluptate quas earum
                    laudantium dolorem alias fugiat.
                  </p>
                </div>
                <div
                  id="img-wrapper"
                  className="md:w-1/2 w-full h-full rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card-4"
                    className="w-full h-full object-cover block rounded-lg will-change-[clip-path] max-w-[1200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCard;
