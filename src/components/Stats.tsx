"use client";

import {motion} from "framer-motion";
import {fadeInUp, staggerChildren} from "@/utils/helpers/framer-motion-helper";
import {stats} from "@/constants";
import {StatType} from "@/types";

const Stats = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        variants={staggerChildren}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat: StatType, index: number) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-300 mb-4">
                <stat.icon className="h-6 w-6 text-neutral-950" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
