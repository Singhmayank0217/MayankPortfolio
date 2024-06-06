"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a passionate and driven individual,{" "}
        <span className="font-medium">I am a 3rd-year B.E. CSE student</span>,at
        Chandigarh University,{" "}
        <span className="font-medium">
          with a profound interest in web development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am enthusiastic about collaborating with others and
        fostering a learning environment{" "}
        <span className="font-medium">where knowledge and ideas </span>are
        shared to create innovative solutions.
      </p>

      <p>
        <span className="italic">
          Beyond coding, I have diverse interests that keep me engaged and
          balanced.
        </span>
        ,. I find joy in playing <span className="font-medium">Cricket</span>,
        watching movies, and cooking. I also enjoy{" "}
        <span className="font-medium">Trading</span>, as it is another area that
        fascinates me, where I enjoy exploring the financial markets and
        understanding various investment strategies{" "}
      </p>
    </motion.section>
  );
}
