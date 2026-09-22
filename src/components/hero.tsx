"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-5"
    >
      <motion.div variants={item}>
        <Image
          src="/portrait.jpg"
          alt="Stanley Chiu, standing above Jiufen, Taiwan"
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-2xl border-4 border-background object-cover shadow-lg ring-1 ring-border"
        />
      </motion.div>

      <motion.h1
        variants={item}
        className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
      >
        I&rsquo;m Stanley.
        <motion.span
          aria-hidden
          className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[3px] bg-primary"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1.15, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        />
      </motion.h1>

      <motion.p variants={item} className="text-[15px] text-muted-foreground">
        connect with me{" "}
        <span className="text-primary">&rarr;</span>{" "}
        <a
          href="mailto:stanley.posiang.chiu@gmail.com"
          className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          stanley.posiang.chiu@gmail.com
        </a>
        <span className="px-1.5 text-border">|</span>
        <a
          href="https://www.linkedin.com/in/stanleychiu0314/"
          className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          linkedin
        </a>
        <span className="px-1.5 text-border">|</span>
        <a
          href="https://github.com/stanleychiu0314"
          className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          github
        </a>
      </motion.p>
    </motion.div>
  );
}
