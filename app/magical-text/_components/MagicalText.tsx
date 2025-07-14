"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrambleTextPlugin, SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const MagicalText = () => {
  useGSAP(() => {
    const chars = SplitText.create("p", {
      type: "chars",
      charsClass: "char",
    }).chars as HTMLElement[];

    chars.forEach((char) => (char.dataset.content = char.innerHTML));

    let lastMouseX = 0;
    let lastMouseY = 0;

    const textContainer = document.querySelector(
      "#text-container",
    ) as HTMLElement;
    if (textContainer) {
      textContainer.onpointermove = (e: PointerEvent) => {
        if (e.clientX === lastMouseX && e.clientY === lastMouseY) {
          return;
        }

        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        chars.forEach((char) => {
          const rect = char.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const x = e.clientX - centerX;
          const y = e.clientY - centerY;
          const distance = Math.sqrt(x * x + y * y);

          if (distance < 100) {
            gsap.to(char, {
              overwrite: true,
              duration: 1,
              scrambleText: {
                text: char.dataset.content || "",
                chars: ".:",
                speed: 0.5,
              },
              onStart: () => {
                char.classList.add("text-blue-600");
              },
              onComplete: () => {
                char.classList.remove("text-blue-600");
              },
            });
          }
        });
      };
    }
  });

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black">
      <div
        id="text-container"
        className="max-w-3xl text-3xl leading-[1.5] text-blue-200 cursor-pointer">
        <p id="text" style={{ fontFamily: "Poppins, monospace" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default MagicalText;
