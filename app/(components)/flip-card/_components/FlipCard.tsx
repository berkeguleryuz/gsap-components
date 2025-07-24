"use client";
import React from "react";

// light: #f9f43b light2: f0ece5; accent-1: e5d9f6, accent2: ffd2f3, accent3: fcdca6

const FlipCard = () => {
  return (
    <>
      <nav className="fixed w-screen p-8 flex justify-between items-center z-10">
        <div className="logo">
          <span className="uppercase font-semibold text-base p-2 rounded-lg bg-neutral-900 font-mono">
            Site Logo
          </span>
        </div>
        <div className="menu-btn">
          <span className="uppercase font-semibold text-base p-2 rounded-lg bg-neutral-900 font-mono">
            Menu
          </span>
        </div>
      </nav>

      <section className="hero bg-orange-100 text-black relative w-screen h-[100svh] p-8 overflow-hidden">
        <div className="hero-cards absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] flex justify-center gap-4">
          <div
            className="card flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between bg-[#e5d9f6] z-[2]"
            id="hero-card-1">
            <div className="card-title w-full flex justify-between">
              <span className="uppercase font-semibold text-sm">Plan</span>
              <span className="uppercase font-semibold text-sm">01</span>
            </div>
            <div className="card-title w-full flex justify-between">
              <span className="uppercase font-semibold text-sm">01</span>
              <span className="uppercase font-semibold text-sm">Plan</span>
            </div>
          </div>

          <div
            className="card flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between bg-[#fcdca6] z-[1]"
            id="hero-card-2">
            <div className="card-title w-full flex justify-between">
              <span className="uppercase font-semibold text-sm">Design</span>
              <span className="uppercase font-semibold text-sm">02</span>
            </div>
            <div className="card-title w-full flex justify-between">
              <span className="uppercase font-semibold text-sm">02</span>
              <span className="uppercase font-semibold text-sm">Design</span>
            </div>
          </div>

          <div
            className="card flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between bg-[#ffd2f3] z-[0]"
            id="hero-card-3">
            <div className="card-title w-full flex justify-between">
              <span className="uppercase font-semibold text-sm">Build</span>
              <span className="uppercase font-semibold text-sm">03</span>
            </div>
            <div className="card-title w-full flex justify-between">
              <span className="uppercase font-semibold text-sm">03</span>
              <span className="uppercase font-semibold text-sm">Build</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about flex justify-center items-center bg-black text-lime-200 relative w-screen h-[100svh] p-8 overflow-hidden">
        <h1 className="font-bold text-2xl">
          Keep scrolling - it&apos;s worth it
        </h1>
      </section>

      <section className="services bg-orange-100 text-black relative w-screen h-[100svh] p-8 overflow-hidden px-32 py-8">
        <div className="services-header relative w-full text-center translate-y-[400%] transform">
          <h1 className="font-bold text-2xl">
            Stuff I make so you can make stuff
          </h1>
        </div>
      </section>

      <section className="cards fixed z-[-1] justify-center flex top-0 left-0 w-screen bg-orange-100 text-black h-[100svh] p-8 overflow-hidden">
        <div className="cards-container relative w-[75%] h-full flex justify-center items-center gap-16">
          <div
            className="card flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between bg-[#e5d9f6] z-[2] perspective-[1000px]"
            id="card-1">
            <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-floating">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title w-full flex justify-between">
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                    <span className="uppercase font-semibold text-lg">01</span>
                  </div>
                  <div className="card-title w-full flex justify-between">
                    <span className="uppercase font-semibold text-lg">01</span>
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-title w-full flex justify-between">
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                    <span className="uppercase font-semibold text-lg">01</span>
                  </div>
                  <div className="card-copy">
                    <p className="font-semibold font-xl">Discovery</p>
                    <p className="font-semibold font-xl">Audit</p>
                    <p className="font-semibold font-xl">User Flow</p>
                    <p className="font-semibold font-xl">Site Map</p>
                    <p className="font-semibold font-xl">Personas</p>
                  </div>
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">01</span>
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between bg-[#fcdca6] z-[1] perspective-[1000px]"
            id="card-2">
            <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-floating">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                    <span className="uppercase font-semibold text-lg">02</span>
                  </div>
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">02</span>
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                    <span className="uppercase font-semibold text-lg">02</span>
                  </div>
                  <div className="card-copy">
                    <p className="font-semibold font-xl">Discovery</p>
                    <p className="font-semibold font-xl">Audit</p>
                    <p className="font-semibold font-xl">User Flow</p>
                    <p className="font-semibold font-xl">Site Map</p>
                    <p className="font-semibold font-xl">Personas</p>
                  </div>
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">02</span>
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between bg-[#ffd2f3] z-[0] perspective-[1000px]"
            id="card-3">
            <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-floating">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                    <span className="uppercase font-semibold text-lg">03</span>
                  </div>
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">03</span>
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                    <span className="uppercase font-semibold text-lg">03</span>
                  </div>
                  <div className="card-copy">
                    <p className="font-semibold font-xl">Discovery</p>
                    <p className="font-semibold font-xl">Audit</p>
                    <p className="font-semibold font-xl">User Flow</p>
                    <p className="font-semibold font-xl">Site Map</p>
                    <p className="font-semibold font-xl">Personas</p>
                  </div>
                  <div className="card-title">
                    <span className="uppercase font-semibold text-lg">03</span>
                    <span className="uppercase font-semibold text-lg">
                      Plan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="outro flex justify-center items-center bg-black text-lime-200 relative w-screen h-[100svh] p-8 overflow-hidden">
        <h1 className="font-bold text-2xl">The story continues</h1>
      </section>
    </>
  );
};

export default FlipCard;
