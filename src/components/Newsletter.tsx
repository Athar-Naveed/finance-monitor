"use client";

import {motion} from "framer-motion";
import {fadeInUp} from "@/utils/helpers/framer-motion-helper";

const Newsletter = () => {
  return (
    <section className="py-24 bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        variants={fadeInUp}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="text-neutral-400 mb-8">
          Get the latest updates on new features and financial tips.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-black border border-neutral-800 focus:outline-none focus:border-purple-600"
          />
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
