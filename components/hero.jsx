"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          {/* <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
          Accelerate Your Career Growth with
            <br />
            CareerBoost-AI
          </h1> */}
          <h1 className="relative inline-block text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent text-center overflow-hidden shining-text">
  Accelerate Your Career Growth with
  <br />
  CareerBoost-AI
</h1>


          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Take your career to the next level with custom advice, smart interview preparation, and AI-powered support.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
  <Link href="/dashboard">
    <Button
      size="lg"
      className="px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-semibold shadow-md hover:brightness-110 transition-all duration-300"
    >
      Get Started
    </Button>
  </Link>
</div>


        {/* <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link> */}
          {/* <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link> */}
        {/* </div> */}
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner3.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
