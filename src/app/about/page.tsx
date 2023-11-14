import Image from "next/image";
import photo from "@/assets/logo1.png";
import MotionDiv from "@/components/motion-div";
import React from 'react';

export default function AboutPage() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Us</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              PowerAI
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
            PowerAI
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
            PowerAI
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <Image
            src={photo}
            alt="photo"
            priority
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
          />
        </MotionDiv>
      </div>

    </section>
  );
}
