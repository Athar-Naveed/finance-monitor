"use client";

import {motion} from "framer-motion";
import {fadeInUp, staggerChildren} from "@/utils/helpers/framer-motion-helper";
import {features} from "@/constants";
import {FeatureType} from "@/types";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-neutral-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        variants={staggerChildren}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to manage your
            <span className="text-primary"> finances and tasks</span>
          </h2>
          <p className="mt-4 text-xl text-neutral-400">
            Powerful features to help you take control of your financial life and daily tasks
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature: FeatureType, index: number) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-black rounded-lg p-2 border border-neutral-800 transform hover:scale-105 transition-transform"
            >
              <div className="p-6 h-full">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
