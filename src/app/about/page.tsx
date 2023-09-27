import Image from "next/image";
import photo from "@/assets/Leo2.jpg";
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
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hi, I'm Leo Yang and my Chinese is
              <span className="whitespace-nowrap"> 杨凌宇</span>
              . I am a software engineer with a passion for capturing moments through the lens as a photographer.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
            In the world of software engineering, I have had the privilege of working on diverse projects, ranging from full-stack web applications to Machine Learning. 
            My love for problem-solving and coding has driven me to continuously expand my skill set, ensuring that I stay up-to-date with the latest technologies and trends in the industry. 
            The thrill of creating innovative solutions to real-world problems is what motivates me every day in my professional journey.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
            Beyond the realm of coding, I find solace and inspiration in the art of photography. 
            Photography allows me to express my creativity and capture the beauty of the world around us. 
            Whether it's a vibrant cityscape, the serenity of nature, or the candid expressions on people's faces, 
            I cherish the ability to freeze these moments in time and share them with others.
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
